import axios from "axios";

export const fetchSearchResult = async (title: string) => {
    const { data } = await axios.get(
        `https://gamestore-backend.vercel.app/api/search/${title}`
    );
    return data;
};
