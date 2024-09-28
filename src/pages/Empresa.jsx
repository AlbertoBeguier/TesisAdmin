import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { db } from "/src/main"; // Asegúrate de que esta ruta sea correcta
import "../styles/Empresa.scss";

export function Empresa() {
  const [corrections, setCorrections] = useState({
    nombreEmpresa: "",
    presentacionEmpresa: "",
    estructuraOrganizacional: "",
    logotipoEmpresa: "",
  });

  const [editingSection, setEditingSection] = useState({
    nombreEmpresa: false,
    presentacionEmpresa: false,
    estructuraOrganizacional: false,
    logotipoEmpresa: false,
  });

  useEffect(() => {
    const fetchCorrections = async () => {
      const docRef = doc(collection(db, "correcciones"), "empresa");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCorrections(docSnap.data());
      }
    };
    fetchCorrections();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCorrections({ ...corrections, [name]: value });
  };

  const handleEditSection = (section) => {
    setEditingSection({
      ...editingSection,
      [section]: !editingSection[section],
    });
  };

  const handleSaveCorrections = async (section) => {
    setEditingSection({ ...editingSection, [section]: false });
    const docRef = doc(collection(db, "correcciones"), "empresa");

    if (corrections[section] === "") {
      // Si el campo está vacío, eliminamos la corrección
      await updateDoc(docRef, {
        [section]: deleteField(),
      });
    } else {
      // Si hay contenido, actualizamos o añadimos la corrección
      await setDoc(
        docRef,
        { [section]: corrections[section] },
        { merge: true }
      );
    }
  };

  return (
    <div className="empresa-container">
      <h1 className="empresa-titulo">LA EMPRESA</h1>

      {/* Sección 1: NOMBRE DE LA EMPRESA */}
      <section className="empresa-seccion">
        <h2 className="empresa-subtitulo">
          NOMBRE DE LA EMPRESA
          <img
            src="/imagenes/editar.png"
            alt="Editar"
            className="boton-editar"
            onClick={() => handleEditSection("nombreEmpresa")}
          />
        </h2>
        <p>
          El nombre de una empresa es un activo clave dentro de su estrategia de
          marketing y posicionamiento en el mercado. Un nombre bien seleccionado
          tiene el poder de transmitir la misión, visión y valores corporativos,
          creando un vínculo emocional con los clientes y reflejando el
          propósito de la organización. Además, debe ser fácil de recordar,
          diferenciarse de la competencia y ser adaptable a mercados
          internacionales, considerando variaciones culturales y lingüísticas.
          En este sentido, el nombre de nuestra empresa ha sido cuidadosamente
          seleccionado para resonar con nuestra propuesta de valor y fortalecer
          nuestro posicionamiento dentro del sector.
        </p>

        {editingSection.nombreEmpresa && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="nombreEmpresa"
              value={corrections.nombreEmpresa}
              onChange={handleInputChange}
              placeholder="Corrección del nombre de la empresa"
            />
            <img
              src="/imagenes/disquete.png"
              alt="Guardar"
              className="boton-guardar"
              onClick={() => handleSaveCorrections("nombreEmpresa")}
            />
          </div>
        )}

        {corrections.nombreEmpresa && (
          <p className="correccion-texto">
            Corrección: {corrections.nombreEmpresa}
          </p>
        )}
      </section>

      {/* Sección 2: PRESENTACION DE LA EMPRESA */}
      <section className="empresa-seccion">
        <h2 className="empresa-subtitulo">
          PRESENTACIÓN DE LA EMPRESA
          <img
            src="/imagenes/editar.png"
            alt="Editar"
            className="boton-editar"
            onClick={() => handleEditSection("presentacionEmpresa")}
          />
        </h2>
        <p>
          La empresa [Nombre de la empresa] es una organización clasificada como
          Micro, Pequeña o Mediana Empresa (MiPyME), dedicada al sector [sector
          de la industria], especializada en [actividad principal o
          productos/servicios]. La empresa fue fundada en [año de fundación], y
          desde entonces ha experimentado un crecimiento sostenible basado en la
          innovación, calidad y un enfoque centrado en el cliente. Con una
          estructura societaria [tipo de sociedad: por ejemplo, sociedad anónima
          (S.A.), sociedad de responsabilidad limitada (S.R.L.), etc.], la
          empresa se destaca por su agilidad en la toma de decisiones y su
          capacidad de adaptación a las fluctuaciones del mercado. Nuestra
          misión es [definir misión], mientras que nuestra visión se enfoca en
          [definir visión]. Estos principios fundamentales guían todas nuestras
          estrategias y operaciones, con el objetivo de generar valor para
          nuestros clientes, empleados y accionistas.
        </p>

        {editingSection.presentacionEmpresa && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="presentacionEmpresa"
              value={corrections.presentacionEmpresa}
              onChange={handleInputChange}
              placeholder="Corrección de la presentación de la empresa"
            />
            <img
              src="/imagenes/disquete.png"
              alt="Guardar"
              className="boton-guardar"
              onClick={() => handleSaveCorrections("presentacionEmpresa")}
            />
          </div>
        )}

        {corrections.presentacionEmpresa && (
          <p className="correccion-texto">
            Corrección: {corrections.presentacionEmpresa}
          </p>
        )}
      </section>

      {/* Sección 3: ESTRUCTURA ORGANIZACIONAL */}
      <section className="empresa-seccion">
        <h3 className="empresa-subsubtitulo">
          Estructura Organizacional
          <img
            src="/imagenes/editar.png"
            alt="Editar"
            className="boton-editar"
            onClick={() => handleEditSection("estructuraOrganizacional")}
          />
        </h3>
        <p>
          La estructura organizacional de nuestra empresa ha sido diseñada para
          optimizar la eficiencia operativa y promover la colaboración
          interdepartamental. En nuestra jerarquía, la toma de decisiones se
          distribuye de manera tal que cada departamento tenga autonomía para
          operar dentro de su área de especialización, pero siempre alineado con
          los objetivos generales de la compañía. Nuestra empresa sigue un
          modelo organizacional [modelo: jerárquico, matricial, plano, etc.],
          que permite la flexibilidad en la asignación de recursos y la gestión
          de proyectos transversales. Los principales departamentos incluyen:
          Dirección General: Responsable de la estrategia corporativa y la toma
          de decisiones de alto nivel. Departamento de Finanzas: Encargado de la
          gestión financiera y el control de los recursos económicos.
          Departamento de Marketing y Ventas: Dedicado a la creación y ejecución
          de estrategias comerciales y de comunicación para atraer y retener
          clientes. Departamento de Operaciones: Focalizado en la gestión de la
          cadena de suministro, producción y logística, garantizando la
          eficiencia y calidad en cada etapa. Departamento de Recursos Humanos:
          Responsable de la selección, formación y bienestar del personal,
          alineando el capital humano con la cultura y objetivos de la empresa.
          La interconexión de estos departamentos es fundamental para garantizar
          el logro de los objetivos estratégicos de la empresa y adaptarse
          rápidamente a los cambios del entorno competitivo.
        </p>

        {editingSection.estructuraOrganizacional && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="estructuraOrganizacional"
              value={corrections.estructuraOrganizacional}
              onChange={handleInputChange}
              placeholder="Corrección de la estructura organizacional"
            />
            <img
              src="/imagenes/disquete.png"
              alt="Guardar"
              className="boton-guardar"
              onClick={() => handleSaveCorrections("estructuraOrganizacional")}
            />
          </div>
        )}

        {corrections.estructuraOrganizacional && (
          <p className="correccion-texto">
            Corrección: {corrections.estructuraOrganizacional}
          </p>
        )}
      </section>

      {/* Sección 4: LOGOTIPO DE LA EMPRESA */}
      <section className="empresa-seccion">
        <Link to="/logo-empresa" className="empresa-enlace empresa-button">
          Logotipo de la Empresa
        </Link>
        <img
          src="/imagenes/editar.png"
          alt="Editar"
          className="boton-editar"
          onClick={() => handleEditSection("logotipoEmpresa")}
        />
        <p>
          El logotipo de una empresa es uno de los pilares de su identidad
          visual, y actúa como un símbolo gráfico que representa los valores, el
          estilo y la personalidad corporativa. Nuestro logotipo ha sido
          cuidadosamente diseñado para reflejar los atributos clave de nuestra
          marca: [ejemplos: innovación, confianza, calidad, etc.]. El diseño del
          logotipo combina [explicar elementos: colores, formas, tipografía] que
          evocan [valores o emociones clave], asegurando una fácil
          identificación en el mercado y una conexión emocional con nuestros
          clientes. El uso consistente de este logotipo en toda nuestra
          comunicación empresarial refuerza nuestra presencia en el mercado y
          consolida nuestra imagen de marca.
        </p>
        {editingSection.logotipoEmpresa && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="logotipoEmpresa"
              value={corrections.logotipoEmpresa}
              onChange={handleInputChange}
              placeholder="Corrección del logotipo de la empresa"
            />
            <img
              src="/imagenes/disquete.png"
              alt="Guardar"
              className="boton-guardar"
              onClick={() => handleSaveCorrections("logotipoEmpresa")}
            />
          </div>
        )}
        {corrections.logotipoEmpresa && (
          <p className="correccion-texto">
            Corrección: {corrections.logotipoEmpresa}
          </p>
        )}
      </section>
    </div>
  );
}
