import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from "../../DefaultLayouts/index";
import { Home } from "../../pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}