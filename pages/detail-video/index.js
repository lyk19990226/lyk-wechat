// pages/detail-video/index.js
import {getMVURL,getMVDetail,getRelatedVideo} from '../../service/api_video'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvURLInfo:{},
    mvDetail:{},
    relatedVideos:{},
    danmuList://模拟的弹幕
    [{
      text: '第 1s 出现的弹幕',
      color: '#ff0000',
      time: 1
    }, {
      text: '第 3s 出现的弹幕',
      color: '#ff00ff',
      time: 3
    }, {
      text: '牛逼，太好听了',
      color: '#ff00ff',
      time: 2
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取传入的id
    const id = options.id
    
    // 获取页面的数据
    this.getPageData(id)
    
    // 其他逻辑
  },
  getPageData(id){
    //1.请求播放地址
    getMVURL(id).then(res=>{
      console.log(res)
      this.setData({mvURLInfo:res.data})
    })
    //2.请求视频详情信息
    getMVDetail(id).then(res=>{
      this.setData({mvDetail:res.data})
    })
    //3.请求相关视频
    getRelatedVideo(id).then(res=>{
      this.setData({relatedVideos:res.data})
    })
  }
})