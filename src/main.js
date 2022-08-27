import { defaultConfig } from "./defaultConfig";

const run = async (config) => {
  const addClassList = [];
  const removeClassList = [];

  if (config.isThumbnailHidden) {
    addClassList.push("isThumbnailHidden");
  } else {
    removeClassList.push("isThumbnailHidden");
  }

  if (config.isGrayScale) {
    addClassList.push("isGrayScale");
  } else {
    removeClassList.push("isGrayScale");
  }

  if (config.hideRecommendation) {
    addClassList.push("hideRecommendation");
  } else {
    removeClassList.push("hideRecommendation");
  }

  if (config.hideComments) {
    addClassList.push("hideComments");
  } else {
    removeClassList.push("hideComments");
  }

  if (config.hideNavDraw) {
    addClassList.push("hideNavDraw");
  } else {
    removeClassList.push("hideNavDraw");
  }

  document.body.classList.add(...addClassList);
  document.body.classList.remove(...removeClassList);
};

chrome.storage.sync.get(Object.keys(defaultConfig), (data) => {
  if (Object.keys(data).length === 0) {
    run(defaultConfig);
  } else {
    run({ ...defaultConfig, ...data });
  }
});

chrome.storage.onChanged.addListener(() => {
  chrome.storage.sync.get(Object.keys(defaultConfig), (data) => {
    run({ ...defaultConfig, ...data });
  });
});
