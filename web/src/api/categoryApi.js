import instance from './instance';

export const getAllCate = () => {
    const URL = `/category`;
    return instance.get(URL)
}
export const getCate = (id) => {
    const URL = `/category/${id}`;
    return instance.get(URL)
}
export const addCate = (category) => {
    const URL = `/category`;
    return instance.post(URL, category);
}
export const removeCate = (id) => {
    const URL = `/category/${id}`;
    return instance.delete(URL)
}
export const updateCate = (category) => {
    const URL = `/category/` + category.id;
    return instance.put(URL, category)
}



