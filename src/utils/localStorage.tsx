export const getItem = (itemName: string, initialValue: any) => {
  const localStorageItem = localStorage.getItem(itemName);
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    return initialValue;
  }
  return JSON.parse(localStorageItem);
};
export const saveItem = (itemName: string, value: any) => {
  localStorage.setItem(itemName, JSON.stringify(value));
};
