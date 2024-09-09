import "../styles/Empresa.scss";
import { Link } from "react-router-dom";

export function Empresa() {
  return (
    <div className="empresa-container">
      <h1 className="empresa-titulo">LA EMPRESA</h1>

      <section className="empresa-seccion">
        <h2 className="empresa-subtitulo">NOMBRE DE LA EMPRESA</h2>
        <p>
          El nombre de una empresa es uno de los activos más valiosos que posee.
          Un nombre bien definido no solo debe identificar de manera clara y
          precisa la actividad principal del negocio, sino también reflejar su
          esencia y valores. Es crucial que el nombre sea sencillo de recordar,
          fácil de pronunciar y que logre transmitir una imagen positiva en la
          mente de los clientes y stakeholders.
        </p>
        <p>
          <strong>Tips:</strong> Para lograr un nombre efectivo, es recomendable
          optar por un nombre corto y distintivo, evitando términos genéricos o
          complicados que puedan dificultar su memorización. Considera también
          su disponibilidad en dominios web y su adaptabilidad en diferentes
          idiomas si planeas una expansión internacional.
        </p>
        <p>
          <strong>Registro de Marca y Nombre:</strong> Registrar el nombre y la
          marca de la empresa es un paso fundamental para proteger la identidad
          corporativa y evitar posibles conflictos legales en el futuro. Se
          recomienda realizar este proceso ante el Instituto Nacional de
          Propiedad Industrial (INPI), lo que permitirá a la empresa tener
          derechos exclusivos sobre el uso de su nombre y marca en todo el
          territorio nacional.
        </p>
      </section>

      <section className="empresa-seccion">
        <h2 className="empresa-subtitulo">PRESENTACION DE LA EMPRESA</h2>
        <p>
          La presentación de la empresa debe incluir una descripción detallada
          del tipo de entidad que es, como una Micro, Pequeña o Mediana Empresa
          (MiPyME), así como su estructura societaria, ya sea como una Sociedad
          Anónima (S.A.), Sociedad de Responsabilidad Limitada (S.R.L.) u otra.
          Esta información no solo es esencial para identificar la naturaleza
          legal de la empresa, sino también para entender el marco regulatorio y
          fiscal al que está sujeta.
        </p>
        <p>
          Además, es importante narrar la historia de la empresa, desde su
          fundación hasta su evolución en el tiempo. Este relato debe destacar
          los hitos clave, como expansiones, diversificaciones de productos o
          servicios, y la adaptación a cambios en el mercado. La presentación
          también debe incluir una visión clara de las actividades principales
          de la empresa y los sectores en los que opera actualmente,
          proporcionando una visión integral de su lugar en el mercado.
        </p>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">Estructura Organizacional</h3>
        <p>
          La estructura organizacional de una empresa define cómo se organizan
          sus funciones, departamentos y niveles jerárquicos. Es fundamental
          presentar un organigrama claro que muestre la distribución de roles y
          responsabilidades dentro de la organización, desde la alta dirección
          hasta los niveles operativos. Este organigrama no solo facilita la
          comprensión del flujo de trabajo y la toma de decisiones, sino que
          también refuerza la transparencia y la eficiencia dentro de la
          empresa.
        </p>
      </section>

      <section className="empresa-seccion">
        <Link to="/logo-empresa" className="empresa-enlace">
          <h3 className="empresa-subsubtitulo">Logotipo de la Empresa</h3>
        </Link>

        <p>
          El logotipo es la representación gráfica de la identidad corporativa
          de la empresa. Un buen logotipo debe ser simple, memorable, y
          representar fielmente los valores y la misión de la empresa. Es
          recomendable que el logotipo sea utilizado de manera consistente en
          todos los medios y materiales de comunicación, desde la papelería
          corporativa hasta el sitio web y las redes sociales, para fortalecer
          la imagen de marca y lograr un mayor reconocimiento en el mercado.
        </p>
      </section>
    </div>
  );
}
