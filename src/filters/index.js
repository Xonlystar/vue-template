/* eslint-disable */
/**
 * 格式化时间
 *
 * @param {String} str
 * @returns 格式化后的时间
 */
export const formatDate = (str) => {
  if (!str) return ''
  let date = new Date(str)
  let time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
      return ''
  } else if ((time / 1000 < 30)) {
      return '刚刚'
  } else if (time / 1000 < 60) {
      return parseInt((time / 1000)) + '秒前'
  } else if ((time / 60000) < 60) {
      return parseInt((time / 60000)) + '分钟前'
  } else if ((time / 3600000) < 24) {
      return parseInt(time / 3600000) + '小时前'
  } else if ((time / 86400000) < 31) {
      return parseInt(time / 86400000) + '天前'
  } else if ((time / 2592000000) < 12) {
      return parseInt(time / 2592000000) + '月前'
  } else {
      return parseInt(time / 31536000000) + '年前'
  }
}

/**
* 时间挫转时间
* @param val 传入的时间挫
* @param type 需要转换的类型  YYYY-MM-DD ： 只需要日期 ； YYYY-MM-DD HH:MM:SS ： 日期加时分秒
* 如只需要如期，则startNum ： 0 ， endNum ： 10
*/
export const transitionTimestamp = (val, type='YYYY-MM-DD HH:MM:SS') => {
  val = (val+'').length < 13 ? val*1000 : val*1 // 当不是毫秒时候，转换为毫秒

  let date = new Date(val),
  year=date.getFullYear(),
  month=date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth() +1,
  day=date.getDate()<10 ? '0'+date.getDate() : date.getDate(),
  hour= date.getHours()*1 < 10 ? '0'+date.getHours() : date.getHours(),
  minute= date.getMinutes()*1 < 10 ? '0'+date.getMinutes() : date.getMinutes(),
  second= date.getSeconds()*1 < 10 ? '0'+date.getSeconds() : date.getSeconds()

  switch (type) {
      case 'YYYY-MM-DD' :
          return   year+"-"+month+"-"+day;
          break;
      case 'YYYY-MM-DD HH:MM:SS' :
          return   year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
          break;
      case 'HH:MM:SS' :
          return   hour+":"+minute+":"+second;
          break;
  }
}

/**
* Date类型格式化
* @param date 传入的Date
* @param type 需要转换的类型  YYYY-MM-DD ： 只需要日期 ； YYYY-MM-DD HH:MM:SS ： 日期加时分秒
* 如只需要如期，则startNum ： 0 ， endNum ： 10
*/
export const transitionDate = (date,type) => {
  let year=date.getFullYear(),
      month=date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1,
      day=date.getDate()<10 ? '0'+date.getDate() : date.getDate(),
      hour= date.getHours()*1 < 10 ? '0'+date.getHours() : date.getHours(),
      minute= date.getMinutes()*1 < 10 ? '0'+date.getMinutes() : date.getMinutes(),
      second= date.getSeconds()*1 < 10 ? '0'+date.getSeconds() : date.getSeconds()

  switch (type){
      case 'YYYY-MM' :
          return `${year}-${month}`;
          break;
      case 'YYYY-MM-DD' :
          return  `${year}-${month}-${day}`;
          break;
      case 'YYYY-MM-DD HH:MM:SS' :
          return  `${year}-${month}-${day} ${hour}:${minute}:${second}`;
          break;
  }
}

/**
* 截取字符串
* @param val
* @param length
*/
export const limitString = (val, length) => {
  if(val.length < length) {
      return val;
  } else {
      return `${val.substr(0, length)}...`
  }
}

/*
*  时间转时间戳
*  @param val
* */
export const changeTimestamp = (val) => new Date(val).getTime()

/*
*  时间戳转时间
*  @param val
* */
export const changeTime = (val) => new Date(parseInt(val))

/**
*  去空格
* */
export const deleteSpace = (val) => val.replace(/\s+/g,'')
/**
* 用“*”加密处理
* */
export const encryptionFun = (val) => {
let reg = /^(\d{3})(\d{4})\d{4}$/
return val.replace(reg, '$1$2****')
}

