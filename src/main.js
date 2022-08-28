import { defaultConfig } from "./defaultConfig";

const run = async (config) => {
  const addClassList = [];
  const removeClassList = [];

  Object.keys(config).forEach((key) => {
    if (config[key]) {
      addClassList.push(key);
    } else {
      removeClassList.push(key);
    }
  });

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
