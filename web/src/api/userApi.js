import instance from './instance';

export const getAllUsers = () => {
    const url = `/listuser`;
    return instance.get(url);
}

export const signup = (user) => {
    const url = `/signup`;
    return instance.post(url, user)
}
export const signin = (user) => {
    const url = `/signin`;
    return instance.post(url, user)
}

export const deleteUser = (id) => {
    const url = `/deleteuser/${id}`;
    return instance.delete(url)
}