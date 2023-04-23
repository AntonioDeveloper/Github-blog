import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/default';
import { BlogContextProvider } from './context/BlogContext';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { IssuePage } from './pages/IssuePage/IssuePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "issue/:postNumber",
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
    </ThemeProvider>
  );
}

