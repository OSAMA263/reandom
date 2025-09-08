import { Button, Field, Input, NativeSelect } from "@chakra-ui/react";
import { useCreatePost, useGetPosts } from "./hooks/useGetPosts";
import { useState } from "react";

export default function ReactQuery() {
  const [postId, setPostId] = useState(0);
  const [run, setRun] = useState(false);

  const { isLoading, isError, error, data, refetch } = useGetPosts(postId, run);

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error:{error?.message}</div>;

  return (
    <div className="flex justify-between">
      <div>
        {Array.isArray(data) ? (
          data.map(({ title, id }) => <h1 key={id}>{title}</h1>)
        ) : data ? (
          <div>
            {data.id}: {data.title}
          </div>
        ) : (
          <div>No data found</div>
        )}
      </div>
      <div>
        <div>
          <Button onClick={() => setPostId((prev) => prev + 1)}>
            Get New Post
          </Button>
          <Button
            onClick={() => {
              setPostId(0);
              setRun(true);
            }}
          >
            Get All Posts
          </Button>
        </div>
        <CreatePost />
      </div>
    </div>
  );
}

const Filters = ({ categories, selectedCat, setSelectedCat }) => {
  return (
    <NativeSelect.Root className="!w-fit">
      <NativeSelect.Field
        value={selectedCat}
        onChange={(e) => setSelectedCat(e.currentTarget.value)}
      >
        <option value="all">all products</option>
        {categories.map((cat) => (
          <option value={cat} key={cat}>
            {cat}
          </option>
        ))}
      </NativeSelect.Field>
      <NativeSelect.Indicator />
    </NativeSelect.Root>
  );
};

const CreatePost = () => {
  const { mutate } = useCreatePost();

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    mutate(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <Field.Root>
        <Input
          type="text"
          name="title"
          placeholder="post title enter here bitch"
        />
        <Input
          type="text"
          name="body"
          placeholder="post title enter here bitch"
          readOnly
          value={"some body shit idk"}
        />
        <Button type="submit">Create Post</Button>
      </Field.Root>
    </form>
  );
};
