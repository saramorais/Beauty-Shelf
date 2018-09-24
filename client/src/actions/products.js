import axios from 'axios';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const FETCH_PRODUCT = 'FETCH_PRODUCT';
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export function fetchProducts() {
  const request = axios.get(`/api/product`);
  return {
    type: FETCH_PRODUCTS,
    payload: request
  }
}

export function fetchAllProducts() {
  const request = axios.get(`/api/product`);
  return {
    type: FETCH_ALL_PRODUCTS,
    payload: request
  }
}

export function fetchProduct(id) {
  const request = axios.get(`/api/product/${id}`);
  return {
    type: FETCH_PRODUCT,
    payload: request
  }
}

export function searchProducts(term) {
  const request = axios.get(`/api/productSearch/${term}`);
  return {
    type: SEARCH_PRODUCTS,
    payload: request
  }
}