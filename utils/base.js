class Base {
  cacheKey='';
  getEventKeyVal(event,key){
    return event.currentTarget.dataset[key]; 
  };

  setCacheData(data) {
    return wx.setStorageSync(this.cacheKey, data)
  };

  getCacheData(data) {
    return wx.getStorageSync(this.cacheKey)
  };

  imageAuto(e, imgWidth){
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;    //图片的真实宽高比例
    
    var viewWidth = '',           //设置图片显示宽度，左右留有16rpx边距
      viewHeight = "";    //计算的高度值
    wx.getSystemInfo({
      success: (res) => {
        viewWidth = res.windowWidth;
        viewHeight = viewWidth / ratio;
      }
    })
    return { height: viewHeight, width: viewWidth};
  }

}
export {Base};