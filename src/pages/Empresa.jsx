import { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleSaveCorrections = (section) => {
    setEditingSection({ ...editingSection, [section]: false });
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
          El nombre de una empresa es uno de los activos más valiosos que posee.
          Un nombre bien definido no solo debe identificar de manera clara y
          precisa la actividad principal del negocio, sino también reflejar su
          esencia y valores.
        </p>

        {editingSection.nombreEmpresa && (
          <div>
            <textarea
              className="text-tarea-correccion"
              type="text"
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
          La presentación de la empresa debe incluir una descripción detallada
          del tipo de entidad que es, como una Micro, Pequeña o Mediana Empresa
          (MiPyME), así como su estructura societaria.
        </p>

        {editingSection.presentacionEmpresa && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="presentacionEmpresa" // Aquí se agrega el name para el textarea
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
          La estructura organizacional de una empresa define cómo se organizan
          sus funciones, departamentos y niveles jerárquicos.
        </p>

        {editingSection.estructuraOrganizacional && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="estructuraOrganizacional" // Aquí se agrega el name para el textarea
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
        <Link to="/logo-empresa" className="empresa-enlace">
          <h3 className="empresa-subsubtitulo">Logotipo de la Empresa</h3>
        </Link>{" "}
        <img
          src="/imagenes/editar.png"
          alt="Editar"
          className="boton-editar"
          onClick={() => handleEditSection("logotipoEmpresa")}
        />
        <p>
          El logotipo es la representación gráfica de la identidad corporativa
          de la empresa.
        </p>
        {editingSection.logotipoEmpresa && (
          <div>
            <textarea
              className="text-tarea-correccion"
              name="logotipoEmpresa" // Aquí se agrega el name para el textarea
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
