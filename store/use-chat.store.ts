"use client";

import { create } from "zustand";

interface ChatDialogStore {
  isOpen: boolean;
  toggleChat: () => void;
}

export const useChatStore = create<ChatDialogStore>((set) => ({
  isOpen: false,
  toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
}));
