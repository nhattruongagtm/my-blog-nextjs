import { AxiosAdapter } from "@/cores/adapter/AxiosAdapter";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const axiosAdapter = new AxiosAdapter(
    { "Content-Type": "applicaton/json" },
    1000,
    "https://jsonplaceholder.typicode.com"
  );

  try {
    const resp = await axiosAdapter.get("/posts");
    // console.log(resp.data);
  } catch (error) {
    alert("error");
  }
};

const useDemoQuery = () => {
  const { data, isLoading } = useQuery(["posts"], fetchPosts);
  return { data, isLoading };
};

export default useDemoQuery;
