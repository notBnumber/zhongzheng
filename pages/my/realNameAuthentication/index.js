// pages/my/realNameAuthentication/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    realName:'',
    cardText:'',
    tempFileOne:'../../../images/sm501.png',
    tempFileSecond:'../../../images/sm502.png',
  },
  upLoader(e){
    let that=this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
       console.log(res)
        that.setData({
          tempFileOne:res.tempFilePaths,
        })
      }
    })
  },
  topLoader(e){
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        that.setData({
          tempFileSecond: res.tempFilePaths
        })
      }
    })
  },
  tapNext(e){
    wx.navigateTo({ url: '../addBankCard/index' });
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