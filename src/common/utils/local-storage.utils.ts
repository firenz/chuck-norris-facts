export const saveData = (key: string, data: any) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadData = (key: string): any => {
  const data = localStorage.getItem(key) || 'null';
  return JSON.parse(data);
};
