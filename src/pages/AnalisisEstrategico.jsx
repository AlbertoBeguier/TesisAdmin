import { Link } from "react-router-dom";
import "../styles/AnalisisEstrategico.scss";

export function AnalisisEstrategico() {
  return (
    <div className="empresa-container">
      <h1 className="empresa-titulo">Análisis Estratégico</h1>

      <section className="empresa-seccion">
        <h2 className="empresa-subtitulo">Filosofía Empresarial</h2>
        <p>
          La filosofía empresarial es el marco de referencia que define la
          esencia y los valores fundamentales de una organización. Es el
          cimiento sobre el cual se construyen todas las decisiones estratégicas
          y operativas. La filosofía empresarial abarca la misión, visión y
          valores de la empresa, y establece el tono para la cultura
          organizacional. Una filosofía empresarial sólida no solo guía el
          comportamiento interno, sino que también moldea la percepción externa
          de la empresa entre clientes, proveedores y la comunidad en general.
        </p>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">Misión</h3>
        <p>
          La misión de una empresa es una declaración clara y concisa que
          describe su propósito fundamental, es decir, la razón por la cual la
          empresa existe. Esta declaración debe reflejar lo que la empresa hace,
          para quién lo hace, y cómo lo hace. Una misión bien definida sirve
          como una brújula estratégica que guía todas las decisiones
          empresariales, desde la planificación hasta la ejecución de
          actividades diarias.
        </p>
        <p>
          Además, la misión debe estar alineada con los objetivos a largo plazo
          de la empresa y con las expectativas de sus principales stakeholders,
          incluidos empleados, clientes, accionistas y la comunidad en general.
          La misión debe ser revisada periódicamente para asegurarse de que
          sigue siendo relevante y que refleja con precisión la evolución de la
          empresa y del entorno en el que opera.
        </p>
        <p>
          Ejemplos de preguntas clave que una misión debe responder incluyen:
          ¿Qué ofrecemos al mercado? ¿Quiénes son nuestros clientes principales?
          ¿Cuál es nuestro valor diferencial? Estas preguntas ayudan a enfocar
          los esfuerzos de la empresa en la creación de valor sostenible.
        </p>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">Visión</h3>
        <p>
          La visión de una empresa es una declaración aspiracional que proyecta
          lo que la organización espera lograr en un horizonte de tiempo
          definido. La visión debe ser ambiciosa, inspiradora y motivadora,
          estableciendo una meta clara que impulse a la organización hacia el
          futuro. Esta declaración no solo debe reflejar la aspiración de
          crecimiento de la empresa, sino también su compromiso con la
          innovación, la sostenibilidad y la responsabilidad social.
        </p>
        <p>
          Una visión efectiva actúa como una estrella polar, orientando todas
          las decisiones estratégicas y operativas de la empresa. Además, debe
          ser suficientemente flexible para adaptarse a los cambios en el
          mercado y en el entorno competitivo, pero lo suficientemente estable
          para proporcionar continuidad en la dirección estratégica.
        </p>
        <p>
          La visión debe ser comunicada de manera efectiva a todos los niveles
          de la organización y a los principales stakeholders para asegurar que
          todos estén alineados y comprometidos con los objetivos a largo plazo
          de la empresa.
        </p>
      </section>

      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">Valores</h3>
        <p>
          Los valores corporativos son los principios éticos y morales que guían
          el comportamiento de la empresa y sus empleados en todas las áreas de
          operación. Estos valores crean una base para la cultura
          organizacional, influyendo en cómo se toman las decisiones, cómo se
          tratan a los empleados y clientes, y cómo se representa la empresa en
          la comunidad.
        </p>
        <p>
          Definir y comunicar claramente los valores de la empresa es esencial
          para establecer un estándar de conducta que sea coherente con la
          misión y visión de la organización. Los valores corporativos deben ser
          integrados en todos los aspectos del negocio, desde la contratación de
          empleados hasta la relación con proveedores y clientes.
        </p>
        <p>
          Ejemplos de valores corporativos incluyen la integridad, la
          transparencia, la responsabilidad social, el respeto por el medio
          ambiente, la orientación al cliente, la innovación y la excelencia.
          Estos valores no solo guían el comportamiento dentro de la
          organización, sino que también fortalecen la reputación de la empresa
          y la confianza de los stakeholders.
        </p>
      </section>

      <section className="empresa-seccion">
        <Link to="/analisis-foda">
          <h3 className="empresa-subsubtitulo">Análisis FODA</h3>
        </Link>
        <p>
          El análisis FODA es una herramienta fundamental en la planificación
          estratégica de cualquier organización. Este análisis permite
          identificar las Fortalezas, Oportunidades, Debilidades y Amenazas que
          afectan a la empresa, proporcionando una visión integral de su
          situación actual y de su potencial futuro.
        </p>
        <p>
          Las Fortalezas son los recursos y capacidades internas que dan a la
          empresa una ventaja competitiva en el mercado. Las Oportunidades son
          las condiciones externas favorables que la empresa puede aprovechar
          para crecer o mejorar su posición. Por otro lado, las Debilidades son
          las áreas internas donde la empresa es vulnerable o tiene desventajas,
          y las Amenazas son los factores externos que podrían poner en riesgo
          su éxito.
        </p>
        <p>
          Un análisis FODA bien realizado permite a la empresa desarrollar
          estrategias que maximicen sus fortalezas y oportunidades, mientras
          mitigan las debilidades y amenazas. Este enfoque estratégico es
          esencial para tomar decisiones informadas y para diseñar planes de
          acción que conduzcan a un crecimiento sostenible y a la creación de
          valor a largo plazo.
        </p>
        <p>
          El análisis FODA debe ser revisado y actualizado regularmente para
          reflejar los cambios en el entorno interno y externo de la empresa,
          asegurando así que las estrategias se mantengan alineadas con las
          realidades actuales del negocio.
        </p>
      </section>
    </div>
  );
}
