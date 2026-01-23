import { useState, useCallback } from "react";
import Banner from "./components/Banner"
import "./App.css"
import ErrorBoundary from "./components/ErrorBoundary";
import navValues from "./navigation/navValues";
import ComponentPicker from "./components/ComponentPicker";
import navigationContext from "./navigation/navigationContext";

function App() {
  const navigate = useCallback(
    (navTo, param) => setNav({ current: navTo, param, navigate }),
    []
  );
  const [nav, setNav] = useState({ current: navValues.home, navigate });
  return (
    <navigationContext.Provider value={nav}>
      <ErrorBoundary fallback="Something went wrong!">
        <Banner>Providing houses all over the world</Banner>
      </ErrorBoundary>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  )
}

export default App