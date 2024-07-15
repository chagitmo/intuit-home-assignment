import axios from 'axios';
import { PhotographerDetailsType, PhotographerType } from '@type/photographers';

export const getPhotographerDetails = async (photographerId: number): Promise<PhotographerDetailsType> => {
    const response = await axios.get(`http://localhost:5000/api/photographers/${photographerId}`);
    return response.data;
}

export const getPhotographersList = async (page: number, pageSize: number): Promise<PhotographerType[]> => {
    const response = await axios.get(`http://localhost:5000/api/photographers?page=${page}&pageSize=${pageSize}`);
    return response.data;
}