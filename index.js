var url =
  window.location.origin + window.location.pathname + window.location.search;
var downloadAPP = false;
// var urlScheme = "etmall://redirect?url=" + encodeURIComponent(url);
var urlScheme = "youtube://";
var iosDownloadUrl =
  "https://itunes.apple.com/tw/app/dong-sen-gou-wu-ehs-nin-sui/id974433138?l=zh&mt=8";
var androidDownloadUrl =
  "https://play.google.com/store/apps/details?id=com.hyxen.app.etmall";
var isAppleDevice = utilityJS.isAppleDevice();
var appStoreUrl = isAppleDevice ? iosDownloadUrl : androidDownloadUrl;
var userAgent = navigator.userAgent;

const isAppleDevice = function () {
  return /iphone|ipad/gi.test(navigator.appVersion)
}


window.onload = function () {
  var smartBannerButton = document.querySelector(".smartbanner__button");
  smartBannerButton.addEventListener("click", function () {
    // call URL Scheme
    // redirectTo(urlScheme);
    // appStore download
    var timer = setTimeout(function () {
      redirectProcess();
    }, 1000);
    // 切換 APP 時，取消後續 Redirect 流程
    document.addEventListener("visibilitychange", clearRedirectCallback, false);
    window.addEventListener("pagehide", clearRedirectCallback, false);

    function redirectProcess() {
      // 有載 app || Safari 直接轉導 URL
      if (downloadAPP) {
        redirectTo(url);
      } else if (window.confirm("是否下載東森APP或以手機版網頁開啟")) {
        redirectToStore();
      } else {
        redirectTo(url);
      }
    }

    function redirectToStore() {
      redirectTo(appStoreUrl);

      // @* 延長秒數到 1000ms，避免出現 android 手機沒有跳轉的情形 *@
      var timer = setTimeout(function () {
        redirectTo(url);
      }, 1000);
    }

    function clearRedirectCallback() {
        clearTimeout(timer)
        document.querySelector('#result').innerText = '請關閉視窗';
    };

    function redirectTo(target) {
      if (isAppleDevice) {
        var a = document.createElement("a");
        a.setAttribute("href", target);
        a.click();
      } else if (
        /Line/.test(userAgent) ||
        /Chrome/.test(userAgent) ||
        /Firefox/.test(userAgent)
      ) {
        location.href = target;
      } else {
        var iframe = document.createElement("iframe");
        iframe.frameBorder = "0";
        iframe.style.cssText = "display:none;border:0;width:0;height:0;";
        document.body.append(iframe);
        iframe.src = target;
      }
    }
  });
};
