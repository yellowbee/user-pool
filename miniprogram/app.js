//app.js
App({
  globalData: {test: "testdata"},
  onLaunch: function() {
    var that = this;

    if (!wx.cloud) {
      console.error("请使用 2.2.3 或以上的基础库以使用云能力");
    } else {
      wx.cloud.init({
        traceUser: true
      });
    }

    wx.setTabBarStyle({
      //color: '#FF0000',
      selectedColor: "#184b86",
      backgroundColor: "#ffffff",
      borderStyle: "white"
    });

    let user = wx.getStorageSync("user") || {};
    let userInfo = wx.getStorageSync("userInfo") || {};
    if (!user.openid || (user.expires_in || Date.now()) < Date.now() + 600) {
      wx.login({
        success: function(res) {
          console.log(`res: ${res}`);
          if (res.code) {
            wx.getUserInfo({
              success: function(res) {
                let objz = {};
                objz.avatarUrl = res.userInfo.avatarUrl;
                objz.nickName = res.userInfo.nickName;
                //console.log(objz);
                wx.setStorageSync("userInfo", objz); //存储userInfo
              }
            });
            wx.request({
              url: `https://woyaotest.com/wscode2session/${res.code}`,
              data: {},
              method: "GET",
              // header: {}, // 设置请求的 header
              success: function(res) {
                console.log('openid and session key returned: ');
                console.log(res.data);
                console.log('initial globalData: ');
                console.log(that.globalData.test);
                that.globalData.openid = res.data.res.openid;
                that.globalData.session_key = res.data.res.session_key;
                  console.log('updated globalData: ');
                  console.log(that.globalData);
                let obj = {};
                obj.openid = res.data.openid;
                obj.expires_in = Date.now() + res.data.expires_in;
                wx.setStorageSync("user", obj); //存储openid
              }
            });
          } else {
            console.log("Fetching user's log status failed: " + res.errMsg);
          }
        }
      });
    }
  }
});
