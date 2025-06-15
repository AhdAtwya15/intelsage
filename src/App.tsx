
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";
import { Suspense, useEffect } from "react";
import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import 'flowbite';
import { Toaster } from 'react-hot-toast';
import { UserProvider } from './context/UserContext';

function App() {
  const [theme, colorMode] = useMode();

  useEffect(() => {
    console.log("Current Theme:", theme.palette);
    if (theme.palette.mode !=="dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  return (
    <UserProvider>
      <ColorModeContext value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline  />
          <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={Router} />
            <Toaster
            toastOptions={{
            success: {
              style: {
                  backgroundColor: 'black', 
                  color: '#e0e0e0',          
                  },
                  className: 'dark:!bg-[#FFFFFF] dark:!text-[#141414]'
              },
            error: {
              style: {
                  backgroundColor: 'black', 
                  color: '#e0e0e0',          
                  },
                  className: 'dark:!bg-[#FFFFFF] dark:!text-[#141414]'
              },
            }}
/>
          </Suspense>
        </ThemeProvider>
      </ColorModeContext>
    </UserProvider>
  );
}

export default App;
