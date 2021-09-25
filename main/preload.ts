const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    on(channel: string, func: (arg0: any) => void) {
        ipcRenderer.on(channel, (event, ...args) => func(args));
    },
    once(channel: string, func: (arg0: any) => void) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(args));
      }
    },
    send(channel: string, ...args: string[]) {
        ipcRenderer.send(channel, ...args);
    },
  },
});