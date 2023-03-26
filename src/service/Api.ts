import axios from 'axios';

export const apiUser = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const apiIssues = axios.create({
  baseURL: 'https://api.github.com/search/issues?q=',
});

export const apiSelectIssue = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

