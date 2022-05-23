import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/Home/Home";
import SendCurriculo from "./pages/SendCurriculo/SendCurriculo";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<SendCurriculo />} />
            </Routes>

        </Router>
    )
}