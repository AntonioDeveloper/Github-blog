import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { BlogContextProvider } from './context/BlogContext';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/Router/Router';
import { GlobalStyle } from './styles/global';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { DefaultLayout } from './DefaultLayouts';
import { Home } from './pages/Home/Home';
import { IssuePage } from './pages/IssuePage/IssuePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "issue",
    element: <IssuePage />
  }
]);

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BlogContextProvider>
        <RouterProvider router={router} />
      </BlogContextProvider>
      <GlobalStyle />
      {/* <BrowserRouter>
      </BrowserRouter> */}
    </ThemeProvider>
  );
}

