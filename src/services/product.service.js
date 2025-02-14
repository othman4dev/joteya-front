import axiosInstance from "../config/axios";

export function getProducts() {
  return axiosInstance.get("/products");
}
