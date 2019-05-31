// pages/my/realNameAuthentication/index.js
import Dialog from '../../../vant/dialog/dialog';
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
  changeName(e) {
    this.setData({
      realName:e.detail.value
    })
  },
  changeCard(e) {
    this.setData({
      cardText:e.detail.value
    })
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
    console.log(this.data.realName);
    
    if (this.data.realName  == '') {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false
      });
      return false
    } 
    if (this.data.cardText  == '') {
      wx.showToast({
        title: '请输入身份证号',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false
      });
      return false
    } 
    if (!(/^\d{15}|\d{}18$ /.test(this.data.cardText))) {

      wx.showToast({
        title: '请输入正确的身份证号',
        icon: 'none',
        image: '',
        duration: 1500,
        mask: false
      });
      
      return false;
      
      }

    Dialog.confirm({
      title: '确定认证吗?',
      message: '(一旦认证,无法更改)'
    }).then(() => {
      wx.navigateTo({ url: '../addBankCard/index' });
      // on confirm
    }).catch(() => {
      // on cancel
    });
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