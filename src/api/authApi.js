import axiosClient from "./axiosClient";

export const registerUser = (data) =>
  axiosClient.post("/register", data);

export const loginUser = (data) =>
  axiosClient.post("/login", data);

export const getCurrentUser = () =>
  axiosClient.get("/me");

export const getAllUsers = () =>
  axiosClient.get("/all");