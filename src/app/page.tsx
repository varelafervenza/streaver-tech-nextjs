"use client"

import FilterComponent from "@/components/FilterComponent"
import PostComponent from "@/components/PostComponent"
import { usePostContext } from "@/context/PostContext"
import { Post } from "@/interfaces/Post"
import { useEffect } from "react"

function HomePage() {
  const { posts, loadPosts } = usePostContext()

  useEffect(() => {
    loadPosts("")
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">  
      <div>
        <FilterComponent/>
          <div className="my-5">
            {
              (!posts || posts.length == 0) 
              ? <h1 className="text-white text-2xl">User has not posts</h1>
              : 
                posts.map((post: Post) => (
                  <PostComponent post={ post } key={ post.id }/>
                ))
            }    
          </div>  
      </div>
    </div>
  )
  
}

export default HomePage
