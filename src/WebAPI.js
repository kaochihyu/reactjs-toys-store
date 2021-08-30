import { getAuthToken } from "./utils";
const BASE_URL = 'https://toys-store-json-server.herokuapp.com';
// const BASE_URL = "http://localhost:8000";

export const getItemsAPI = () => {
  return fetch(`${BASE_URL}/items`).then((res) => res.json());
};

export const getItemAPI = (id) => {
  return fetch(`${BASE_URL}/items/${id}`).then((res) => res.json());
};

export const registerAPI = (username, password, nickname) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      nickname,
    }),
  }).then((res) => res.json());
};

export const loginAPI = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

export const getMeAPI = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

export const addItemAPI = (
  name,
  description,
  tag,
  picture,
  quantity,
  price
) => {
  return fetch(`${BASE_URL}/items`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      tag,
      picture,
      quantity,
      price,
    }),
  }).then((res) => res.json());
};

export const deleteItemAPI = (id) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};

export const updateItemAPI = (
  id,
  name,
  description,
  tag,
  picture,
  quantity,
  price
) => {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      tag,
      picture,
      quantity,
      price,
    }),
  }).then((res) => res.json());
};

export const updateCartAPI = (id, cart) => {
  return fetch(`${BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ cart }),
  }).then((res) => res.json());
};


export const linePushAPI = (userId, message) => {
  const token = '6Ika9sDJnm4vvqJMVEdx602trzDankplwB+MNKmEdSg9NNGCvlPTXltbP2v5DEQdMOjVCjZr5XU8XuZ687Txy4UwgSPDQyW/cBdt+DuC38F+pJSCDxLaWwi97tXTYQm/JcaL60NuarWHMzwdIJ+r3QdB04t89/1O/w1cDnyilFU=';
  console.log(userId, message);
  return fetch(`https://api.line.me/v2/bot/message/push`, {

    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "authorization": `Bearer ${token}`,
    },
    'payload': JSON.stringify({
      'to': userId,
      'messages': [message]
    }),
  }).then((res) => res.json());
};