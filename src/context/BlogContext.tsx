import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { apiUser, apiIssues, apiSelectIssue } from "../service/Api";

export const BlogContext = createContext({} as any);

export function BlogContextProvider({ children }: any) {

  const [user, setUser] = useState({});
  const [issues, setIssues] = useState({});
  const [singleIssue, setSingleIssue] = useState({});

  useEffect(() => {
    apiUser.get(`AntonioDeveloper`)
      .then((response: any) => {
        setUser(response.data);
      })
      .catch((err: string) => {
        console.log("Erro:" + err);
      });

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
    <BlogContext.Provider value={{ user, issues, singleIssue }}>
      {children}
    </BlogContext.Provider>
  )
}