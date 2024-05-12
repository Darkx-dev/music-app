import axios from "axios";

// All functions for search routes below

export const getSong = async (query: string) => {
  let limit = 10;
  const options: any = {
    method: "GET",
    url: "https://saavn.dev/api/search/songs",
    params: { query, limit },
  };
  const response = await axios.request(options);
  const data = await response.data;
  console.log(data)
  return data;
};
