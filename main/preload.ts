const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send("ipc-example", "ping");
    },
    on(channel: string, func: (arg0: any) => void) {
      ipcRenderer.on(channel, (event, ...args) => func(args));
    },
    once(channel: string, func: (arg0: any) => void) {
      ipcRenderer.once(channel, (event, ...args) => func(args));
    },
    send(channel: string, ...args: any[]) {
      ipcRenderer.send(channel, ...args);
    },
    invoke(channel: string, ...args: any[]) {
      return ipcRenderer.invoke(channel, ...args);
    },
  },
});
