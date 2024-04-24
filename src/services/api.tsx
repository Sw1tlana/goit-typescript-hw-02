import axios from "axios";

const ACCESS_KEY = "YQ_yL-LQzjl6Sr0ymPf0zmir3fmTWR81QSVXvomwQP4";

interface requestPhotosProps {
    query: string;
    page: number;
    perPage: number;
}
     
export const requestPhotosByQuery = async ({ query, page = 1, perPage }: requestPhotosProps) => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}`, { 
        params: {
            query: query,
            page: page,
            per_page: perPage
        }
    });
return data.results;
}