import axios from "axios";

const searchImg = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID BHssA_6tcBs-Y3gEjK5Rc6iBStrlWDV7EocuIZRPICQ",
    },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImg;
