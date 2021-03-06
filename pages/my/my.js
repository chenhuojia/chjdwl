// pages/my/my.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput:true,
    array: ['美国', '中国', '巴西', '日本'],
    userInfo:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      userInfo: getApp().globalData.userInfo ? getApp().globalData.userInfo:{},
    })


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


  onfeedback:function(e){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },
  onmyblog:function(e){
    wx.navigateTo({
      url: '/pages/list/list',
    })
  },
  onpush:function(e){
    wx.navigateTo({
      url: '/pages/push/push',
    })
  },
  onabout:function(e){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  signshow:function(e){
    this.setData({
      hiddenmodalput: false,
    })
  },
  cancelSign:function(e){
    this.setData({
      hiddenmodalput: true,
    })
  },
  confirmSign: function (e) {
    console.log(this.data)
    this.setData({
      hiddenmodalput: true,
    })
  },
  updateSign:function(e){
    var sign = e.detail.value;
    var userInfo=this.data.userInfo;
    userInfo.sign=sign;
    this.setData({
      userInfo: userInfo,
    })
  }
})