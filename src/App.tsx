import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Global/SideBar/SideBar";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";
import { useEffect } from "react";

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
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex h-screen bg-white dark:bg-darkBg transition-colors ">
          <Sidebar />

          <div className="flex-grow">
            <Outlet />
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
