import axios from "axios";
export const getSongById = async (id: string) => {
  const response = await axios.get(
    `https://jiosaavn-api-instance.vercel.app/api/songs?id=${id}`
  );
  const data = await response.data;
  return data;
};
