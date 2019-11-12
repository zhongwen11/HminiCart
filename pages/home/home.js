// pages/home/home.js

import{
  getMultiData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新品', '精选'],
    goods: {
      'new':{page: 0, list: []},
      'pop': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1、请求轮播图以及接口数据
    this._getMultiData()

    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')

  },


  // ---------------------------------网络请求函数---------------------------------
  _getMultiData(){
    getMultiData().then(res => {
      // 2、取出轮播图数据
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      // 将banners和recommend数据放在data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  // 商品数据
  _getGoodsData(type){
    // 获取页码
    const page = this.data.goods[type].page + 1;
    // 发送网络请求
    getGoodsData(type, page).then(res=>{
      console.log(res);
    })
  },



  // ---------------------------------事件监听函数---------------------------------
  bindTabClick(event){
      const index = event.detail.index;
      console.log(index)
  }
})