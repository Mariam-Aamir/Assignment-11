"use client";
import { useState, useEffect } from "react";

export default function FetchPostsPage() {
  const [posts, setPosts] = useState([]);
  const [error, setPosts] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/external")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPosts(data.data);
        } else {
          setError(data.message);
        }
      });
      .catch((err) => setError("an unexpected error"))
      .finally(() => setLoading(false))
  }, [])

  return(
    <div>
        <hi>Posts</hi>
        <ul>
            {posts.map((post:{id:number; title: string ,body: string})=>(
                
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
  )
}
