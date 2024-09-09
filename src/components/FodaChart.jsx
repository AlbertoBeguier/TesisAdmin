import PropTypes from "prop-types";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import "../styles/FodaChart.scss";

// Registrar los componentes necesarios en ChartJS
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export function FodaChart({ data }) {
  const labels = ["Fortalezas", "Oportunidades", "Debilidades", "Amenazas"];

  // Calcular el puntaje total de cada categoría
  const totalFortalezas = data.fortalezas.reduce(
    (acc, item) => acc + item.puntaje,
    0
  );
  const totalOportunidades = data.oportunidades.reduce(
    (acc, item) => acc + item.puntaje,
    0
  );
  const totalDebilidades = data.debilidades.reduce(
    (acc, item) => acc + item.puntaje,
    0
  );
  const totalAmenazas = data.amenazas.reduce(
    (acc, item) => acc + item.puntaje,
    0
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: "Análisis FODA",
        data: [
          totalFortalezas,
          totalOportunidades,
          totalDebilidades,
          totalAmenazas,
        ],
        backgroundColor: "rgba(0, 123, 255, 0.2)", // Azul más oscuro
        borderColor: "rgba(0, 123, 255, 1)", // Azul más fuerte
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        font: {
          size: 16, // Aumenta el tamaño de las etiquetas de los valores
        },
      },
      pointLabels: {
        font: {
          size: 22, // Aumenta el tamaño de las etiquetas de categorías
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#000000", // Cambia el color del título a negro
          font: {
            size: 20, // Aumenta el tamaño de las letras de la leyenda
          },
        },
      },
      tooltip: {
        bodyFont: {
          size: 18, // Aumenta el tamaño de las letras en el tooltip
        },
        titleFont: {
          size: 20, // Aumenta el tamaño del título en el tooltip
        },
      },
    },
  };

  return (
    <div className="foda-chart-container">
      {/* Mostrar los resultados del análisis FODA antes del gráfico */}
      <div className="foda-results">
        <hr className="linea-horizontal" />
        <h2 className="titulo-grafico">Resultados del Análisis FODA</h2>
        <br />
        <p className="texto-grafico">
          <strong className="texto-grafico">1. Fortalezas:</strong>{" "}
          {totalFortalezas}
        </p>
        <p className="texto-grafico">
          <strong className="texto-grafico">2. Oportunidades:</strong>{" "}
          {totalOportunidades}
        </p>
        <p className="texto-grafico">
          <strong className="texto-grafico">3. Debilidades:</strong>{" "}
          {totalDebilidades}
        </p>
        <p className="texto-grafico">
          <strong className="texto-grafico">4. Amenazas:</strong>{" "}
          {totalAmenazas}
        </p>
      </div>
      <hr className="linea-horizontal" />
      {/* Renderizar el gráfico de radar */}
      <Radar data={chartData} options={options} />
      <hr className="linea-horizontal" />
    </div>
  );
}

// Definir los propTypes para la validación
FodaChart.propTypes = {
  data: PropTypes.shape({
    fortalezas: PropTypes.arrayOf(
      PropTypes.shape({
        descripcion: PropTypes.string.isRequired,
        importancia: PropTypes.number.isRequired,
        impacto: PropTypes.number.isRequired,
        puntaje: PropTypes.number.isRequired,
      })
    ).isRequired,
    oportunidades: PropTypes.arrayOf(
      PropTypes.shape({
        descripcion: PropTypes.string.isRequired,
        importancia: PropTypes.number.isRequired,
        impacto: PropTypes.number.isRequired,
        puntaje: PropTypes.number.isRequired,
      })
    ).isRequired,
    debilidades: PropTypes.arrayOf(
      PropTypes.shape({
        descripcion: PropTypes.string.isRequired,
        importancia: PropTypes.number.isRequired,
        impacto: PropTypes.number.isRequired,
        puntaje: PropTypes.number.isRequired,
      })
    ).isRequired,
    amenazas: PropTypes.arrayOf(
      PropTypes.shape({
        descripcion: PropTypes.string.isRequired,
        importancia: PropTypes.number.isRequired,
        impacto: PropTypes.number.isRequired,
        puntaje: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
