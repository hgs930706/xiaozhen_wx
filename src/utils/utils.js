/*
 * @Author: ShenYuQiang
 * @Date: 2020-11-28 16:56:05
 * @LastEditors: ShenYuQiang
 * @LastEditTime: 2020-11-28 16:58:16
 * @FilePath: \h5ysxz\src\utils\utils.js
 */
// 文档高度
function getDocumentTop () {
  var scrollTop = 0; var bodyScrollTop = 0; var documentScrollTop = 0
  if (document.body) {
    bodyScrollTop = document.body.scrollTop
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
  console.log('文档高度scrollTop:' + scrollTop)
  return scrollTop
}

// 可视窗口高度
function getWindowHeight () {
  var windowHeight = 0
  if (document.compatMode === 'CSS1Compat') {
    windowHeight = document.documentElement.clientHeight
  } else {
    windowHeight = document.body.clientHeight
  }
  console.log('可视窗口windowHeight:' + windowHeight)
  return windowHeight
}

// 滚动条滚动高度
function getScrollHeight () {
  var scrollHeight = 0; var bodyScrollHeight = 0; var documentScrollHeight = 0
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
  console.log('滚动高度scrollHeight:' + scrollHeight)
  return scrollHeight
}

export { getDocumentTop, getWindowHeight, getScrollHeight }
