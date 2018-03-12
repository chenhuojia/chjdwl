// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
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

  prevImage:function(e){
    wx.previewImage({
      urls: [
        'http://xqsite.xiangqu.com/FjZDZnkg-5o-iEwFlAjLRMOtCY_U?imageView2/2/w/520/q/90/format/jpg/1000x667/',
        'http://xqsite.xiangqu.com/FjZDZnkg-5o-iEwFlAjLRMOtCY_U?imageView2/2/w/520/q/90/format/jpg/1000x667/',
        'http://xqsite.xiangqu.com/FjZDZnkg-5o-iEwFlAjLRMOtCY_U?imageView2/2/w/520/q/90/format/jpg/1000x667/',
      ],
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
     // console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
        console.log(res);
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})