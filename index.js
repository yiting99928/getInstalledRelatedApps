console.log("test");

document.write("哈哈");
async function checkInstalledRelatedApps() {
  if (navigator.getInstalledRelatedApps) {
    try {
      const relatedApps = await navigator.getInstalledRelatedApps();
        document.write(`relatedApps：${relatedApps}`)
      if (relatedApps && relatedApps.length > 0) {
        relatedApps.forEach((app) => {
          document.write(`relatedApps：${app.id}, ${app.platform}, ${app.url}<br>`);
        });
      } else {
        document.write("未找到已安裝的相關應用程式");
      }
    } catch (error) {
      document.write("獲取已安裝應用程式時出錯：", error);
    }
  } else {
    document.write("不支援 navigator.getInstalledRelatedApps() 方法");
  }
}

checkInstalledRelatedApps();
