const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const app = getApp();

const baseUrl = app.globalData.baseUrl;
 
const http = ({ url = '', param = {}, ...other } = {}) => {
  wx.showLoading({
    title: '请求中，请耐心等待..'
  });
  let timeStart = Date.now();
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': 'application/json' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
      },
      ...other,
      complete: (res) => {
        wx.hideLoading();
        console.log(`耗时${Date.now() - timeStart}`);
        if (res.data.code == 1) {
          resolve(res.data)          
        } else {
          reject(res)
          wx.showToast({
            title: res.data.desc,
            icon: 'loading'
          })
        }
      }
    })
  })
}
const https = ({ url = '', param = {}, ...other } = {}) => {
  wx.showLoading({
    title: '请求中，请耐心等待..'
  });
  let timeStart = Date.now();
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: param,
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
      },
      ...other,
      complete: (res) => {
        wx.hideLoading();
        console.log(`耗时${Date.now() - timeStart}`);
        if (res.data.code == 1) {
          resolve(res.data)          
        } else {
          reject(res)
          wx.showToast({
            title: res.data.desc,
            icon: 'loading'
          })
        }
      }
    })
  })
}
const getUrl = (url) => {
  if (url.indexOf('://') == -1) {
    url = baseUrl + url;
  }
  return url
}
 
// get方法
const _get = (url, param = {}) => {
  return http({
    url,
    param
  })
}
 
const _post = (url, param = {}) => {
  return https({
    url,
    param,
    method: 'post'
  })
}
 
const _put = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}
 
const _delete = (url, param = {}) => {
  return http({
    url,
    param,
    method: 'put'
  })
}

module.exports = {
  formatTime: formatTime,
  baseUrl,
  _get,
  _post,
  _put,
  _delete
}
