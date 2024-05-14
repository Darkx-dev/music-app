import axios from "axios";

export const getSongById = async (id: string) => {
  const options = {
    method: "GET",
    url: `https://jiosaavn-api-instance.vercel.app/api/songs/${id}`,
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data.data[0];
  } catch (error) {
    console.error(error);
  }
};

export const getSuggestedSongById = async (id: string, limit: number = 10) => {
  const options = {
    method: "GET",
    url: `https://jiosaavn-api-instance.vercel.app/api/songs/${id}/suggestions/`,
    params: { limit },
  };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    return data
  } catch (error) {
    console.error(error);
  }
};
