// components
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer.js";

// pages
import { Home } from "./pages/home/Home.js";
import { Search } from "./pages/search/Search";
import { Coins } from "./pages/coins/Coins.js";
import { News } from "./pages/news/News.js";

// styled
import GlobalStyles from "./GlobalStyles";

// router
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <GlobalStyles />
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />

        <Route path='/search' exact element={<Search />} />

        <Route path='/coins' exact element={<Coins />} />

        <Route path='/news' exact element={<News />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
