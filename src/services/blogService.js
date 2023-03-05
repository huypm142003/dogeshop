import api from "./api";

const list = () =>  api.get(api.url.blog).then((response) => response.data);

const get = (id) => api.get(`${api.url.blog}/${id}`).then((response) => response.data);

const create = (data) => {
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return api.post(api.url.blog, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => response.data);
}

const update = (id, data) => {
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return api.post(`${api.url.blog}/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => response.data);
}

const remove = (id) => api.delete(`${api.url.blog}/${id}`).then((response) => response.data);

const blogServices = {
    list,
    get,
    create,
    update,
    remove
}

export default blogServices;