import { useEffect, useState } from "react"

type localStorageHookReturns = [string | null, (value: any) => void, () => void]

export const useLocalStorage = (key: string): localStorageHookReturns => {
  // Hold the local storage value in local state - defaults to null
  const [value, setValue] = useState<string | null>(null)

  //   Async function to get local item
  const getItem = async () => {
    // Search local storage using the provided key
    const localStorageValue = localStorage.getItem(key)
    // Set the state with the found item
    setValue(localStorageValue)
  }

  useEffect(() => {
    // Guard clause to check on client side
    if (typeof localStorage === "undefined") return
    // Run async function to get the local item
    getItem()
  }, [key])

  //   Middleware function to set value in session and local storage
  const handleSetValue = (value: any) => {
    // Set value locally
    setValue(value)
    // Set value in local storage
    localStorage.setItem(key, value)
  }

  //   Function to reset the value on both ends
  const resetValue = () => {
    //   Reset value locally
    setValue(null)
    // Reset value in local storage
    localStorage.removeItem(key)
  }

  return [value, handleSetValue, resetValue]
}
