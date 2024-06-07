import axios from 'axios';

const API_URL = 'http://localhost:8080/api/posts';

const getAllPosts = () => {
    return axios.get(API_URL);
};

const getPostById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};

const createPost = (post) => {
    return axios.post(API_URL, post);
};

const updatePost = (id, post) => {
    return axios.put(`${API_URL}/${id}`, post);
};

const deletePost = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export default {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};
