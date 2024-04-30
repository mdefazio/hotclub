import { RootLayout } from "./shared/components";
import { Outlet, useLocation } from "react-router-dom";

import "@elastic/eui/dist/eui_theme_light.css";
import "@elastic/eui/dist/eui_theme_dark.css";
import { EuiProvider } from "@elastic/eui";
import { HomeView } from "./views";

const App = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <EuiProvider colorMode="light">
      <RootLayout>
        {location.pathname === "/" ? <HomeView /> : <Outlet />}
      </RootLayout>
    </EuiProvider>
  );
};

export default App;
