// pages/push/push.js
import {ImageUpload} from '../../utils/imageUpload.js';
var image=new ImageUpload();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pics: [],
    noteMaxLen: 450,
    currentNoteLen:0
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
  formSubmit:function(e){
    console.log(e);
  },

  upimg:function(e){
    wx.chooseImage({
      count: 9 , // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var imgsrc = res.tempFilePaths;
        //pics = pics.concat(imgsrc);
        image._uploadimg({
          url: 'http://blog.com/v1/index',//这里是你图片上传的接口
          path: imgsrc
        });
        console.log(image.imageFile);
      }
    })
  },

  inputLen:function(e){
    var value = e.detail.value, len = parseInt(value.length);
    if (len > this.data.noteMaxLen) return;

    this.setData({
      currentNoteLen: len //当前字数  
      //limitNoteLen: this.data.noteMaxLen - len //剩余字数  
    });  
  }

})