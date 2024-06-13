import { useState } from "react";

const UseLocalStorage = (key, initialValue) => {
  const [localStorageData, SetLocalStorageData] = useState(() => setLocalStorage());

  function setLocalStorage() {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  }

  const setValue = value => {
    try {
      const valueToStore = value instanceof Function ? value(localStorageData) : value;
      SetLocalStorageData(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error)
    }
  }

  return [localStorageData, setValue];

}

export default UseLocalStorage;