//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    list :[
    ]
  },
  toDetail(e) {
    let state = e.currentTarget.dataset.type
    console.log(state);
    
    if (state == 0 ) {
      wx.navigateTo({
        url: '../../pages/ptInfo/ptInfo',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    } else if(state == 2){
      wx.navigateTo({
        url: '../msg/msg',
        success: (result)=>{
          
        },
        fail: ()=>{},
        complete: ()=>{}
      });
    }
  },
  onShow() {
    util._get('notice/page?sessionId='+wx.getStorageSync('sessionId')).then(res=>{
      if(res.code == 1) {
        console.log(res);
        this.setData({
          list:res.data.list
        })
      }
    })
  },
  onLoad: function () {    
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
