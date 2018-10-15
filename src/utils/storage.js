/**
 * 设置（新增、添加）localStorage 或 sessionStorage
 * @param key   键名，获取时使用
 * @param value 内容，可传 Object 和 String
 * @param type  默认为 sessionStorage，传入 local 则存 localStorage
 */
const storageSet = function (key, value, type) {
  // 选择操作的 storage
  let storage = type === 'local' ? window.localStorage : window.sessionStorage
  let storeItem
  // 对象合并，非对象不作处理
  if (value instanceof Object) {
    let aim = storage.getItem(key)
    try {
      aim = JSON.parse(aim)
      storeItem = JSON.stringify(Object.assign({}, aim, value))
    } catch (err) {
      console.log('字符串不可与对象合并')
    }
  } else {
    storeItem = value
  }
  // 保存
  storage.setItem(key, storeItem)
}

/**
 * 获取
 * @param key   键名，获取时使用
 * @param type  获取的类型，默认获取 sessionStorage 内的值，传入 local 则获取 localStorage 的值
 * @returns {*} 返回值，Object 会被转为 Object 使用
 */
const storageGet = function (key, type) {
  let computedKey
  if (type === 'local') {
    computedKey = window.localStorage.getItem(key)
  } else {
    computedKey = window.sessionStorage.getItem(key)
  }
  try {
    computedKey = JSON.parse(computedKey)
  } catch (err) {}
  return computedKey
}

/**
 * 删除
 * @param key   键名，获取时使用
 * @param type  获取的类型，默认获取 sessionStorage 内的值，传入 local 则获取 localStorage 的值
 */
const storageRemove = function (key, type) {
  type === 'local'
    ? window.localStorage.removeItem(key)
    : window.sessionStorage.removeItem(key)
}

export { storageSet, storageGet, storageRemove }
