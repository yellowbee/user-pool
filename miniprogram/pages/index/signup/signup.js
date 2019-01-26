const app = getApp();

Page({
  data: {
    multiArray: [
      [
        "行业",
        "互联网",
        "金融",
        "零售",
        "软件",
        "硬件",
        "医疗与健康",
        "教育",
        "汽车",
        "制造业",
        "媒体",
        "政府",
        "咨询顾问",
        "电话/通讯"
      ],
      [
        "规模",
        "20人以内",
        "20-50人",
        "50-200人",
        "200-1000人",
        "1000-5000人",
        "5000人以上"
      ]
    ],
    objectMultiArray: [
      [
        {
          id: 0,
          name: "选择"
        },
        {
          id: 1,
          name: "互联网"
        },
        {
          id: 2,
          name: "金融"
        },
        {
          id: 3,
          name: "零售"
        },
        {
          id: 4,
          name: "软件"
        },
        {
          id: 5,
          name: "硬件"
        },
        {
          id: 6,
          name: "医疗与健康"
        },
        {
          id: 7,
          name: "教育"
        },
        {
          id: 8,
          name: "汽车"
        },
        {
          id: 9,
          name: "制造业"
        },
        {
          id: 10,
          name: "媒体"
        },
        {
          id: 11,
          name: "政府"
        },
        {
          id: 12,
          name: "咨询/顾问"
        },
        {
          id: 13,
          name: "电话/通讯"
        }
      ],
      [
        {
          id: 0,
          name: "选择"
        },
        {
          id: 1,
          name: "20人以内"
        },
        {
          id: 2,
          name: "20-50人"
        },
        {
          id: 3,
          name: "50-200人"
        },
        {
          id: 4,
          name: "200-1000人"
        },
        {
          id: 5,
          name: "1000-5000人"
        },
        {
          id: 5,
          name: "5000人以上"
        }
      ]
    ],
    multiIndex: [0, 0, 0, 0]
  },
  bindMultiPickerChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    });
  },
  // fired when top-left back button is clicked
  onUnload: function() {
    // swtichTab() goes back to tabbar page and closes
    // all non-tabbar pages
    wx.switchTab({
      url: "/pages/index/index"
    });
  }
});
