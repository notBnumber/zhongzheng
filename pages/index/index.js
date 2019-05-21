//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    current:null,
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    imgUrls: [
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
      "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
      "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
    ],
    autoplay: true,
    interval: 5000,
    twoTabList: [
      {
        name: "新房",
        img: "../../images/xf01.png"
      },
      {
        name: "二手房",
        img: "../../images/esf01.png"
      },
      {
        name: "租房",
        img: "../../images/zf01.png"
      },
      {
        name: "找房",
        img: "../../images/ff.png"
      }
    ],
    hotTabList: [
      {
        name: "新房"
      },
      {
        name: "二手房"
      },
      {
        name: "租房"
      }
    ],
    tabIndex: 0,
    hotList: [
      {
        name: "保利中心",
        address: "100 m² / 广州市海珠区",
        list: [
          { name: "普通住宅1", state: 0 },
          { name: "普通住宅", state: 1 },
          { name: "普通住宅", state: 2 }
        ],
        price: "20.06 万元",
        img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      },
      {
        name: "保利中心",
        address: "100 m² / 广州市海珠区",
        list: [
          { name: "普通住宅", state: 0 },
          { name: "普通住宅e", state: 1 },
          { name: "普通住宅", state: 2 }
        ],
        price: "20.06 万元",
        img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      },
      {
        name: "保利中心",
        address: "100 m² / 广州市海珠区",
        list: [
          { name: "普通住宅" },
          { name: "普通住r宅" },
          { name: "普通住宅" }
        ],
        price: "20.06 万元",
        img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
      }
    ]
  },
  // 滑动触发事件
  swiperChange(e) {
    // console.log(e.detail.current);
    this.setData({
      current:e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    // if (app.globalData.userInfo) {
    //   console.log(0);
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: false
    //   })
    // } else if (this.data.canIUse){
    //   console.log(1);
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: false
    //     })
    //   }
    // } else {
    //   console.log(2);
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: false
    //       })
    //     }
    //   })
    // }
  },
  onShow() {
    // console.log(this.data.globalData);
    var app=getApp();     // 取得全局App
    app.fun()
    
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  // 切换图标
  tabCheck(e) {
    console.log(this.data.tabIndex);
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    });
  },
  // 房屋详情
  toDetail(e) {
    console.log(e.currentTarget.dataset);
    
    wx.navigateTo({
      url:'../detail/detail?id='+e.currentTarget.dataset.id
    })
  },
  // 房屋列表
  toHouseDetail(e) {
    console.log(e.currentTarget.dataset.index);
    
    wx.navigateTo({
      url:'../houseDetail/houseDetail?index='+e.currentTarget.dataset.index
    })
  }
});
