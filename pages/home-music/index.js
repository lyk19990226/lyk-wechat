// pages/home-music/index.js
import {getBanners} from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import Throttle from '../../utils/throttle'

const ThrottleQueryRect = Throttle(queryRect)

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
    getBanners().then(res => {//获取轮播图片
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
    //获取图片的高度
    ThrottleQueryRect(".swiper-image").then(res => {//图片加载完成调用使用节流函数，调用一次
      console.log(res)
      this.setData({
        swiperHeight:res[0].height
      })
    })
  }
})