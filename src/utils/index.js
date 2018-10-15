/*
* 对Date的扩展，将 Date 转化为指定格式的String
* 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
* 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
* @param {String} fmt 目标时间格式
*/
Date.prototype.Format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}
/**
 * 随机码 对指定的字符串中随机取参数位
 */
export const randomString = function (len) {
  len = len || 32
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  var maxPos = chars.length
  var pwd = ''
  for (var i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

/**
 * 获取文件后缀
 */
export const getSuffix = function (filename) {
  let pos = filename.lastIndexOf('.')
  let suffix = ''
  if (pos != -1) {
    suffix = filename.substring(pos)
  }
  return suffix
}
/**
 * 定义全局函数，或者单独引用
 * */
/**
 * 浮点数加法
 * */
export const addition = (arg1, arg2) => {
  let r1, r2, m
  if (parseInt(arg1) === arg1) {
    r1 = 0
  } else {
    r1 = arg1.toString().split('.')[1].length
  }
  if (parseInt(arg2) === arg2) {
    r2 = 0
  } else {
    r2 = arg2.toString().split('.')[1].length
  }
  m = Math.pow(10, Math.max(r1, r2))
  return (arg1 * m + arg2 * m) / m
}
/**
 * 浮点数减法
 * */
export const subtraction = (arg1, arg2) => {
  let c = 0
  let d = arg1.toString()
  let e = arg2.toString()
  try {
    c += d.split('.')[1].length
  } catch (f) {}
  try {
    c += e.split('.')[1].length
  } catch (f) {}
  return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c)
}
/**
 * 浮点数乘法
 * */
export const multiplication = (arg1, arg2) => {
  let m = 0
  let s1 = arg1.toString()
  let s2 = arg2.toString()
  try {
    m += s1.split('.')[1].length
  } catch (e) {
  }
  try {
    m += s2.split('.')[1].length
  } catch (e) {
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
}
/**
 * 对象的深拷贝
 * @param source 需要深拷贝的对象
 * @returns {object}
 */
export const objDeepCopy = (source) => {
  let sourceCopy = {}
  for (let item in source) sourceCopy[item] = typeof source[item] === 'object' ? objDeepCopy(source[item]) : source[item]
  return sourceCopy
}
/**
 * 对象数组的深拷贝
 * @param source 需要深拷贝的对象
 * @returns {object}
 */
export const objArryDeepCopy = (source) => {
  let sourceCopy = source instanceof Array ? [] : {}
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? objArryDeepCopy(source[item]) : source[item]
  }
  return sourceCopy
}
/**
 * 判断是否是微信浏览器
 * */
export const isWxBrowser = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}
/**
 * 判断是否是支付宝浏览器
 * */
export const isAliBrowser = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/alipaydefined/i) === 'alipaydefined') {
    return true
  } else {
    return false
  }
}
/**
 * 判断手机是android 还是 ios
 * */
export const mobileVersion = () => {
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  let isIos = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端

  if (isAndroid) {
    return 'android'
  } else if (isIos) {
    return 'ios'
  } else {
    return 'windows'
  }
}

/**
 * 将更新后的信息，存储到sessionStorage中
 * 及需要暂时保存在本地的数据 关闭浏览器后及清除
 * */
export const setSessionStorage = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value))
}

/**
 * 删除到sessionStorage中
 * 及需要暂时保存在本地的数据 关闭浏览器后及清除
 * */
export const removeSessionStorage = (key) => {
  window.sessionStorage.removeItem(key)
}

/**
 * 保存id
 * @param key
 * @param value
 */
export const setIdSessionStorage = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value))

  // window.sessionStorage.removeItem(key);
}

/**
 * 将更新后的信息，存储到localStorage中
 * 及需要永久保存在本地的数据 关闭浏览器后也还存在的
 * */
export const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

/**
 * 获取存储在sessionStorage中的数据
 * */
export const getSessionData = key => window.sessionStorage.getItem(key)

/**
 * 获取存储在localStorage中的数据
 * */
export const getLocalStorage = key => window.localStorage.getItem(key)
// 设置sessionStorage
export const setSessionStorages = (key, value) => {
  if (typeof value === 'object') {
    window.sessionStorage.setItem(key, JSON.stringify(value))
  } else {
    window.sessionStorage.setItem(key, value)
  }
}

// 获取sessionStorage
export const getSessionStorage = key => {
  let storage = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(storage)
  } catch (err) {
    return storage
  }
}

window.setSessionStorage = setSessionStorages
window.getSessionStorage = getSessionStorage