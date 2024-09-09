import "../src/styles/App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Empresa } from "./pages/Empresa"; // Página de la Empresa
import { Home } from "./pages/home"; // Página de inicio
import { AnalisisEstrategico } from "./pages/AnalisisEstrategico"; // Página de Análisis Estratégico
import { AnalisisSituacion } from "./pages/AnalisisSituacion"; // Página de Análisis de la Situación
import { FodaForm } from "./components/FodaForm"; // Formulario FODA

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/analisis-estrategico" element={<AnalisisEstrategico />} />
        <Route path="/analisis-situacion" element={<AnalisisSituacion />} />
        <Route path="/analisis-foda" element={<FodaForm />} />
      </Routes>
    </Router>
  );
}

export default App;
