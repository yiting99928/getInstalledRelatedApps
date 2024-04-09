console.log("test");

async function checkInstalledRelatedApps() {
  if (navigator.getInstalledRelatedApps) {
    try {
      const relatedApps = await navigator.getInstalledRelatedApps();

      relatedApps.forEach((app) => {
        console.log(app.id, app.platform, app.url);
      });
    } catch (error) {
      console.error("獲取已安装應用程式時：", error);
    }
  } else {
    console.error("不支持 navigator.getInstalledRelatedApps() 方法。");
  }
}

checkInstalledRelatedApps();
