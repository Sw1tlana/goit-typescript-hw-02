import axios from "axios";
import { Photo } from "../components/App/App.types";

const ACCESS_KEY = "YQ_yL-LQzjl6Sr0ymPf0zmir3fmTWR81QSVXvomwQP4";

interface apiResponse {
    results: Photo[];
}

export const requestPhotosByQuery = async ({ query, page = 1, perPage }: { query: string, page?: number, perPage?: number }): Promise<Photo[]>=> {
    const { data } = await axios.get<apiResponse>(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}`, { 
        params: {
            query: query,
            page: page,
            per_page: perPage
        }
    });
return data.results;
}