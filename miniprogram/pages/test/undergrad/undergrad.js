//const db = wx.cloud.database();

Page({
  onLoad: function(options) {
    this.setData({
      title: options.title
    });

      wx.setNavigationBarTitle({
          title: options.title
      })

    console.log(options.industry);

    /*db.collection("testees")
      .where({
        dob: 1998
      })
      .get()
      .then(res => {
        // res.data 是包含以上定义的两条记录的数组
        this.setData({
          testees: res.data
        });
        console.log(res.data);
        wx.hideToast();
      });
    wx.showToast({
      title: "载入数据...",
      icon: "loading",
      duration: 2000
    });*/

      wx.request({
          url: `https://woyaotest.com/testees`,
          data: {industry: options.industry},
          method: "POST",
          // header: {}, // 设置请求的 header
          success: (res) => {
              console.log('response of getting testees by industry');
              console.log(res);
              this.setData({
                  testees: res.data
              });
              wx.hideToast();
          }
      });

      wx.showToast({
          title: '载入数据...',
          icon: 'loading',
          duration: 2000
      });
  }
});
