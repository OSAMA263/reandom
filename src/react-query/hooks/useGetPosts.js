import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { posts_api } from "../Base";

const fetPosts = async (id = "") => {
  try {
    const res = await axios.get(posts_api + `/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (newPost) => {
  try {
    const res = await axios.post(posts_api, newPost);

    return res;
  } catch (err) {
    console.log(err);
  }
};

const useCreatePost = () => {
  const client = useQueryClient();

  const mutate = useMutation({
    mutationFn: createPost,
    onSuccess: () => client.invalidateQueries(["posts"]), //now after adding the post we re-reun the get posts to see the new posts
    //and we will paybass the staleTime
  });
  return mutate;
};

const useGetPosts = (id, run) => {
  const query = useQuery({
    queryKey: ["posts", id], // the id here means if this fetch runs again but with diffrent id it will run, so it wont cach the data and not run the fetch
    queryFn: () => fetPosts(id === 0 ? "" : id),
    staleTime: 1000 * 10,
    enabled: run, //runs only when the state is true
  });
  return query;
};

export { useGetPosts, useCreatePost };
