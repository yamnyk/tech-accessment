const Storage = {
  get(key: string) {
    return JSON.parse(localStorage.getItem(key) || "null");
  },
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
export default Storage;
