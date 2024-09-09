import { useState } from "react";
import { FodaChart } from "./FodaChart";
import "../styles/FodaForm.scss";

export function FodaForm() {
  const [fodaData, setFodaData] = useState({
    fortalezas: [],
    oportunidades: [],
    debilidades: [],
    amenazas: [],
  });

  const [showChart, setShowChart] = useState(false);

  const handleChange = (e, section, index) => {
    const { name, value } = e.target;
    const updatedSection = [...fodaData[section]];
    updatedSection[index][name] = value;
    setFodaData({ ...fodaData, [section]: updatedSection });
  };

  const handleAddFactor = (section) => {
    setFodaData({
      ...fodaData,
      [section]: [
        ...fodaData[section],
        { descripcion: "", importancia: "", impacto: "", puntaje: "" },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calculatedData = {
      ...fodaData,
      fortalezas: fodaData.fortalezas.map((item) => ({
        ...item,
        puntaje: item.importancia * item.impacto,
      })),
      oportunidades: fodaData.oportunidades.map((item) => ({
        ...item,
        puntaje: item.importancia * item.impacto,
      })),
      debilidades: fodaData.debilidades.map((item) => ({
        ...item,
        puntaje: item.importancia * item.impacto,
      })),
      amenazas: fodaData.amenazas.map((item) => ({
        ...item,
        puntaje: item.importancia * item.impacto,
      })),
    };
    setFodaData(calculatedData);
    setShowChart(true);
  };

  return (
    <div className="foda-container">
      <h1 className="foda-titulo">Análisis FODA Cuantitativo</h1>
      <form className="foda-form" onSubmit={handleSubmit}>
        {["fortalezas", "oportunidades", "debilidades", "amenazas"].map(
          (section) => (
            <div className="foda-seccion" key={section}>
              {/* Título de la sección entre inputs y el botón */}
              <h2 className="titulo-opor-amen">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </h2>
              {fodaData[section].map((item, index) => (
                <div key={index} className="foda-item">
                  {/* Fila de inputs */}
                  <div className="foda-input-row">
                    <input
                      className="input-descripcion"
                      type="text"
                      name="descripcion"
                      value={item.descripcion}
                      onChange={(e) => handleChange(e, section, index)}
                      placeholder={`Descripción de la ${section.slice(0, -1)}`}
                    />
                    <input
                      className="input-small"
                      type="number"
                      name="importancia"
                      value={item.importancia}
                      min="1"
                      max="5"
                      onChange={(e) => handleChange(e, section, index)}
                      placeholder="Importancia"
                    />
                    <input
                      className="input-small"
                      type="number"
                      name="impacto"
                      value={item.impacto}
                      min="1"
                      max="5"
                      onChange={(e) => handleChange(e, section, index)}
                      placeholder="Impacto"
                    />
                  </div>
                  <p className="puntaje">
                    Puntaje: {item.importancia * item.impacto}
                  </p>
                </div>
              ))}
              {/* Botón de agregar al final de los inputs */}
              <button
                className="boton-agregar"
                type="button"
                onClick={() => handleAddFactor(section)}
              >
                Agregar {section.slice(0, 15)}
              </button>
            </div>
          )
        )}
        <button type="submit" className="foda-button">
          Generar Gráfico FODA
        </button>
        <br />
      </form>

      {showChart && <FodaChart data={fodaData} />}
    </div>
  );
}
