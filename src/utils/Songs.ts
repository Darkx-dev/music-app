import axios from "axios";

export const getSongById = async (id: string) => {
  const options = { method: "GET", url: `https://jiosaavn-api-instance.vercel.app/api/songs/${id}` };

  try {
    const response = await axios.request(options);
    const data = await response.data;
    return response.data.data[0]
  } catch (error) {
    console.error(error);
  }
};
