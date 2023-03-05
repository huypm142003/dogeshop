import api from "./api";

const list = () =>  api.get(api.url.review).then((response) => response.data);
const get = (id) => api.get(`${api.url.review}/${id}`).then((response) => response.data);
const create = (data) => api.post(api.url.review, data).then((response) => response.data);
const update = (id, data) => api.put(`${api.url.review}/${id}`, data).then((response) => response.data);
const remove = (id) => api.delete(`${api.url.review}/${id}`).then((response) => response.data);

const reviewServices = {
    list,
    get,
    create,
    update,
    remove
}

export default reviewServices;