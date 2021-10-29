// import def from '@/DefaultSetting'
// import mqtt from 'mqtt'
// import { Utf8ArrayToStr } from '@/ts/utils/Utils';
// import LocalStorageUtil from '@/ts/utils/LocalStorageUtil'
// import { messageHooks } from '@/hooks/currency'
// import { myStore } from '@/store/index'
// import { Toast } from 'vant';

// export default class Mqtt {
//   private static instance: Mqtt

//   private mqttClient?: mqtt.MqttClient // mqtt连接

//   public subscribeStatus = false; // 订阅状态 true：已订阅 false:未订阅
  
//   private readonly BASE_URL = '/airobot/to_pad/{officeID}/+'

//   public static readonly ROBOT_STATUS = '/robotStatus' // 机器人状态订阅信息

//   public static readonly NOTICE = '/notice' // 语音

//   public static readonly ROBOT_JOB = '/robotJob' // 机器人任务变更

//   public static readonly ROBOT_STATIS_STATE = '/robotStatusStatistics' // 机器人状态统计

//   public static readonly ROBOT_DISTRIBUTE = '/distributeStatistics' // 配送任务统计
  
//   // 回调函数
//   private cbs = new Array<Function>()

//   private toast_: any = null
  
//   constructor() {
//     if (Mqtt.instance) {
//       return Mqtt.instance
//     }
//     this.init() // 初始化
//     Mqtt.instance = this
//   }
  
//   /**
//    * 生成订阅名称
//    * @param name 订阅消息名
//    * @returns 
//    */
//   private getURL(name: string): string {
//     const officeID: any = LocalStorageUtil.getSetting().userInfo.officeID;
//     return (this.BASE_URL + name).replace('{officeID}', officeID);
//   }

//   private init() {
//     this.mqttClient = mqtt.connect(process.env.VUE_APP_WS, {
//       clientId: `${LocalStorageUtil.getSetting().userInfo.username}(pad)-${new Date().getTime()}`,
//       username: process.env.VUE_APP_MQTT_USERNAME,
//       password: process.env.VUE_APP_MQTT_PASSWORD,
//       clean: true
//     })
//     //订阅后端给你发的字段 在on里面接收
//     this.mqttClient.on('connect', () => {
//       if (this.toast_) {
//         this.toast_.clear()
//       }
//       Toast({
//         position: 'bottom',
//         message: '连接成功'
//       })
//       // success('连接成功')
//       if (!this.subscribeStatus) {
//         this.subscribeMqtt() // 订阅消息
//       } else {
//         // 已经订阅，断线重连后重新获取机器人列表
//         const store = myStore()
//         store.dispatch('system/getRobotList')
//       }
//     })

//     //接收消息
//     this.mqttClient?.on('message', (topic: any, message: any) => {
//       if (process.env.NODE_ENV === 'development') {
//         console.log('=============================' + new Date())
//         console.warn(topic)
//         console.log(Utf8ArrayToStr(message).data)
//       }
//       // 执行订阅的方法
//       this.cbs.forEach(func => {
//         func(topic, Utf8ArrayToStr(message).data)
//       })
//     })

//     // 重新连接
//     this.mqttClient?.on('reconnect', (error: any) => {
//       this.toast_ = Toast({
//         duration: 0,
//         position: 'bottom',
//         message: '重新连接...'
//       })
//     })

//     this.mqttClient.on('error', (error: any) => {
//       const { fail } = messageHooks()
//       fail('连接失败' + error)
//     })

//   }

//   // 订阅mqtt消息
//   public async subscribeMqtt() {
//     this.subscribeStatus = true
//     const { fail, success } = messageHooks()
//     Promise.all([Mqtt.NOTICE, Mqtt.ROBOT_STATUS, Mqtt.ROBOT_JOB, Mqtt.ROBOT_STATIS_STATE, Mqtt.ROBOT_DISTRIBUTE].map(topic => {
//       return new Promise((resolve, reject) => {
//         this.mqttClient?.subscribe(this.getURL(topic), { qos: 2 }, (err: any) => {
//           if (err) {
//             reject('订阅失败')
//           } else{
//             resolve('订阅成功')
//           }
//         })
//       })
//     })).then(() => {
//       // 订阅成功
//       this.subscribeStatus = true
//     }).catch(() => {
//       this.subscribeStatus = false
//       fail('消息订阅失败')
//     })
//   }

//   // 退订mqtt消息
//   public unsubscribeMqtt() {
//     this.subscribeStatus = false
//     const { fail, success } = messageHooks()
//     Promise.all([Mqtt.NOTICE, Mqtt.ROBOT_STATUS, Mqtt.ROBOT_JOB, Mqtt.ROBOT_STATIS_STATE, Mqtt.ROBOT_DISTRIBUTE].map(topic => {
//       return new Promise((resolve, reject) => {
//         this.mqttClient?.unsubscribe(this.getURL(topic), { qos: 2 }, (err: any) => {
//           if (err) {
//             reject('订阅失败')
//           } else{
//             resolve('订阅成功')
//           }
//         })
//       })
//     })).then(() => {
//       // 取消订阅成功
//       this.subscribeStatus = false
//     }).catch(() => {
//       this.subscribeStatus = true
//       fail('取消订阅失败')
//     })
//   }

//   // 订阅消息
//   public subscribe(func: Function) {
//     this.cbs.push(func)
//   }

//   // 移除订阅
//   public removeListener(func: Function) {
//     this.cbs.splice(this.cbs.indexOf(func), 1)
//   }
// }