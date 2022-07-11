// index.ts
// 获取应用实例
const app = getApp<IAppOption>()
export type ResponseType = {
  data:{
    ms:dataType
    videos: Array<object>
  }
};
export type dataType = {
  titlezh: string,
  year: number
}
// export type detailType = {
//   title: Array<object>
// }
Page({
  data: {
    motto: 'Hello Wrld',
    titlezh: '',
    year: 123
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: `../details/details?titlezh=${this.data.titlezh}&year=${this.data.year}`,
    })
  },
  onLoad() {
    const that = this;
    wx.request({
      url: 'https://api.ggt1024.com/mdb/v220601/GetMs',
      data: {
        "id":'1234511972993601536'
      },
      method:'POST', 
      success(res:ResponseType) {
        console.log(res)
        that.setData({
          titlezh: res.data.ms.titlezh,
          year: res.data.ms.year
        })
      }
    })
  } 
})
