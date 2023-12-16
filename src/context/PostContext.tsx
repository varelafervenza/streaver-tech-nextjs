"use client"

import { createContext, useState, useContext } from "react"
import { Post } from "@/interfaces/Post";

export const PostContext = createContext<{
    posts: Post[]
    loadPosts: (userId: string) => Promise<void>
    deletePost: (id: string) => Promise<void>
}>({
    posts: [],
    loadPosts: async () => {},
    deletePost: async (id: string) => {}
})

export const usePostContext = () => {
    const context = useContext(PostContext)

    if (!context)
        throw new Error("usePosts must be used within a PostsProvider")

        return context
}

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
    const [posts, setPosts] = useState<Post[]>([])

    async function loadPosts(userId: string) {
        if (!userId || userId == "0"){
            const response = await fetch("/api/posts")
            setPosts(await response.json())
        }
        else{
            const response = await fetch("/api/posts/users/" + userId)
            setPosts(await response.json())
        }
    }
      
    async function deletePost(id: string){
        const response = await fetch("/api/posts/" + id, {
            method: "DELETE"
        })
        setPosts(posts.filter((post) => post.id != id))
    }

    return (
        <PostContext.Provider value={{ posts, loadPosts, deletePost }}>
            {children}
        </PostContext.Provider>
    )
};