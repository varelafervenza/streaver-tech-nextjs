import { Post } from "@/interfaces/Post"
import { usePostContext } from "@/context/PostContext";
import { MdOutlineDelete } from "react-icons/md";

function PostComponent({ post }: { post: Post }) {
  const { deletePost } = usePostContext()

    return (
      <div className="bg-slate-300 p-4 my-2 flex gap-5 justify-between">
        <div className="whitespace-pre-line">
          <h1 className=" text-2xl font-bold">{ post.title }</h1>
          <p className="align-middle">{ post.body }</p>
        </div>
        <div className="my-2">  
          <button 
          onClick={async () => {
            if (confirm("Are you sure you want to delete this post?"))
              await deletePost(post.id)
          }}>
            <MdOutlineDelete className="text-2xl text-red-600"/>
          </button>
        </div>
      </div>
    )
  }
  
  export default PostComponent