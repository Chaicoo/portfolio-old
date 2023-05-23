import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Projects } from "../pages";

const Router: React.FC = () => {
    return (
            <Routes>
                <Route path="/portifolio" element={<Home />} />
                <Route path="/portifolio/projects" element={<Projects />} />
            </Routes>
    );
};

export default Router;
