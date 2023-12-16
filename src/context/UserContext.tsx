"use client"

import { createContext, useState, useContext } from "react"
import { User } from "@/interfaces/User"

export const UserContext = createContext<{
    users: User[];
    loadUsers: () => Promise<void>
}>({
    users: [],
    loadUsers: async () => {}
})

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (!context)
        throw new Error("useUsers must be used within a PostsProvider")

        return context
}

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [users, setUsers] = useState<User[]>([])

    async function loadUsers() {
        const response = await fetch("/api/users")
        setUsers(await response.json())
    }
      
    return (
        <UserContext.Provider value={{ users, loadUsers }}>
            {children}
        </UserContext.Provider>
    )
};