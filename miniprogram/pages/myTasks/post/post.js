//index.js
const app = getApp();
const db = wx.cloud.database();
const multiArray = [
  ["年龄", "60后", "70后", "75后", "80后", "85后", "90后", "95后", "00后"],
  ["性别", "男", "女"],
  ["学历", "初中", "高中", "本科", "硕士", "博士"],
  [
    "职业",
    "互联网",
      "软件",
      "通讯",
      "交通",
      "零售",
      "建筑",
      "金融",
      "政府",
      "医疗",
      "健康",
      "制造业",
      "媒体",
      "能源",
      "教育",
      "咨询",
      "自由职业",
      "学生",
      "家庭主妇",
      "离退休",
      "待业"
  ]
];

const objectMultiArray = [
    [
        {
            id: 0,
            name: "年龄"
        },
        {
            id: 1,
            name: 60
        },
        {
            id: 2,
            name: 70
        },
        {
            id: 3,
            name: 75
        },
        {
            id: 4,
            name: 80
        },
        {
            id: 5,
            name: 85
        },
        {
            id: 6,
            name: 90
        },
        {
            id: 7,
            name: 95
        },
        {
            id: 8,
            name: 2000
        }
    ],
    [
        {
            id: 0,
            name: "性别"
        },
        {
            id: 1,
            name: "男"
        },
        {
            id: 2,
            name: "女"
        }
    ],
    [
        {
            id: 0,
            name: "学历"
        },
        {
            id: 1,
            name: "初中"
        },
        {
            id: 2,
            name: "高中"
        },
        {
            id: 3,
            name: "本科"
        },
        {
            id: 4,
            name: "硕士"
        },
        {
            id: 5,
            name: "博士"
        }
    ],
    [
        {
            id: 0,
            name: "职业"
        },
        {
            id: 1,
            name: "互联网"
        },
        {
            id: 2,
            name: "软件"
        },
        {
            id: 3,
            name: "通讯"
        },
        {
            id: 4,
            name: "交通"
        },
        {
            id: 5,
            name: "零售"
        },
        {
            id: 6,
            name: "建筑"
        },
        {
            id: 7,
            name: "金融"
        },
        {
            id: 8,
            name: "政府"
        },
        {
            id: 9,
            name: "医疗"
        },
        {
            id: 10,
            name: "健康"
        },
        {
            id: 11,
            name: "制造业"
        },
        {
            id: 12,
            name: "媒体"
        },
        {
            id: 13,
            name: "能源"
        },
        {
            id: 14,
            name: "教育"
        },
        {
            id: 15,
            name: "咨询"
        },
        {
            id: 16,
            name: "自由职业"
        },
        {
            id: 17,
            name: "学生"
        },
        {
            id: 18,
            name: "家庭主妇"
        },
        {
            id: 19,
            name: "离退休"
        },
        {
            id: 20,
            name: "待业"
        }
    ]
];

Page({
  onShow: function() {
    console.log("openid: ");
    console.log(app.globalData.openid);
  },
  data: {
    multiArray: multiArray,
    objectMultiArray: objectMultiArray,
    multiIndex: [0, 0, 0, 0]
  },
  bindMultiPickerChange: function(e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    });
  },

  formSubmit: function(e) {
    console.log(e.detail.value);
    console.log(multiArray[0][e.detail.value.personalInfo[0]]);
    console.log(multiArray[1][e.detail.value.personalInfo[1]]);

    wx.request({
      url: `https://woyaotest.com/task`,
      data: {
        desc: e.detail.value.desc,
        dob: objectMultiArray[0][e.detail.value.personalInfo[0]].name,
        edu: multiArray[2][e.detail.value.personalInfo[2]],
        industry: multiArray[3][e.detail.value.personalInfo[3]],
        phone: e.detail.value.phone,
        price: e.detail.value.price,
        openid: app.globalData.openid,
        sex: multiArray[1][e.detail.value.personalInfo[1]],
        title: e.detail.value.title
      },
      method: "POST",
      // header: {}, // 设置请求的 header
      success: function(res) {
        console.log(res);
        wx.switchTab({
          url: "/pages/myTasks/tasks"
        });
      }
    });
  }
});
