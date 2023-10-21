export type TToast = {
  type: 'default' | 'info' | 'warning' | 'error';
  message: string;
};

export type TToastStore = {
  toast: TToast | null;
};
