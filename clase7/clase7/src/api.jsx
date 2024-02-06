import axios from "axios";

const searchImg = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BHssA_6tcBs-Y3gEjK5Rc6iBStrlWDV7EocuIZRPICQ",
    },
    params: { query: "Dogs" },
  });

  console.log(response.data.results);

  return response.data.results;
};

export default searchImg;
