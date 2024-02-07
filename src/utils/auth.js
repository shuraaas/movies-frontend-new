export const BASE_URL = 'http://localhost:3000';
// export const BASE_URL = 'https://api.shuraaas.nomoredomainsclub.ru';

const request = ({
  url,
  method = 'POST',
  token,
  data
}) => {
  return fetch(`${BASE_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...!!token && { 'Authorization': `Bearer ${token}` }
    },
    ...!!data && { body: JSON.stringify(data) }
  })
  .then((res) => {
    if (!res.ok) return Promise.reject(res.status);
    return res.json();
  });
}

export const register = (name, email, password) => {
  return request({
    url: '/signup',
    data: {name, email, password}
  });
};

export const login = (email, password) => {
  return request({
    url: '/signin',
    data: {email, password}
  });
};

export const getContent = (token) => {
  return request({
    url: '/users/me',
    method: 'GET',
    token
  });
}