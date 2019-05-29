//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    list :[
    {title:"平台通知",
    content:'小子圣诞节大结局跟设计稿改数据风骨霸刀分接口搞不定共和国的',
    url:'../../images/tz01.png',
    state:1
  },
  {title:"钱包通知",
  content:'小子圣诞节大结局跟设计稿改数据风骨霸刀分接口搞不定共和国的',
  url:'../../images/qb01.png',
  state:2
},
    ]
  },
  toDetail(e) {
    let state = e.currentTarget.dataset.state
    if (state == 1 ) {
      wx.navigateTo({
        url: '../../pages/ptInfo/ptInfo',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    } else {
      wx.navigateTo({
        url: '../msg/msg',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
