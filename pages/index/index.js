const _banners = [
  {
  id:1,
  img:'https://img02.hua.com/banner/huacai_xiangrikui_180731.jpg',
  name:'日式浓香盖饭'
},
{
  id:2,
  img:'https://img02.hua.com/banner/huacai_red_180727.jpg',
  name:'鱼香茄子'
},
{
  id:3,
  img:'https://img02.hua.com/pc/pimg/banner_Fger.jpg',
  name:'外卖产品新套装'
}
]
Page({

  /**
   * 页面的初始数据
   */
  data: {
  banners:_banners,
  filterID:1,
  scrollDown:false
  },
  /**
   * 跳转搜索
   */
  tapSearch(){
  wx.navigateTo({
    url: '/pages/search/search',
  })
  },
  /**
   * 附近商家
   */
  tapFilter(e){
    this.setData({
      filterID:e.currentTarget.dataset.id
    })
  // console.log(e.currentTarget.dataset.id)
  },
  /**
   * 
   */
  onPageScroll(res){
  // console.log(res.scrollTop)
  if(res.scrollTop>=100){
  this.setData({
    scrollDown:true
  })
  }
  if(res.scrollTop<100){
    this.setData({
      scrollDown:false
    })
  }
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