import api from "./api";

const list = () =>  api.get(api.url.user).then((response) => response.data);
const get = (id) => api.get(`${api.url.user}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.user, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.user}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.user}/${id}`).then((response) => response.data);
const login = (email, password) => {
    const data = { email, password }
    return api.post(`${api.url.user}/login`, data).then((response) => response.data)
}

const userServices = {
    list,
    get,
    create,
    update,
    remove,
    login
}

export default userServices;