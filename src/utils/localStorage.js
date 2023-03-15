export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) !== null
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
};

export const updateLocalStorage = (arr) => {
  localStorage.setItem("todos", JSON.stringify(arr));
};
