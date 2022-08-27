import throttle from "lodash.throttle";
import { defaultConfig } from "./defaultConfig";

export const getConfig = async (key) => {
  const promise = new Promise((resolve, reject) => {
    if (chrome?.storage) {
      chrome.storage.sync.get([key], (data) => {
        if (Object.keys(data || {}).length === 0) {
          return resolve(defaultConfig[key]);
        }

        return resolve(data[key]);
      });
    }
  });
  return promise;
};

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
