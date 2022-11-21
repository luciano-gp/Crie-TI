import { Route, Routes } from "react-router-dom";
import { InitialMenu } from "./pages/InitialMenu";
import { NewPix } from "./pages/NewPix";
import { PixList } from "./pages/PixList";

export function Router() {
  return (
    <Routes>
      <Route path="/home" element={<InitialMenu />} />
      <Route path="/pix" element={<PixList />} />
      <Route path="/new-pix" element={<NewPix />} />
    </Routes>
  );
}
