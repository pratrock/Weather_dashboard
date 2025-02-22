import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/WeatherDashboard";
import CityPage from "./pages/CityPage";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />}></Route>
            <Route path="/city/:cityName" element={<CityPage />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
