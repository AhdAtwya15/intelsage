import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from "./App";
import { UserProvider } from './context/UserProvider'; // ⬅️ هنا

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true
    }
  }
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <UserProvider> {/* ✅ لفينا App هنا */}
        <App />
      </UserProvider>
    </StrictMode>
  </QueryClientProvider>
);
