import { defaultConfig } from "./defaultConfig";
import { setConfig } from "./storage";

chrome.storage.sync.get(Object.keys(defaultConfig), (data) => {
  const config = { ...defaultConfig, ...data };

  for (const key of Object.keys(config)) {
    const input = document.getElementById(key);
    input.checked = config[key];
  }
});

Object.keys(defaultConfig).forEach((id) => {
  const el = document.getElementById(id);
  el.addEventListener("change", async (event) => {
    try {
      document.body.classList.toggle(id);
      setConfig({ [id]: event.target.checked });
    } catch (error) {
      console.log(error);
    }
  });
});
