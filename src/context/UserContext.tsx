import { createContext } from 'react';
import { UserContextType } from "../Interfaces";

export const UserContext = createContext<UserContextType | undefined>(undefined);
