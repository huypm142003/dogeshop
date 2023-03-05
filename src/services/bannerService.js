import api from "./api";

const list = () =>  api.get(api.url.banner).then((response) => response.data);

const get = (id) => api.get(`${api.url.banner}/${id}`).then((response) => response.data);

const create = (data) => {
    const formData = new FormData();
    for (const key in data) {
        formData.append(key, data[key]);
    }
    return api.post(api.url.banner, formData, {
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
    return api.post(`${api.url.banner}/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then((response) => response.data);
}

const remove = (id) => api.delete(`${api.url.banner}/${id}`).then((response) => response.data);

const bannerServices = {
    list,
    get,
    create,
    update,
    remove
}

export default bannerServices;