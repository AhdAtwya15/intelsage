import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from "./Router/Router";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'




const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:true
    }
  }
})

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={Router} />
    </Suspense>
  </StrictMode>
  </QueryClientProvider> 
);
