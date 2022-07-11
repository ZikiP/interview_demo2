// index.ts

import { ResponseType } from "../index/index";

// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    titlezh: '',
    year: 0,
    videosList: [{}]
  },
  onLoad(options) {
    const that = this;
    that.setData({
        titlezh: options.titlezh,
        year: parseInt(options.year as string) 
    })
    wx.request({
      url: 'https://api.ggt1024.com/mdb/v220601/GetMs',
      data: {
        "id":'1234511972993601536'
      },
      method:'POST', 
      success(res:ResponseType) {
        console.log(res.data.videos)
        that.setData({
            videosList: res.data.videos,
        })
      }
    })
  } 
})
