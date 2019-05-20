// pages/houseDetail/houseDetail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    imgUrls: [
      "https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640",
      "https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640",
      "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640"
    ],
    tabList: [
      { name: "区域" },
      { name: "价格" },
      { name: "房型" },
      { name: "面积" },
      { name: "其他" }
    ],
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
        img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
        yongjin: "总价*0.8%"
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
        img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
        yongjin: "总价*0.8%"
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
        img: "https://images.unsplash.com/photo-1551446591-142875a901a1?w=640",
        yongjin: "总价*0.8%"
      }
    ],
    openList: [],
    priceList: [
      {
        name: "价格",
        list: [
          { name: "不限" },
          { name: "5000元以下/平方" },
          { name: "5000-10000元/平方" },
          { name: "5000元以下/平方" }
        ]
      }
    ],
    HouseList: [
      {
        name: "房型",
        list: [
          { name: "不限" },
          { name: "一室" },
          { name: "二室" },
          { name: "三室" }
        ]
      }
    ]
  },
  filter(e) {
    let state = e.currentTarget.dataset.index
    if (state == 0) {
      this.setData({
        show: !this.data.show
      });
      this.setData({
        openList: this.data.priceList
      });
    } else if (state == 1) {
      this.setData({
        show: !this.data.show
      });
      this.setData({
        openList: this.data.HouseList
      });
    }
  },
  check(e) {
    console.log(e.currentTarget.dataset.index);
    this.setData({
      show: !this.data.show
    });
  },
  onClose() {
    this.setData({
      show: !this.data.show
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    // this.data.tabList.splice(2, 0, { name: "房型" });

    if (options.index == 0) {
      wx.setNavigationBarTitle({
        title: "新房"
      });
    } else if (options.index == 1) {
      wx.setNavigationBarTitle({
        title: "二手房"
      });
    } else if (options.index == 2) {
      wx.setNavigationBarTitle({
        title: "租房"
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
});
