const run = async (config) => {
  try {
    if (config.isThumbnailHidden) {
      document.body.classList.add("isThumbnailHidden");
    } else {
      document.body.classList.remove("isThumbnailHidden");
    }
  } catch (error) {
    console.log("error", error);
  }
};

chrome.storage.sync.get(["isThumbnailHidden"], (data) => {
  run(data);
});

chrome.storage.onChanged.addListener((changes) => {
  let config = {};
  for (key of Object.keys(changes)) {
    config[key] = changes[key].newValue;
  }

  run(config);
});
