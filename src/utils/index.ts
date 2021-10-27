

export default class Util {
  
  /**
   * 注：新增一种语言，需要同时修改
   */
    public static ZH_CN = 'zh_CN';
    public static EN = 'en';
    public static CN = 'cn'; //地址栏用的


  /**
   * 获取dommain，格式示例：.bohe.com
   */
    public static getDomain() {
    const hostname = window.location.hostname;
    const hostList = hostname.split('.');
    let domain = '';
    for(let i = 1;i < hostList.length;i++) {
        domain = domain + '.' +hostList[i];
    }
    return domain;
  }

  /**
   * @Author Wings Ke 2020-07-24
   * @Desc 获取域名 window.location.origin
   * @Param None
  */
   public static getOrigin() {
    let origin = window.location.origin;
    if (!origin) {
        origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    }
    return origin
  }
  
  /**
   * 获取地址栏参数
   * @param {*参数名称} name
   * @returns
   */
   public static getUrlParams(name) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let str = window.location.search.substr(1).match(reg)
    if (str != null) return unescape(str[2])
    return '';
  }

  /**
   * 转换二进制流数据为base64
   * @param buffer 
   * @returns STRING
   */
  public static arrayBufferToBase64 (buffer) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  
  /**
   * 获取用户浏览器名称
   * @return string
   */
   public static getExplore() {
    let Sys = {
      ie: '',
      edge: '',
      firefox: '',
      chrome: '',
      opera: '',
      safari: ''
    };
    let ua = navigator.userAgent.toLowerCase();
    let s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] :
    (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;
      // 根据关系进行判断
    if (Sys.ie) return ('IE: ' + Sys.ie);
    if (Sys.edge) return ('EDGE: ' + Sys.edge);
    if (Sys.firefox) return ('Firefox: ' + Sys.firefox);
    if (Sys.chrome) return ('Chrome: ' + Sys.chrome);
    if (Sys.opera) return ('Opera: ' + Sys.opera);
    if (Sys.safari) return ('Safari: ' + Sys.safari);
    return '';
  }

  /**
   * 判断是否移动端
   */
  public static isMobile() {
    const sUserAgent = navigator.userAgent.toLowerCase();
    let is_mobile = false;
    if ((sUserAgent.match(/(ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i))) {
      is_mobile = true;
    }
    return is_mobile;
  }


  public static getCookie(cname) {
    var name = cname + '='
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) == ' ') c = c.substring(1)
      if (c.indexOf(name) !== -1) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }

  public static setCookie(cname, cvalue, exdays, path) {
    let cookieVal = cname + '=' + cvalue;
    if (exdays) {
      const d = new Date()
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
      const expires = 'expires=' + d.toUTCString()
      cookieVal += ';' + expires
    }
    if (path) {
      cookieVal += ';path=' + path
    }
    document.cookie = cookieVal
  }

}