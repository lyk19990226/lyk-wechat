// pages/home-music/index.js
import { rankingStore} from '../../store/index'

import {getBanners} from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import Throttle from '../../utils/throttle'

const ThrottleQueryRect = Throttle(queryRect)

Page({
  data: {
    banners: [],
    swiperHeight: 0 ,
    recommendSongs:[]
  },

  onLoad: function (options) {
    //获取页面数据 
    this.getPageData()

    // 发起共享数据请求
    rankingStore.dispatch('getRankingDataAction')
    // 从store获取共享的数据
    rankingStore.onState('hotRanking',(res) => {
      if (!res.tracks) return
      const recommendSongs = res.tracks.slice(0,6)
      this.setData({ recommendSongs })
    })
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
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  handleSwiperImageLoaded() { //监听图片加载完成
    //获取图片的高度
    ThrottleQueryRect(".swiper-image").then(res => {//图片加载完成调用使用节流函数，调用一次
      // console.log(res)
      this.setData({
        swiperHeight:res[0].height
      })
    })
  }
})