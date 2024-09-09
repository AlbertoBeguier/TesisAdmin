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

  const chartData = {
    labels,
    datasets: [
      {
        label: "Análisis FODA",
        data: [
          data.fortalezas.length,
          data.oportunidades.length,
          data.debilidades.length,
          data.amenazas.length,
        ],
        backgroundColor: "rgba(34, 202, 236, .2)",
        borderColor: "rgba(34, 202, 236, 1)",
        borderWidth: 2,
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
      <Radar data={chartData} options={options} />
    </div>
  );
}

// Definir los propTypes para la validación
FodaChart.propTypes = {
  data: PropTypes.shape({
    fortalezas: PropTypes.string.isRequired,
    oportunidades: PropTypes.string.isRequired,
    debilidades: PropTypes.string.isRequired,
    amenazas: PropTypes.string.isRequired,
  }).isRequired,
};
