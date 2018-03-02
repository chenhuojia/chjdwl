//index.js
//获取应用实例
import { Index } from './index-model.js';
const index = new Index();
Page({
  data: {
    itemData:index.data,
  },


  onLoad: function () {
    
  },

  imageLoad:function(e){
    let auto = index.imageAuto(e);
    var image = this.data.itemData;
    image[e.target.dataset.index].height = auto.height;
    this.setData({
      itemData: image
    })
  },
  goDetail:function(e){
    wx.navigateTo({
      url: '/pages/detail/detail?id=1',
    })
  }
})
