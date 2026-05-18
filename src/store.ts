import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ViewState } from './types'

interface AppStore {
  viewState: ViewState
  setViewState: (state: ViewState) => void
}

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      viewState: 'guest',
      setViewState: (viewState) => set({ viewState }),
    }),
    { name: 'ath-view-state' }
  )
)
