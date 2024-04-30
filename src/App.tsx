import { useState } from "react";
import { RootLayout } from "./shared/components";
import { Outlet, useLocation } from "react-router-dom";

import "@elastic/eui/dist/eui_theme_light.css";
import "@elastic/eui/dist/eui_theme_dark.css";
import { EuiProvider } from "@elastic/eui";
import { HomeView } from "./views";

const App = () => {
  const [mode, setMode] = useState<"stack" | "serverless">("serverless");
  const location = useLocation();
  console.log(location.pathname);
  return (
    <EuiProvider colorMode="light">
      <div>
        Controls{": "}
        <button
          onClick={() =>
            setMode(mode === "serverless" ? "stack" : "serverless")
          }
        >
          {mode === "serverless" ? "View stack" : "View serverless"}
        </button>
      </div>
      <RootLayout mode={mode}>
        {location.pathname === "/" ? <HomeView /> : <Outlet />}
      </RootLayout>
    </EuiProvider>
  );
};

export default App;
