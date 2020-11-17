import { useState } from 'react'
export function useLocalStorage (key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : item
    } catch (err) {
      return false
    }
  })
  const setLocalStorage = value => {
    console.log('value with the like will save', value)
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      alert(e)
    }
  }
  return [storedValue, setLocalStorage]
}
