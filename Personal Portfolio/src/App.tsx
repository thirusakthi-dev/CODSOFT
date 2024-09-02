import viteLogo from "/vite.svg";
import "./App.css";
import Main from "./components/Main";
import { ThemeProvider } from "./components/ThemeContext";
ThemeProvider;

function App() {
  return (
    <>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
