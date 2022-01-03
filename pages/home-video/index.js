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
    getTopMV(0).then(res => {
      this.setData({topMVs:res.data})
      console.log(res)
    })
  },
  onReachBottom(){//监听滚动到底部
    getTopMV(this.data.topMVs.length).then(res => {
      if (!this.data.hasMore) return 
      this.setData({topMVs:this.data.topMVs.concat(res.data)})
      this.setData({hasMore:res.hasMore})
    })
    console.log("到底部了")
  }
})
//hasMore  