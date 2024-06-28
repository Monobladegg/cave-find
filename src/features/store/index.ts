import { create } from "zustand";

const useStore = create((set) => ({
  limit: 3,
  dungeons: [],
}))

export default useStore