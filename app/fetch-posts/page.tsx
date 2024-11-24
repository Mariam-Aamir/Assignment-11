"use client";
import { useState, useEffect } from "react";

export default function FetchPostsPage(){
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
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
      })
      
      .catch((err) => setError("an unexpected error"))
      .finally(() => setLoading(false))
  }, [])

  return(
    <div className="flex flex-col items-center p-8 bg-green-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6 text-green-600">Posts</h1>
    {loading && <p className="text-gray-600">Loading posts...</p>}
    {error && <p className="text-red-500">{error}</p>}
    {!loading && !error && (
      <ul className="w-full max-w-4xl bg-white shadow-lg rounded-lg divide-y divide-gray-200">
        {posts.map((post: { id: number; title: string; body: string }) => (
          <li key={post.id} className="p-4 hover:bg-gray-50">
            <h2 className="font-semibold text-lg text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}
function setError(message: any) {
    throw new Error("Function not implemented.");
}

