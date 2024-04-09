console.log("test");

async function checkInstalledRelatedApps() {
  if (navigator.getInstalledRelatedApps) {
    try {
      const relatedApps = await navigator.getInstalledRelatedApps();

      relatedApps.forEach((app) => {
        document.write(app.id, app.platform, app.url);
      });
    } catch (error) {
        document.writer("獲取已安装應用程式時：", error);
    }
  } else {
    document.write("不支援 navigator.getInstalledRelatedApps()");
  }
}

checkInstalledRelatedApps();
