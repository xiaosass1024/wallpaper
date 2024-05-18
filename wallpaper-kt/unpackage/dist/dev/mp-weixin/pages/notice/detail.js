"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_mp_html2 = common_vendor.resolveComponent("mp-html");
  (_easycom_uni_tag2 + _easycom_uni_dateformat2 + _easycom_mp_html2)();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_mp_html = () => "../../uni_modules/mp-html/components/mp-html/mp-html.js";
if (!Math) {
  (_easycom_uni_tag + _easycom_uni_dateformat + _easycom_mp_html)();
}
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const detail = common_vendor.ref(null);
    let noticeId;
    common_vendor.onLoad((e) => {
      console.log(e);
      noticeId = e.id;
      getNoticeDetail();
    });
    const getNoticeDetail = () => {
      api_apis.apiGetNoticeInfo({ id: noticeId }).then((res) => {
        detail.value = res.data;
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          text: "置顶",
          inverted: true,
          type: "error"
        }),
        b: common_vendor.t(detail.value.title),
        c: common_vendor.t(detail.value.author),
        d: common_vendor.p({
          date: detail.value.publish_date,
          format: "yyyy/MM/dd hh:mm:ss"
        }),
        e: common_vendor.p({
          content: detail.value.content
        }),
        f: common_vendor.t(detail.value.view_count)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f737f11"], ["__file", "/Users/xiaosass/Desktop/wallpaper/wallpaper-kt/pages/notice/detail.vue"]]);
wx.createPage(MiniProgramPage);