/**
*  获取费率取整 / 100 + %号
* */
export const numberHundred = (val) => {
if (val === null){
  return ''
}else if (val === 0){
  return 0
}else{
  return parseFloat((val / 10).toFixed(10)) + '%'
}
}
/**
*  获取费率取整 * 100 + %号
* */
export const numberRideHundred = (val) => {
if (val === null ){
  return ''
} else if (val === 0) {
  return 0
} else {
  return parseFloat((val * 100).toFixed(2)) + '%'
}
}

/**
*  获取费率取整 * 1000
* */
export const numberThousand = (val) => val === null ? '' : parseFloat((val * 1000).toFixed(2))

/**
* 通道代码转通道中文名称
* @param payType(int) 通道名称代码
* 1.支付宝线下支付 2.支付宝线上支付 3.微信线下支付
* 4.微信线上支付 5.京东线下支付 6.京东线上支付
* 7.翼支付线下支付 8.翼支付线上支付 9.QQ钱包线下支付
* 10.QQ钱包线上支付 50.绿洲计划 51.蓝海行动
*/
export const passageWay = payType => {
  let val = ''
  switch (payType) {
    case 1:
      val = '线下支付(扫码/刷卡)'
      break
    case 2:
      val = '线上支付(H5)'
      break
    case 3:
      val = '线下支付(扫码/刷卡/线下公众号)'
      break
    case 4:
      val = '线上支付(H5/APP/线上公众号)'
      break
    case 5:
      val = '京东线下支付'
      break
    case 6:
      val = '京东线上支付'
      break
    case 7:
      val = '翼支付线下支付'
      break
    case 8:
      val = '翼支付线上支付'
      break
    case 9:
      val = 'QQ钱包线下支付'
      break
    case 10:
      val = 'QQ钱包线上支付'
      break
    case 50:
      val = '绿洲计划'
      break
    case 51:
      val = '蓝海行动'
      break
    default:
      break
  }
  return val
}

/**
 * 开启关闭转换为文字提示
 * @param {number} val 开启关闭的关键词
 */
export const isOpen = val => val === 1 ? '开启' : '关闭'
/**
 * 是否转换为文字提示 持牌
 * @param {number} val 开启关闭的关键词
 */
export const isLicense = val => val === 1 ? '是' : '否'

/**
* 出款周期
* @param val
*/
export const transferCycle = val => val === 0 ? 'T1' : 'D1'

/**
* 判断账户类型
* @param val
* @returns {*}
*/
export const cardInfo = val => val === 0 ? '对私' : '对公'
/**
* 判断账号类型2
* @param val
* @returns {*}
*/
export const cardInfo1 = val => {
  switch (val) {
    case 1:
      return '对公'
      break
    case 0:
      return '对私'
      break
    case '1':
    return '对公'
    break
    case '0':
    return '对私'
    break
  }
}

/**
* 判断是否加急
* @param val
* @returns {*}
*/
export const isUrgent = val => val === 0 ? '关闭' : '开启'

/**
 * 判断渠道方level等级
 * @param val
 * @returns {*}
 */
export const isLevel = val => {
  switch (val) {
    case 1:
      return 'LEVEL 1'
      break
    case 2:
      return 'LEVEL 2'
      break
    case 3:
      return 'LEVEL 3'
      break
  }
}

/**
 * 核算模块、核算状态
 * @param val
 * @returns {*}
 */
export const verifyStatus = val => {
  switch (val) {
    case 0:
      return '未核算'
      break
    case 1:
      return '一次确认'
      break
    case 2:
      return '已核算'
      break
    case 3:
      return '审核不通过'
      break
    case 4:
      return '暂不核算'
      break
    case 5:
      return '部分核算'
      break
  }
}

/**
 * 核算模块、核算状态
 * @param val
 * @returns {*}
 */
export const checkTransferStatus = val => {
  switch (val) {
    case 0:
      return '未核算'
      break
    case 1:
      return '一次确认'
      break
    case 4:
      return '审核不通过'
      break
  }
}


/**
 * 替换费率，将val为null/空的值 替换成
 * @param {String}} val 费率的值
 */
export const replaceNull = val => val === '' ? '--' : val

 /**
 * 替换成中文
 * @param {String} val 费率的值
 */
export const payMode = val => val === 0 ? '大商户模式' : '商户入驻模式'

