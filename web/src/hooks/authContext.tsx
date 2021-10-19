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
}

export const authContext = createContext({} as AuthContextType);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const {'nextauth.token': token, 'nextauth.user': user} = parseCookies();

    if(token) {
      setUser(JSON.parse(user));
    }
    
  }, []);

  async function signIn({user, token}: SignInData) {


    setCookie(undefined, 'nextauth.token',token, {
      maxAge: 60 * 60 * 1
    });

    setCookie(undefined, 'nextauth.user',JSON.stringify(user));

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    Router.push('/dashboard');

  }
  return (
    <authContext.Provider value={{user, isAuthenticated , signIn}}>
    {children}
  </authContext.Provider>
  );
}