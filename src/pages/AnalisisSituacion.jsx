import "../styles/AnalisisSituacion.scss";

export function AnalisisSituacion() {
  return (
    <div className="empresa-container">
      <h1 className="empresa-titulo">Análisis de la Situación</h1>

      <section className="empresa-seccion">
        <h2 className="empresa-subtitulo">Análisis de la Situación Externa</h2>
        <p>
          El análisis de la situación externa es un proceso fundamental que
          permite a las empresas comprender el entorno en el que operan. Este
          análisis abarca tanto el entorno general como el específico,
          proporcionando una visión completa de las fuerzas y tendencias
          externas que pueden influir en la empresa.
        </p>
        <p>
          El entorno general incluye factores como la economía, la política, la
          legislación, la tecnología, la sociedad y el medio ambiente. Estos
          factores, a menudo denominados PESTEL (Político, Económico, Social,
          Tecnológico, Ecológico y Legal), pueden tener un impacto significativo
          en la empresa, afectando desde las operaciones diarias hasta las
          estrategias a largo plazo.
        </p>
        <p>
          Por otro lado, el entorno específico se refiere a los elementos que
          afectan directamente a la empresa, como los competidores, proveedores,
          clientes y el mercado en general. El análisis de la competencia es
          especialmente crucial, ya que permite identificar las amenazas y
          oportunidades en el mercado, así como las posibles ventajas
          competitivas que la empresa puede explotar.
        </p>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">Análisis del Entorno General</h3>
        <p>
          El análisis del entorno general se centra en evaluar las macrofuerzas
          que pueden impactar a la empresa en su conjunto. Estas fuerzas no
          pueden ser controladas por la empresa, pero su identificación y
          monitoreo permiten anticipar cambios y adaptar las estrategias
          empresariales en consecuencia.
        </p>
        <p>Entre los factores más importantes a analizar se encuentran:</p>
        <ul>
          <li>
            <strong>Factores Políticos:</strong> Incluyen la estabilidad
            política, las políticas gubernamentales, la regulación y las
            relaciones internacionales que podrían afectar la operación de la
            empresa.
          </li>
          <li>
            <strong>Factores Económicos:</strong> Incluyen el crecimiento
            económico, las tasas de interés, la inflación, el desempleo y otros
            indicadores económicos que pueden influir en la demanda de los
            productos o servicios de la empresa.
          </li>
          <li>
            <strong>Factores Sociales:</strong> Se refieren a los cambios
            demográficos, las tendencias culturales y las actitudes sociales que
            podrían impactar en la forma en que los consumidores perciben los
            productos y servicios de la empresa.
          </li>
          <li>
            <strong>Factores Tecnológicos:</strong> Involucran la innovación
            tecnológica, las tendencias en investigación y desarrollo, y la
            velocidad de la adopción tecnológica que pueden ofrecer nuevas
            oportunidades o amenazar las ventajas competitivas existentes.
          </li>
          <li>
            <strong>Factores Ecológicos:</strong> Consideran la sostenibilidad,
            las políticas ambientales y los cambios climáticos que podrían
            afectar la operación de la empresa o sus productos.
          </li>
          <li>
            <strong>Factores Legales:</strong> Incluyen las leyes y
            regulaciones, como la protección del consumidor, la legislación
            laboral y las políticas de competencia que afectan la forma en que
            la empresa opera.
          </li>
        </ul>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">
          Análisis del Entorno Específico
        </h3>
        <p>
          El análisis del entorno específico se enfoca en los actores y fuerzas
          que tienen un impacto directo en la empresa. Comprender el entorno
          específico es esencial para identificar las oportunidades y amenazas
          más inmediatas.
        </p>
        <p>Los principales componentes del entorno específico incluyen:</p>
        <ul>
          <li>
            <strong>Competidores:</strong> Es crucial analizar la competencia
            para identificar las fortalezas y debilidades de los rivales, así
            como las posibles oportunidades de diferenciación y mejora
            competitiva.
          </li>
          <li>
            <strong>Proveedores:</strong> Evaluar la relación con los
            proveedores y la cadena de suministro permite identificar posibles
            riesgos de interrupción, así como oportunidades para negociar
            mejores condiciones.
          </li>
          <li>
            <strong>Clientes:</strong> Comprender las necesidades, expectativas
            y comportamientos de los clientes es fundamental para adaptar los
            productos y servicios a la demanda del mercado.
          </li>
          <li>
            <strong>Mercado:</strong> Analizar las tendencias del mercado, como
            el tamaño del mercado, el crecimiento, y las segmentaciones,
            proporciona una visión clara de dónde se encuentran las mejores
            oportunidades de negocio.
          </li>
        </ul>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">Análisis Interno</h3>
        <p>
          El análisis interno se centra en evaluar los recursos y capacidades de
          la empresa para identificar sus fortalezas y debilidades. Este
          análisis es esencial para entender cómo la empresa puede aprovechar
          sus recursos para capitalizar oportunidades externas y mitigar
          amenazas.
        </p>
        <p>
          Los principales aspectos a considerar en el análisis interno incluyen:
        </p>
        <ul>
          <li>
            <strong>Recursos Financieros:</strong> Evaluar la solidez financiera
            de la empresa, incluyendo la liquidez, el acceso al capital, y la
            estructura de costos.
          </li>
          <li>
            <strong>Recursos Humanos:</strong> Analizar la fuerza laboral de la
            empresa, incluyendo su formación, experiencia, motivación, y
            capacidad de adaptación al cambio.
          </li>
          <li>
            <strong>Recursos Tecnológicos:</strong> Considerar la
            infraestructura tecnológica, las capacidades de innovación, y las
            herramientas tecnológicas que la empresa posee.
          </li>
          <li>
            <strong>Recursos Organizacionales:</strong> Revisar la estructura
            organizacional, los procesos internos, y la cultura corporativa que
            sostiene el desempeño de la empresa.
          </li>
          <li>
            <strong>Recursos de Marca:</strong> Evaluar la fuerza y el
            reconocimiento de la marca, la lealtad del cliente, y el
            posicionamiento en el mercado.
          </li>
        </ul>
      </section>
    </div>
  );
}
