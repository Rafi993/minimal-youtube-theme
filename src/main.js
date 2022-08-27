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

  console.log("removeClassList", removeClassList);

  document.body.classList.add(...addClassList);
  document.body.classList.remove(...removeClassList);
};

chrome.storage.sync.get(Object.keys(defaultConfig), (data) => {
  run(data);
});

chrome.storage.onChanged.addListener((changes) => {
  let config = {};
  for (key of Object.keys(changes)) {
    config[key] = changes[key].newValue;
  }

  run(config);
});
