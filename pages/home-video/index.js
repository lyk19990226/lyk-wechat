// pages/home-video/index.js
import {getTopMV} from "../../service/api_video"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs:[],
    hasMore:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopMVData(0)
  },
  // 封装网络请求方法
  getTopMVData: async function(offset) {
    //判断是否可以请求
    if(!this.data.hasMore && offset !== 0) return 

    //展示加载动画
    wx.showNavigationBarLoading()

    //真正的请求数据
    const res = await getTopMV(offset) 
    let newData = this.data.topMVs
    if(offset === 0) {
      newData = res.data
    }else{
      newData = newData.concat(res.data)
    }

    //设置数据
    this.setData({topMVs:newData})
    this.setData({hasMore:res.hasMore})
    wx.hideNavigationBarLoading()

    if(offset === 0 ) {
      wx.stopPullDownRefresh({
        success: (res) => {},
      })
    }
  },

  //下拉刷新生命周期
  onPullDownRefresh: async function(){
    this.getTopMVData(0)
  },
  
  //上拉加载更多生命周期
  onReachBottom: async function() {
    this.getTopMVData(this.data.topMVs.length)
  },

  // 点击跳转视频播放页面
  handleVideoItemClick(event){
    // console.log(event)  
    // 获取id
    const id = event.currentTarget.dataset.item.id
    // console.log(id)
    // 页面跳转 
    wx.navigateTo({
      url:'/pages/detail-video/index?id='+id+'&name=lyk'
    })
  }
})
