import { create } from "zustand";

interface UseMainSidebar {
  isOpen: boolean;
  onToggle(): void;
}

export const useMainSidebar = create<UseMainSidebar>((set) => ({
  isOpen: false,
  onToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}));
