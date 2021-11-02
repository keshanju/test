import LocalStorageUtil from '@/utils/LocalStorageUtil'

/**
 * 封装webSocket
 */
export default class Socket {

  private static instance: Socket | null = null // socket实例

  private socket!: WebSocket;

  private static _isConnected = false  //连接状态

  private cachedUrl: string = 'ws://192.168.3.15:8443/spot'; // 连接地址

  private options: object = {}

  private token: string = ''; // 连接地址

  private cbs: Function[] = []; // 存放回调的方法

  private heartbeatTime: number = 5 * 1000;  // 每五秒发送一次心跳

  private heartbeatTimer: any = null; // 存放心跳的Time

  constructor(url = '', options = {}) {
    if (Socket.instance) {
      return Socket.instance
    }
    this.cachedUrl = url
    this.options = options
    Socket.instance = this
    this.connect()
  }

  /**
   * 连接websocket
   */
  private connect() {
    // this.socket = new WebSocket(this.cachedUrl, (LocalStorageUtil.getToken() as any).replace("Bearer ", ""))
    this.socket = new WebSocket(this.cachedUrl)
    console.warn("正在连接...")
    // 连接成功
    this.socket.onopen = () => {
      console.warn("连接成功...")
      Socket._isConnected = true
      if (Socket._isConnected) { 
        this.heartbeatTimer = setInterval(() => {
          // 发送心跳
          this.socket.send(JSON.stringify({ 'path': 'ping' }))   
        }, this.heartbeatTime)
      }
    }
    this.init(this.socket)
    return this.socket
  }

  /**
   * 初始化
   */
  private init(websocket: WebSocket) {
    // 接受消息
    websocket.onmessage = (evt) => {
      const data = JSON.parse(evt.data)
      // if (data.code == 102) {
      //   // 退出登录
      //   // LocalStorageUtil.clearToken()
      //   window.location.reload()
      // }
      this.callCbs(this.cbs, data)
    }

    // 连接异常
    websocket.onerror = () => {
    }

    // 关闭连接
    websocket.onclose = (e: any) => {
      // 停止心跳
      if (this.heartbeatTimer) {
        clearInterval(this.heartbeatTimer)
      }
      console.warn('websoket断开(关闭：)' + e.code + '  ' + e.reason + e.wasClean);
      Socket._isConnected = false
      setTimeout(() => {
        // 重新连接
        this.connect()
      }, 10000)
    }
  }

  private sendMsg(options: {}) {
    this.socket.send(JSON.stringify(options))
  }

  private getMsg() {
    return this.callCbs(this.cbs, '')
  }

  /**
   * 执行回掉函数
   */
  private callCbs(cbs: Function[], data: any) {
    cbs.forEach((v) => {
      v(data)
    })
  }

  /**
   * 添加
   */
  subscribe(func: Function) {
    this.cbs.push(func)
  }
}
