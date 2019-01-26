//const db = wx.cloud.database();
const app = getApp();

Page({
  data: {
    done: false
  },

  onLoad: function(options) {
    this.setData({
       done: false
    });
    /*db.collection('tasks').get().then(res => {
            // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
            console.log(res.data)
            this.setData({
                tasks: res.data
            });
            wx.hideToast();
        });*/

    wx.request({
      url: `https://woyaotest.com/tasks/${app.globalData.openid}`,
      data: {},
      method: "GET",
      // header: {}, // 设置请求的 header
      success: res => {
        console.log("response of getting tasks by openid");
        console.log(res);
        this.setData({
          tasks: res.data,
          done: true
        });
        wx.hideToast();
      }
    });

    wx.showToast({
      title: "载入数据...",
      icon: "loading",
      duration: 2000
    });
  },

  deleteTask: function(e) {
    console.log(`button of ${e.currentTarget.id} clicked`);
    wx.request({
      url: `https://woyaotest.com/task/${e.currentTarget.id}`,
      data: {},
      method: "DELETE",
      // header: {}, // 设置请求的 header
      success: res => {
        this.onLoad();
      }
    });
  },

  onShow: function() {
    this.onLoad();
  }
});
