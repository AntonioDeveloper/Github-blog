import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { apiUser, apiIssues, apiSelectIssue } from "../service/Api";
import { BlogIntro } from "../@types/BlogContextTypes";

interface BlogContextType {
  user: BlogIntro
}

interface BlogContextProviderProps {
  children: ReactNode;
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogContextProvider({ children }: BlogContextProviderProps) {

  const [user, setUser] = useState<BlogIntro>({
    userName: "",
    userLogin: "",
    userCompany: "",
    userBio: "",
  });

  const [issues, setIssues] = useState({});
  const [singleIssue, setSingleIssue] = useState({});

  useEffect(() => {
    apiUser.get(`AntonioDeveloper`)
      .then((response: any) => {
        setUser({
          userName: response.data.name,
          userLogin: response.data.login,
          userCompany: response.data.company,
          userBio: response.data.bio
        });
      })
      .catch((err: string) => {
        console.log("Erro:" + err);
      })

  }, []);

  useEffect(() => {
    apiIssues.get(`Boas%20pr%C3%A1ticas%20repo:AntonioDeveloper/Github-blog`)
      .then((response: any) => {
        setIssues(response.data);
      })
      .catch((err: string) => {
        console.log("Erro:" + err);
      });

  }, []);

  useEffect(() => {
    apiSelectIssue.get(`AntonioDeveloper/Github-blog/issues/1`)
      .then((response: any) => {
        setSingleIssue(response.data);
      })
      .catch((err: string) => {
        console.log("Erro:" + err);
      });

  }, []);

  return (
    <BlogContext.Provider value={{ user }}>
      {children}
    </BlogContext.Provider>
  )
}