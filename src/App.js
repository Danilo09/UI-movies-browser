import { Container } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Search from "./Pages/Search/Search";
import Trending from "./Pages/Trending/Trending";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
