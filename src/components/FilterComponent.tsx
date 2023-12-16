import { useUserContext } from "@/context/UserContext"
import { usePostContext } from "@/context/PostContext"
import { User } from "@/interfaces/User"
import { useEffect } from "react"

function FilterComponent() {
  const { users, loadUsers } = useUserContext()
  const { loadPosts } = usePostContext()

  useEffect(() => {
    loadUsers()
  }, []);

  return (
    <div className="flex justify-start">
        <div>
          <label className="text-white text-2xl mx-5">Users</label>
        </div>
        <div>
          <select  className="bg-gray-200 rounded-md p-2 max-w-md"
            onChange={async (e) => await loadPosts(e.target.value)}
            >
            <option value="0">All</option>
            {
              users.map((user: User) => (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              ))
            }
          </select>
        </div>
    </div>
  )
}

export default FilterComponent