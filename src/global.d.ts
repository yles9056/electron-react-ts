// 定义全局的electron
declare global {
  interface Window {
    electron: IElectron;
  }
}

export interface IElectron {
  ipcRenderer: {
    myPing: () => void;
    on: (channel: string, func: (arg0: any) => void) => void;
    once: (channel: string, func: (arg0: any) => void) => void;
    send: (channel: string, ...args: any[]) => void;
    invoke: (channel: string, ...args: any[]) => Promise<any>;
  };
}
