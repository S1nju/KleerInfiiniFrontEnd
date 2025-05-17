import React, { createContext, useEffect, useState } from "react";

interface User {
    username: string;
    email: string;
    password: string;
    image: string;
    role: string;
}

interface UserContextValue {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

export const UserContext = createContext<UserContextValue | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User>({
        username: "user",
        email: "example@gmail.com",
        password: "password",
        image: "https://example.com/image.jpg",
        role: "client"
    });

    // Uncomment and adjust the effect as needed
    /*
    useEffect(()=>{
        try {
            Axios.get('/auth/' + user.username).then(response => {
                // setUser with response data if applicable
                setUser(response.data);
            })
        } catch (e) {
            console.log(e);
            window.location.pathname = '/login';
        }
    }, []);
    */

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}