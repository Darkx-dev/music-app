import axios from "axios";

// All functions for search routes below

export const getSong = async (query: string) => {
  let limit = 10;
  const options: any = {
    method: "GET",
    url: "https://jiosaavn-api-instance.vercel.app/api/search/songs",
    params: { query, limit },
  };
  const response = await axios.request(options);
  const data = await response.data;
  return data;
};
