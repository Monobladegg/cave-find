import { create } from "zustand";

interface StoreState {
  limit: number;
  search: string;
  mainUrl: string;
  setSearch: (search: string) => void;
}

const useStore = create<StoreState>((set, get) => ({
  limit: 3,
  search: "",
  mainUrl: `https://66757d09a8d2b4d072f03c50.mockapi.io/Dungeons?search=${""}`,
  setSearch: (search: string) => set({
    search,
    mainUrl: `https://66757d09a8d2b4d072f03c50.mockapi.io/Dungeons?search=${search}`
  })
}))

export default useStore;
