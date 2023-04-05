import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { apiUser, apiIssues, apiSelectIssue } from "../service/Api";
import { BlogIntro, IssueType } from "../@types/BlogContextTypes";
import { BlogIssueType } from '../@types/BlogIssueType';

interface BlogContextType {
  user: BlogIntro,
  issues: BlogIssueType[],
}

interface BlogContextProviderProps {
  children: ReactNode;
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogContextProvider({ children }: BlogContextProviderProps) {

  const [user, setUser] = useState<BlogIntro>({
    userImage: "",
    userName: "",
    userLogin: "",
    userCompany: "",
    userBio: "",
    userFollowers: 0
  });

  const [issues, setIssues] = useState<BlogIssueType[]>([
    {
      id: 0,
      title: "",
      created_at: "",
      body: "",
    }
  ]);
  const [singleIssue, setSingleIssue] = useState({});

  useEffect(() => {
    apiUser.get(`AntonioDeveloper`)
      .then((response: any) => {
        setUser({
          userImage: response.data.avatar_url
          ,
          userName: response.data.name,
          userLogin: response.data.login,
          userCompany: response.data.company,
          userBio: response.data.bio,
          userFollowers: response.data.followers
        });
      })
      .catch((err: string) => {
        console.log("Erro:" + err);
      })

  }, []);

  useEffect(() => {
    apiIssues.get(`AntonioDeveloper/Github-blog/issues`)
      .then((response: any) => {
        //console.log(response.data);
        setIssues(response.data);
        // response.data.forEach((res: any) => {
        //   setIssues({
        //     titleIssue: res.title,
        //     dateIssue: res.created_at,
        //     bodyIssue: res.body
        //   });
        // });
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
    <BlogContext.Provider value={{ user, issues }}>
      {children}
    </BlogContext.Provider>
  )
}