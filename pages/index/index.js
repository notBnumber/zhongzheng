//index.js
//获取应用实例
const app = getApp();
const util = require("../../utils/util.js");

Page({
  data: {
    current: null,
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
    indicatorDots: false,
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
    ],
    list: [
      { title: "购房", content: "数据了分割金融机构" },
      { title: "卖房", content: "胜多负少的公司的" }
    ],
    imgUrl: "",
    num: 1
  },
  // 跳转推客
  tk() {
    wx.navigateTo({
      url: "../tuike/index"
    });
  },
  // 跳转推盘
  tp() {
    wx.navigateTo({
      url: "../tuipan/index"
    });
  },
  // 滑动触发事件
  swiperChange(e) {
    // console.log(e.detail.current);
    this.setData({
      current: e.detail.current
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  // 搜索页面
  toReault() {
    wx.navigateTo({
      url: "../result/result?state=3"
    });
  },
  // 选择城市
  toCity() {
    wx.navigateTo({
      url: "../chooseCity/chooseCity"
    });
  },
  // 获取新房
  getNewHouse() {
    let params = {
      pageNumber: 1,
      pageSize: 20,
      cityId: 1
    };
    util
      ._get("configure/getNewHome", params)
      .then(res => {
        console.log(res);
        if (res.code == 1) {
          for (let item of res.data.list) {
            if (item.tagName != null) {
              item.tagArr = item.tagName.split(",");
            }
          }
          this.data.list = res.data.list;
          this.setData({
            hotList: this.data.list
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  // 获取二手房
  getSecondHouse() {
    let params = {
      pageNumber: 1,
      pageSize: 20,
      cityId: 1
    };
    util
      ._get("configure/getSecondHome", params)
      .then(res => {
        console.log(res);
        if (res.code == 1) {
          for (let item of res.data.list) {
            if (item.tagName != null) {
              item.tagArr = item.tagName.split(",");
            }
          }
          this.data.list = res.data.list;
          this.setData({
            hotList: this.data.list
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  // 获取租房
  getzuHouse() {
    let params = {
      pageNumber: 1,
      pageSize: 20,
      cityId: 1
    };
    util
      ._get("configure/getRentingHome", params)
      .then(res => {
        console.log(res);
        if (res.code == 1) {
          for (let item of res.data.list) {
            if (item.tagName != null) {
              item.tagArr = item.tagName.split(",");
            }
          }
          this.data.list = res.data.list;
          this.setData({
            hotList: this.data.list
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  },
  // 初始化新房
  init(num) {
    // util._get('configure/getNewHome').then(res => {

    // }).catch(e => {
    //   console.log(e)
    // })
    let params = {
      pageNumber: num,
      pageSize: 20,
      cityId: 1
    };
    return util._get("configure/getNewHome", params);
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
    // 取得全局App
    app.fun();
    this.setData({
      num: this.data.num
    });
    Promise.all([
      util._get("configure/getPageImage"),
      util._get("configure/getTransaction"),
      this.init(this.data.num)
    ])
      .then(result => {
        console.log(result);
        for (let item of result[2].data.list) {
          if (item.tagName != null) {
            item.tagArr = item.tagName.split(",");
          }
        }
        this.setData({
          imgUrl: app.globalData.imgUrl,
          imgUrls: result[0].data,
          list: result[1].data,
          hotList: result[2].data.list
        });
      })
      .catch(e => {
        console.log(e);
        this.setData({
          hotList:[],

        })
      });
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
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    });
    if (this.data.tabIndex == 0) {
      this.getNewHouse();
    } else if (this.data.tabIndex == 1) {
      this.getSecondHouse();
    } else if (this.data.tabIndex == 2) {
      this.getzuHouse();
    }
  },
  // 房屋详情
  toDetail(e) {
    console.log(e.currentTarget.dataset);

    wx.navigateTo({
      url: "../detail/detail?id=" + e.currentTarget.dataset.id
    });
  },
  // 房屋列表
  toHouseDetail(e) {
    console.log(e.currentTarget.dataset.index);
    let state = e.currentTarget.dataset.index;
    if (state == 3) {
      wx.navigateTo({
        url: "../find/find?index=" + e.currentTarget.dataset.index
      });
    } else {
      wx.navigateTo({
        url: "../houseDetail/houseDetail?index=" + e.currentTarget.dataset.index
      });
    }
  },
  // 下拉刷新
  onPullDownRefresh: function() {
    if (this.data.tabIndex == 0) {
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      // wx.request({
      //   url: 'https://xxx/?page=0',
      //   method: "GET",
      //   header: {
      //     'content-type': 'application/text'
      //   },
      //   success: function (res) {
      //     that.setData({
      //       moment: res.data.data
      //     });
      //     console.log(that.data.moment);
      //     // 隐藏导航栏加载框
      //     wx.hideNavigationBarLoading();
      //     // 停止下拉动作
      //     wx.stopPullDownRefresh();
      //   }
      // })
      let params = {
        pageNumber: 1,
        pageSize: 20,
        cityId: 1
      };
      util
        ._get("configure/getNewHome", params)
        .then(res => {
          console.log(res);

          // 隐藏导航栏加载框
          wx.hideNavigationBarLoading();
          // 停止下拉动作
          wx.stopPullDownRefresh();
        })
        .catch(e => {
          console.log(e);
        });
    } else if (this.data.tabIndex == 1) {
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      // wx.request({
      //   url: 'https://xxx/?page=0',
      //   method: "GET",
      //   header: {
      //     'content-type': 'application/text'
      //   },
      //   success: function (res) {
      //     that.setData({
      //       moment: res.data.data
      //     });
      //     console.log(that.data.moment);
      //     // 隐藏导航栏加载框
      //     wx.hideNavigationBarLoading();
      //     // 停止下拉动作
      //     wx.stopPullDownRefresh();
      //   }
      // })
      let params = {
        pageNumber: 1,
        pageSize: 20,
        cityId: 1
      };
      util
        ._get("configure/getSecondHome", params)
        .then(res => {
          console.log(res);

          // 隐藏导航栏加载框
          wx.hideNavigationBarLoading();
          // 停止下拉动作
          wx.stopPullDownRefresh();
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      // 显示顶部刷新图标
      wx.showNavigationBarLoading();
      // wx.request({
      //   url: 'https://xxx/?page=0',
      //   method: "GET",
      //   header: {
      //     'content-type': 'application/text'
      //   },
      //   success: function (res) {
      //     that.setData({
      //       moment: res.data.data
      //     });
      //     console.log(that.data.moment);
      //     // 隐藏导航栏加载框
      //     wx.hideNavigationBarLoading();
      //     // 停止下拉动作
      //     wx.stopPullDownRefresh();
      //   }
      // })
      let params = {
        pageNumber: 1,
        pageSize: 20,
        cityId: 1
      };
      util
        ._get("configure/getRentingHome", params)
        .then(res => {
          console.log(res);

          // 隐藏导航栏加载框
          wx.hideNavigationBarLoading();
          // 停止下拉动作
          wx.stopPullDownRefresh();
        })
        .catch(e => {
          console.log(e);
        });
    }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.data.tabIndex == 0) {
      let params = {
        pageNumber: ++this.data.num,
        pageSize: 20,
        cityId: 1
      };
      util
        ._get("configure/getNewHome", params)
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            for (let item of res.data.list) {
              if (item.tagName != null) {
                item.tagArr = item.tagName.split(",");
              }
            }
            this.data.list = this.data.hotList.concat(res.data.list);
            this.setData({
              hotList: res.data.list
            });
            console.log(this.data.hotList);

            // 隐藏导航栏加载框
            wx.hideNavigationBarLoading();
            // 停止下拉动作
            wx.stopPullDownRefresh();
          }
        })
        .catch(e => {
          console.log(e);
        });
    } else if (this.data.tabIndex == 1) {
      let params = {
        pageNumber: ++this.data.num,
        pageSize: 20,
        cityId: 1
      };
      util
        ._get("configure/getSecondHome", params)
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            for (let item of res.data.list) {
              if (item.tagName != null) {
                item.tagArr = item.tagName.split(",");
              }
            }
            this.data.list = this.data.hotList.concat(res.data.list);
            this.setData({
              hotList: res.data.list
            });
            console.log(this.data.hotList);

            // 隐藏导航栏加载框
            wx.hideNavigationBarLoading();
            // 停止下拉动作
            wx.stopPullDownRefresh();
          }
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      let params = {
        pageNumber: ++this.data.num,
        pageSize: 20,
        cityId: 1
      };
      util
        ._get("configure/getRentingHome", params)
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            for (let item of res.data.list) {
              if (item.tagName != null) {
                item.tagArr = item.tagName.split(",");
              }
            }
            this.data.list = this.data.hotList.concat(res.data.list);
            this.setData({
              hotList: res.data.list
            });
            console.log(this.data.hotList);

            // 隐藏导航栏加载框
            wx.hideNavigationBarLoading();
            // 停止下拉动作
            wx.stopPullDownRefresh();
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
});
