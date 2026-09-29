import throttle from "lodash.throttle";

export const setConfig = throttle(async (data) => {
  const promise = new Promise((resolve, _reject) => {
    if (chrome?.storage) {
      chrome.storage.sync.set(data, () => {
        return resolve();
      });
    }
  });
  return promise;
}, 600);
