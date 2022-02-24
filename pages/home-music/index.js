// pages/home-music/index.js
Page({
  data: {
  },

  onLoad: function (options) {

  },
  handleSearchClick(){
    console.log('jj')
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  }
 })