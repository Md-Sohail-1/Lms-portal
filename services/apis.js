import { BASE_URL } from './helper.js';
import { commonRequest } from './axiosCall'

export const handleGetAllLead = async (method, body) => {
  return await commonRequest(method, BASE_URL, body);
};

export const handleUserLogin = async (method, body)=> {
  return await commonRequest(method, `${BASE_URL}/login`, body);
};

export const handleAddNewLead = async (method, body) => {
  return await commonRequest(method, `${BASE_URL}/createLead`, body);
};