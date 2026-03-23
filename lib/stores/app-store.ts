import { create } from "zustand";
import { devtools } from "zustand/middleware";

type AppStoreState = {
  isNavOpen: boolean;
  pendingRequests: number;
};

type AppStoreActions = {
  openNav: () => void;
  closeNav: () => void;
  toggleNav: () => void;
  startRequest: () => void;
  endRequest: () => void;
  resetUiState: () => void;
};

type AppStore = AppStoreState & AppStoreActions;

const initialState: AppStoreState = {
  isNavOpen: false,
  pendingRequests: 0,
};

export const useAppStore = create<AppStore>()(
  devtools(
    (set) => ({
      ...initialState,
      openNav: () => set({ isNavOpen: true }, false, "app/openNav"),
      closeNav: () => set({ isNavOpen: false }, false, "app/closeNav"),
      toggleNav: () =>
        set((state) => ({ isNavOpen: !state.isNavOpen }), false, "app/toggleNav"),
      startRequest: () =>
        set(
          (state) => ({ pendingRequests: state.pendingRequests + 1 }),
          false,
          "app/startRequest",
        ),
      endRequest: () =>
        set(
          (state) => ({ pendingRequests: Math.max(0, state.pendingRequests - 1) }),
          false,
          "app/endRequest",
        ),
      resetUiState: () => set(initialState, false, "app/resetUiState"),
    }),
    { name: "app-store" },
  ),
);
