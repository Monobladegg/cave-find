"use client"

import useStore from "@/features/store";

export const plusLimit = () => {
  useStore.setState((state: any) => ({ limit: state.limit + 3 }))
}

export const search = () => {
  useStore.setState((state: any) => ({ limit: state.limit }))
}