/**
* 获取商户类型
* @param val
* @returns {*}
*/
export const merchantType = val => {
switch (val) {
  case 1:
    return '小微'
    break
  case 2:
    return '个体户'
    break
  case 3:
    return '企事业'
    break
}
}
/**
* 判断结算卡类型
* @param val
* @returns {*}
*/
export const cardType = val => {
switch (val) {
  case 0:
    return '非法人'
    break
  case 1:
    return '法人'
    break
  case 2:
    return '单位'
    break
  case '0':
    return '非法人'
    break
  case '1':
    return '法人'
    break
  case '2':
    return '单位'
    break
}
}
/**
* 支付通道
* @param val
* @returns {*}3. 4. 5. 6.
*/
export const payWaySelect = val => {
switch (val) {
  case 1:
    return '支付宝'
    break
  case 2:
    return '微信'
    break
  case 3:
    return '京东'
    break
  case 4:
    return '翼支付'
    break
  case 5:
    return 'QQ钱包'
    break
  case 6:
    return '银联'
    break
  case -1:
    return '全部'
    break
}
}
/**
* 回盘状态
* @param val
* @returns {*}
*/
export const backStatus = val => {
switch (val) {
  case 0:
    return '未回盘'
    break
  case 1:
    return '回盘中'
    break
  case 2:
    return '回盘成功'
    break
  case 3:
    return '回盘部分成功'
    break
  case 4:
    return '回盘失败'
    break
  case 5:
    return '回盘文件已获取'
    break
}
}
/**
* 文件状态
* @param val
* @returns {*}
*/
export const fileStatus = val => {
switch (val) {
  case 0:
    return '未生成'
    break
  case 1:
    return '生成中'
    break
  case 2:
    return '已生成'
    break
  case 3:
    return '上传中'
    break
  case 4:
    return '上传失败'
    break
  case 5:
    return '上传成功'
    break
  case 6:
    return '生成文件失败'
    break
}
}
/**
* 判断T+2回盘状态
* @param val
* @returns {*}
*/
export const backBalanceStatus = val => {
switch (val) {
  case 0:
    return '未回盘对账'
    break
  case 1:
    return '回盘对账中'
    break
  case 2:
    return '回盘对账成功'
    break
  case 3:
    return '回盘部分成功'
    break
  case 4:
    return '回盘对账失败'
    break
}
}
/**
* 打款状态
* @param val
* @returns {*}
*/
export const transferStatus = val => {
switch (val) {
  case 0:
    return '未打款'
    break
  case 1:
    return '一次确认'
    break
  case 2:
    return '打款成功'
    break
  case 3:
    return '打款失败'
    break
  case 4:
    return '审核不通过'
    break
  case 5:
    return '暂不打款'
    break
  case 6:
    return '打款中'
    break
  case 7:
    return '部分打款成功'
    break
  case 8:
    return '冻结'
    break
}
}
/**
* 流水详情
* @param val
* @returns {*}
*/
export const waterStatus = val => {
switch (val) {
  case 1:
    return '打款成功'
    break
  case 2:
    return '打款失败'
    break
  case 3:
    return '打款中'
    break
  case 4:
    return '冻结'
    break
}
}
/**
* 挂起类型
* @param val
* @returns {*}
*/
export const allocateType = val => {
switch (val) {
  case 0:
    return '常规打款'
    break
  case 1:
    return '暂不打款'
    break
  case 2:
    return '打款失败'
    break
  case 3:
    return '打款中'
    break
  case 4:
    return '冻结'
    break
  case 5:
    return '打款部分成功'
    break
}
}

/**
* 判断渠道方规则是否为0
* @param val
*/
export const isZero = val => val === 0 ? '--' : val

/**
* 用户规则是否加急
* @param val
* @returns {*}
*/
export const isRuleUgent = val => val === 0 ? '普通' : '加急'

/**
* 风控展示
* @param val
* @returns {*}
*/
export const moneyShow = val => {
if (val) {
  if (val === 0) {
    return '--'
  }
  return val
} else {
  return '--'
}
}

/** ***************权限********************/

export const userStatus = val => {
switch (val) {
  case 1:
    return '启用'
    break
  case 2:
    return '禁用'
  break
  case 3:
    return '禁用'
  break
}
}

/**
* 系统权限状态
* @param val
* @returns {*}
*/
export const systemStatus = val => val ? '启用' : '禁用'