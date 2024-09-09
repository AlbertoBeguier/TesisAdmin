import { useState } from "react";
import { FodaChart } from "./FodaChart";
import "../styles/FodaForm.scss";

export function FodaForm() {
  const [fodaData, setFodaData] = useState({
    fortalezas: "",
    oportunidades: "",
    debilidades: "",
    amenazas: "",
  });

  const [showChart, setShowChart] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFodaData({ ...fodaData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowChart(true);
  };

  return (
    <div className="foda-container">
      <h1 className="foda-titulo">Análisis FODA</h1>
      <form className="foda-form" onSubmit={handleSubmit}>
        <div className="foda-seccion">
          <label htmlFor="fortalezas">Fortalezas</label>
          <textarea
            name="fortalezas"
            id="fortalezas"
            value={fodaData.fortalezas}
            onChange={handleChange}
            placeholder="Ingrese las fortalezas de la empresa"
          />
        </div>

        <div className="foda-seccion">
          <label htmlFor="oportunidades">Oportunidades</label>
          <textarea
            name="oportunidades"
            id="oportunidades"
            value={fodaData.oportunidades}
            onChange={handleChange}
            placeholder="Ingrese las oportunidades del mercado"
          />
        </div>

        <div className="foda-seccion">
          <label htmlFor="debilidades">Debilidades</label>
          <textarea
            name="debilidades"
            id="debilidades"
            value={fodaData.debilidades}
            onChange={handleChange}
            placeholder="Ingrese las debilidades internas"
          />
        </div>

        <div className="foda-seccion">
          <label htmlFor="amenazas">Amenazas</label>
          <textarea
            name="amenazas"
            id="amenazas"
            value={fodaData.amenazas}
            onChange={handleChange}
            placeholder="Ingrese las amenazas externas"
          />
        </div>

        <button type="submit" className="foda-button">
          Generar Gráfico FODA
        </button>
      </form>

      {showChart && <FodaChart data={fodaData} />}
    </div>
  );
}
