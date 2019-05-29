// pages/my/myinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headImg:"../../../images/tx04.png"
  },
  logout(){   //点击退出登录
    wx.showModal({
      content: '确定退出登录吗?',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.navigateTo({
            url: '/pages/login/login'
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  chooseHead(){  //上传头像
    var that = this
    wx.chooseImage({
      count: 1,
      success(res) {
        // console.log(res);
        that.setData({
          headImg: res.tempFilePaths[0]
        })
      }
    })
  },
  pageTo({currentTarget: {dataset}}){
    // console.log(dataset);
    wx.navigateTo({
      url: dataset.url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
