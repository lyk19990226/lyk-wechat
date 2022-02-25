// pages/home-music/index.js
import {
  getBanners
} from '../../service/api_music'

Page({
  data: {
    disabled: true,
    banners: [],
    swiperHeight: 0 
  },

  onLoad: function (options) {
    //获取页面数据
    this.getPageData()
  },

  //调用接口
  getPageData: function () {
    getBanners().then(res => {
      console.log(res)
      this.setData({
        banners: res.banners
      })
    })
  },

  //事件处理
  handleSearchClick() { //搜索框点击事件

    // wx.navigateTo({
    //   url: '/pages/detail-search/index',
    // })
    this.setData({
      disabled: false
    })
  },

  handleSwiperImageLoaded() { //监听图片加载完成
    const query = wx.createSelectorQuery()
    query.select('.swiper-image').boundingClientRect()
    // query.selectViewport().scrollOffset()
    query.exec(res => {
      const rect = res[0] 
      console.log(rect.height)
      this.setData({
        swiperHeight:rect.height
      })
    })
  }
})