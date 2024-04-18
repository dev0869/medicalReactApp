import { create } from "zustand";

export const useStore = create((set) => ({
    options: {
      value: '',
      label: '',
    },
    setOptions: () => set((state) => ({ options: state.options })),
  }))
  
