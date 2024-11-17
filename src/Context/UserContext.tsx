import React, { createContext, useState, useContext, ReactNode } from "react";

type LoginType = {
  email: string;
  password: string;
};

interface UserContextType {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  login: (data: LoginType) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (data: LoginType) => {
    // Logic for login (could be a call to the API)
    setUser(data.email);
  };

  const logout = () => {
    // Logic for logout
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export default UserContext;
