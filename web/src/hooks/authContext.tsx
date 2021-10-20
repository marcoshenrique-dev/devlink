import React, {createContext, useEffect, useState} from 'react';
import {setCookie, parseCookies} from 'nookies';

import api from '../services/api';

import Router from 'next/router';
import { AxiosResponse } from 'axios';

type SignInData = {
  user: User;
  token: string;
}

type User = {
  username: string;
  password: string;
  image_url: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
  token: string;
}

export const authContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const {'nextauth.token': token, 'nextauth.user': user} = parseCookies();

    if(token) {

      console.warn(token);

      setUser(JSON.parse(user));
      setToken(token);
    }
    
  }, []);

  async function signIn({user, token}: SignInData) {

    console.error(token);
    setCookie(undefined, 'nextauth.token',token, {
      maxAge: 60 * 60 * 1
    });

    setCookie(undefined, 'nextauth.user',JSON.stringify(user));

    setUser(user);
    setToken(token);

    Router.push('/dashboard');

  }
  return (
    <authContext.Provider value={{user, token, isAuthenticated , signIn}}>
    {children}
  </authContext.Provider>
  );
}