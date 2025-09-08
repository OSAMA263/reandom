import ReactQuery from "./ReactQuery";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

export const posts_api = "https://jsonplaceholder.typicode.com/posts";
export default function Base() {
  return (
    <>
      <ReactQuery />
      <ReactQueryDevtools />
    </>
  );
}
