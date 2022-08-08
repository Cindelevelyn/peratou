import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Index } from "../pages/Index";
import { Produtos } from "../pages/Produtos";
import { Contato } from "../pages/Contato";
import { Cestinha } from "../pages/Cestinha";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Index />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/cestinha" element={<Cestinha />} />
      <Route path="/" element={<Index/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
