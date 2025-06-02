import { Routes, Route } from "react-router-dom";

import { Inicial } from './pages/Inicial'
import { SobreNos } from "./pages/SobreNos";
import { LayoutPadrao } from "./layouts/LayoutPadrao";
import { Error } from "./pages/Error404";

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
                <Route path="/" element={<Inicial />} />
                <Route path="/sobre-nos" element={<SobreNos />} />
            </Route>
            <Route path="*" element={<Error />} />
        </Routes>
    )
}