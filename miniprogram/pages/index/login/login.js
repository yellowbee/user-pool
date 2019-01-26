const app = getApp()

Page({
    onUnload: function () {
        wx.switchTab({
            url: "/pages/index/index"
        })
    }
});
