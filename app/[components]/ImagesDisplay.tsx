"use client";

import { useState, useEffect } from "react";
import ImageDisplay from "./ImageDisplay";
import Loader from "./Loader";

interface Post {
  caption: string;
  createdAt: string;
  groupId: string;
  id: string;
  images: {
    id: string;
    groupId: string;
    key: string;
    order: number;
    createdAt: string;
    url: string;
  }[];
}

interface Props {
  adminStatus: boolean;
}

const ImagesDisplay = ({ adminStatus }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    setIsLoading(true)
    fetch("/api/list-posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));

    setIsLoading(false)
  }, []);

  return (
    <section className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:gap-7 max-w-250 mx-auto my-5 px-3 py-5">
    {isLoading && <Loader />}
      {!isLoading && posts?.map((post) => (
        <ImageDisplay key={post.id} post={post} isAdmin={adminStatus}/>
      ))}
    </section>
  );
};

export default ImagesDisplay;
