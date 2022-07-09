import { useEffect, useState } from "react";

export const useLocalStorage = (itemName: string, initialValue: any) => {
  const [item, setItem] = useState<any>(initialValue);

  useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName);
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      setItem(initialValue);
    }else{
      setItem(JSON.parse(localStorageItem))
    }
  }, []);

  const saveItem = (value: any) => {
    localStorage.setItem(itemName, JSON.stringify(value));
    setItem(value);
  };

  return {item, saveItem}
}