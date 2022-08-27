import throttle from "lodash.throttle";
import { defaultConfig } from "./defaultConfig";

export const setConfig = throttle(async (data) => {
  const promise = new Promise((resolve, reject) => {
    if (chrome?.storage) {
      chrome.storage.sync.set(data, () => {
        return resolve();
      });
    }
  });
  return promise;
}, 600);
