// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 求各类图书的平均值
   */
  avgEvent(){
  wx.cloud.callFunction({
    name:"getGroupAvg",
    data:{},
    complete:res=>{
      // console.log('complete',res)
      let avgName = res.result.list[0].avgNum
      console.log('complete',res.result.list[0].avgNum)
    }
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})