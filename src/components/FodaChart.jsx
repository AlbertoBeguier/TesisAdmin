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

  // Calcular la estrategia según el análisis FODA
  let estrategia = "";
  if (totalFortalezas + totalOportunidades > totalAmenazas + totalDebilidades) {
    estrategia =
      "ESTRATEGIA OFENSIVA (FO): Esta estrategia busca maximizar el crecimiento y expansión aprovechando las fortalezas internas y las oportunidades del entorno.";
  } else if (
    totalFortalezas + totalAmenazas >
    totalDebilidades + totalOportunidades
  ) {
    estrategia =
      "ESTRATEGIA DEFENSIVA (FA): Se enfoca en proteger a la organización de amenazas externas, utilizando sus fortalezas internas.";
  } else if (
    totalAmenazas + totalDebilidades >
    totalFortalezas + totalOportunidades
  ) {
    estrategia =
      "ESTRATEGIA DE SUPERVIVENCIA (DA): Busca minimizar las debilidades y evitar o mitigar las amenazas para proteger a la organización.";
  } else if (
    totalDebilidades + totalOportunidades >
    totalFortalezas + totalAmenazas
  ) {
    estrategia =
      "ESTRATEGIA DE REORIENTACIÓN (DO): Trata de aprovechar oportunidades externas para mejorar las debilidades internas.";
  }

  // Definir la parte final que siempre se mostrará en un párrafo separado
  const notaFinal =
    "En muchos casos, se debe seleccionar más de una estrategia para abordar diferentes aspectos de la situación empresarial. El análisis FODA no se limita a identificar una única estrategia, sino que proporciona un marco para desarrollar un conjunto de estrategias que, en conjunto, puedan abordar las fortalezas, debilidades, oportunidades y amenazas de manera integral.";

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
          color: "#000", // Cambia el color del título a negro
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
        <hr />
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

      {/* Renderizar el gráfico de radar */}
      <Radar data={chartData} options={options} />
      <hr className="linea-horizontal" />
      {/* Mostrar la estrategia debajo del gráfico */}
      <div className="foda-strategy">
        <h3 className="titulo-estrategia">ESTRATEGIA SEGÚN ANÁLISIS FODA</h3>
        <p className="texto-estrategia">{estrategia}</p>
      </div>
      <hr className="linea-horizontal" />
      {/* Mostrar la nota final en un párrafo separado */}
      <div className="foda-final-note">
        <p>{notaFinal}</p>
      </div>
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
