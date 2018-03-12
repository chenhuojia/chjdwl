// map.js

Page({
  data: {
    circles: [{
      latitude: 23.099994,
      longitude: 113.324520,
      color: '#FF0000DD',
      fillColor: '#7cb5ec88',
      radius: 10000,
      strokeWidth: 1
    }],
    markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    },{
      id:1,
      latitude: 23.099177,
      longitude: 113.33068,
      width: 50,
      height: 50
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 1,
      iconPath: '../../images/icon/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],

    centerLocation:{
      longitude: "113.324520",
      latitude: "23.099994",
    },
    

  },
 
  regionchange(e) {
    var _this=this;
    this.mapCtx.getCenterLocation({
      success: function (res) {
        _this.setData({
          markers: [{
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 10000,
            strokeWidth: 1
          }],
        })
        
      }
    })
  },
  markertap(e) {
    console.log(e)
  },
  controltap(e) {
    console.log(e)
  },
  onReady:function(e){
    this.mapCtx = wx.createMapContext('map')
    var _this=this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        _this.setData({
          screenHeight: res.screenHeight,
          screenWidth: res.screenWidth,
        })
      },
    })
  }
})