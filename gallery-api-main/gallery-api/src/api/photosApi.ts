import axios from 'axios';

export interface Photo {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const fetchPhotos = async (page: number, limit: number): Promise<Photo[]> => {
  try {
    const response = await axios.get<Photo[]>(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
