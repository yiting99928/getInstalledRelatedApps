
async function checkInstalledRelatedApps() {
  const outputDiv = document.getElementById("output");

  if (navigator.getInstalledRelatedApps) {
    try {
      const relatedApps = await navigator.getInstalledRelatedApps();

      if (relatedApps && relatedApps.length > 0) {
        relatedApps.forEach((app) => {
          const appInfo = `${app.id}, ${app.platform}, ${app.url}<br>`;
          outputDiv.innerHTML += appInfo;
        });
      } else {
        outputDiv.innerHTML = "未找到已安裝的相關應用程式";
      }
    } catch (error) {
      outputDiv.innerHTML = "獲取已安裝應用程式時出錯：" + error;
    }
  } else {
    outputDiv.innerHTML = "不支援 navigator.getInstalledRelatedApps() 方法";
  }
}

checkInstalledRelatedApps();

const userAgent = document.getElementById("userAgent");
userAgent.innerHTML = navigator.userAgent