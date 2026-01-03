// Zamiast pisać fetch('https://fakestoreapi.com/...') bezpośrednio w komponentach,
// tworzysz tutaj funkcje (np. getProducts()).

import axios from "axios";

const API = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchProducts = () => API.get("/products");
export const fetchProduct = (id) => API.get(`/products/${id}`);
