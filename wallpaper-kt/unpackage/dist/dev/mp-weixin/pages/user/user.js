"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userinfo = common_vendor.ref(null);
    const getUserInfo = () => {
      api_apis.apiUserInfo().then((res) => {
        console.log(res);
        userinfo.value = res.data;
      });
    };
    getUserInfo();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_system.getNavBarHeight)() + "px",
        b: userinfo.value
      }, userinfo.value ? {
        c: common_vendor.t(userinfo.value.IP),
        d: common_vendor.t(userinfo.value.address.city)
      } : {}, {
        e: userinfo.value
      }, userinfo.value ? {
        f: common_vendor.p({
          type: "download-filled",
          size: "20"
        }),
        g: common_vendor.t(userinfo.value.downloadSize),
        h: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        i: common_vendor.p({
          type: "star-filled",
          size: "20"
        }),
        j: common_vendor.t(userinfo.value.scoreSize),
        k: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        l: common_vendor.p({
          type: "chatboxes-filled",
          size: "20"
        }),
        m: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      } : {}, {
        n: common_vendor.p({
          type: "notification-filled",
          size: "20"
        }),
        o: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        }),
        p: common_vendor.p({
          type: "flag-filled",
          size: "20"
        }),
        q: common_vendor.p({
          type: "right",
          size: "15",
          color: "#aaa"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"], ["__file", "C:/Users/xiaosass/Desktop/wallpaper/wallpaper-kt/pages/user/user.vue"]]);
wx.createPage(MiniProgramPage);
