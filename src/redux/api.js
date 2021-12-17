import axios from "axios";

const api = axios.create({
  baseURL: "https://api.mytrip.natalprojetos.com.br",
});

export const Trips = {
  get: async () => await api.get("/services"),
  show: async (serviceId) => await api.get(`/services/${serviceId}`),
};

export const Notifications = {
  get: async () => await api.get("/notifications"),
};

export const Categories = {
  get: async () => await api.get("/services/categories"),
};

export const Users = {
  show: async (userId) => await api.get(`/users/${userId}`, {
    headers: {
      Authorization: "Bearer dev",
    }
  }),
};
