// pages/list/list.js
import { List } from './list-model.js';
var list=new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemData: list.data,
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

  imageLoad: function (e) {
    let auto = list.imageAuto(e);
    var image = this.data.itemData;
    image[e.target.dataset.index].height = auto.height;
    this.setData({
      itemData: image
    })
  },
  goDetail: function (e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=1',
    })
  }
})