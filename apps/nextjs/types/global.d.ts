declare global {
  interface Window {
    SensayChatbot?: {
      destroy(): void;
    };
  }
}

export {};
