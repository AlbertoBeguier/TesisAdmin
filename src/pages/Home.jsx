import { Link } from "react-router-dom";
import "../styles/Home.scss";

export function Home() {
  return (
    <>
      <p className="home-titulo">ESTRUCTURA DEL PLAN DE NEGOCIOS</p>
      <p className="home-parrafo">
        La estructura inicial de una empresa es fundamental, ya que representa
        la esencia misma del negocio. En esta fase se presenta y describe de
        manera detallada la idea de negocio, es decir, el concepto que define la
        razón de ser de la empresa y la propuesta de valor que se ofrece al
        mercado. Además, se establecen los objetivos estratégicos que se
        pretenden alcanzar a corto, mediano y largo plazo. Estos objetivos deben
        ser claros, medibles y alineados con la visión y misión de la empresa,
        sirviendo como guía para la toma de decisiones y el desarrollo de las
        actividades empresariales. En resumen, esta primera estructura es la
        base sobre la cual se construirá y desarrollará la empresa, orientando
        su crecimiento y éxito futuro.
      </p>
      <ul>
        <li>
          <Link to="/empresa">
            <button className="empresa-button">La Empresa</button>
          </Link>
        </li>
        <li>
          <Link to="/analisis-estrategico">
            <button className="empresa-button">Análisis Estratégico</button>
          </Link>
        </li>
        <li>
          <Link to="/analisis-situacion">
            <button className="empresa-button">Análisis de la Situación</button>
          </Link>
        </li>
      </ul>
    </>
  );
}
