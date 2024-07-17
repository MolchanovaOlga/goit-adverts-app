import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

function App() {
  return (
    <Container>
      <Navigation />
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage replace />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
}

export default App;
