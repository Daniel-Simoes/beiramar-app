import axios from "axios";

const api = axios.create({
  baseURL: "https://api.beiramar.natalprojetos.com.br",
});

export const Trips = {
  get: async () => {
    try {
      // console.log("Antes")
      const response = await api.get("/services", {
        headers: {
          Authorization: "Bearer dev user",
        }
      });
      // console.log("Depois", response)
      return response;
    } catch (err) {
      if (err) console.log("ERROR", err.message)
    }
  },
  show: async (serviceId) => await api.get(`/services/${serviceId}`),
};

export const Notifications = {
  get: async () => await api.get("/notifications", {
    headers: {
      Authorization: "Bearer dev user",
    }
  }),
};

export const Categories = {
  get: async () => await api.get("/services/categories", {
    headers: {
      Authorization: "Bearer dev user",
    }
  }),
};

export const Users = {
  show: async (userId) => await api.get(`/users/${userId}`, {
    headers: {
      Authorization: "Bearer dev user",
    }
  }),
};
