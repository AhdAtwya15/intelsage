import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Router/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  </StrictMode>
);
