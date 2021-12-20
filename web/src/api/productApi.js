import instance from './instance';

export const getAll = () => {
    const url = `/product`;
    return instance.get(url);
}
export const read = (id) => {
    const url = `/product/` + id;
    return instance.get(url);
}
export const add = (product) => {
    const url = `/product`;
    return instance.post(url, product)
}
export const remove = (id) => {
    const url = `/product/` + id;
    return instance.delete(url)
}
export const listLimit = () => {
    const url = `/limit`;
    return instance.get(url)
}
export const limitHome = () => {
    const url = `/limithome`;
    return instance.get(url)
}
export const update = (product) => {
    const url = `/product/` + product.id;
    return instance.put(url, product)
}

export const search = (key) => {
    const url = `/product/search`+key;
    return instance.get(url)
}

