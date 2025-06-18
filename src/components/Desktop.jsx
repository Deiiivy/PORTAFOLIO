import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';
import Window from './Window.jsx';
import ProjectCard from './ProjectCard.jsx';
import Terminal from './Terminal.jsx';

import { FaDatabase } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';


import {
    SiNodedotjs,
    SiExpress,
    SiReact,
    SiJavascript,
    SiCplusplus,
    SiMongodb,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiLinux,
    SiGit,
    SiHtml5,
    SiCss3,
    SiAstro,
    SiSass,
    SiTailwindcss
  } from 'react-icons/si';
  

const Desktop = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [windowPositions, setWindowPositions] = useState({});
  const [wallpaper, setWallpaper] = useState('/wallpaper3.png');

  useEffect(() => {
    const savedWallpaper = localStorage.getItem('wallpaper');
    if (savedWallpaper) {
      setWallpaper(savedWallpaper);
    }
  }, []);

  const generateRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 300)}px`,
    left: `${Math.floor(Math.random() * 500)}px`,
  });

  const handleOpen = (name) => {
    if (!openWindows.includes(name)) {
      setOpenWindows((prev) => [...prev, name]);
      setWindowPositions((prev) => ({
        ...prev,
        [name]: generateRandomPosition(),
      }));
    }
  };

  const handleClose = (name) => {
    setOpenWindows((prev) => prev.filter((win) => win !== name));
    setWindowPositions((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  };

  const handleWallpaperChange = (path) => {
    setWallpaper(path);
    localStorage.setItem('wallpaper', path);
  };

  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('${wallpaper}')` }}
    >
      <Header />
      <Sidebar onIconClick={handleOpen} />

      <main className="absolute inset-0 pt-10 pl-14 overflow-visible">
        {openWindows.includes('Terminal') && (
          <Window
            title="Terminal"
            onClose={() => handleClose('Terminal')}
            position={windowPositions['Terminal']}
            theme="dark"
          >
            <Terminal onCommand={(cmd) => handleOpen(cmd)} />
          </Window>
        )}

        {openWindows.includes('Proyectos') && (
          <Window
            title="Proyectos"
            onClose={() => handleClose('Proyectos')}
            position={windowPositions['Proyectos']}
            theme="blue"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <ProjectCard
                title="CHAT APP"
                description="Proyecto de chat en tiempo real con la pila MERN. Registro, login y chat funcional."
                github="https://github.com/Deiiivy/mern-app-chat"
                demo="https://66115d5846501df34039b791--grand-sherbet-ffc3b4.netlify.app"
                image="/chat.webp"
              />
              <ProjectCard
                title="Éxito CLON"
                description="Clon de la app web Éxito, con simulación de compras en línea."
                github="https://github.com/Deiiivy/Exito-CLON"
                demo="https://65e29c84f6822d60dc3fb45d--lucky-pixie-af7ff2.netlify.app/"
                image="/exito.webp"
              />
            </div>
          </Window>
        )}

        {openWindows.includes('Sobre mí') && (
          <Window
            title="Sobre mí"
            onClose={() => handleClose('Sobre mí')}
            position={windowPositions['Sobre mí']}
            theme="green"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <img
                src="/yo.jpg"
                alt="Deivy"
                className="w-32 h-32 object-cover rounded-full border-4 border-green-500"
              />
              <div className="text-sm text-justify space-y-2">
                <p>Soy una persona responsable, colaboradora y con gran capacidad para trabajar en equipo. Mi formación en desarrollo de software me ha permitido adquirir habilidades técnicas y metodológicas, tanto en entornos académicos como en experiencias laborales y de mentoría.</p>
                <p>Tengo experiencia en atención al cliente y análisis de procesos, gracias a mi rol como Analista en SURA, donde gestioné y resolví incidencias con bases de datos y aplicativos internos. Además, he desarrollado habilidades de enseñanza y comunicación mediante mentorías en programación para estudiantes de la EATFIT y la Universidad de Antioquia.</p>
                <p>Actualmente curso el cuarto semestre de Ingeniería de Software en el Pascual Bravo (jornada nocturna), lo que me permite disponibilidad laboral durante el día. Me caracterizo por ser autodidacta, con una fuerte motivación por aprender y adaptarme a nuevos desafíos. Busco oportunidades donde pueda aportar, crecer y aprender continuamente.</p>
              </div>
            </div>
          </Window>
        )}

{openWindows.includes('Contacto') && (
  <Window
    title="Contacto"
    onClose={() => handleClose('Contacto')}
    position={windowPositions['Contacto']}
    theme="yellow"
  >
    <form
      className="flex flex-col gap-3 text-sm"
      action="https://formsubmit.co/deivypr28@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_captcha" value="false" />
      <label>
        Nombre:
        <input
          type="text"
          name="name"
          required
          className="w-full border rounded px-2 py-1"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          required
          className="w-full border rounded px-2 py-1"
        />
      </label>
      <label>
        Mensaje:
        <textarea
          name="message"
          rows="4"
          required
          className="w-full border rounded px-2 py-1"
        ></textarea>
      </label>
      <button
        type="submit"
        className="bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
      >
        Enviar
      </button>
    </form>
  </Window>
)}

        {openWindows.includes('Archivos') && (
          <Window
            title="Archivos"
            onClose={() => handleClose('Archivos')}
            position={windowPositions['Archivos']}
            theme="purple"
          >
            <div className="text-sm">
              <p className="mb-2">Haz clic para abrir o descargar:</p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="/HojaDeVida.pdf"
                  target="_blank"
                  className="flex flex-col items-center hover:scale-105 transition"
                >
                  <img src="/icons/pdf.webp" alt="CV" className="w-12 h-12" />
                  <span className="mt-1">CV</span>
                </a>
              </div>
            </div>
          </Window>
        )}

{openWindows.includes('Habilidades') && (
  <Window
    title="Habilidades"
    onClose={() => handleClose('Habilidades')}
    position={windowPositions['Habilidades']}
    theme="teal"
  >
    <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {[
        { icon: SiNodedotjs, label: 'Node.js' },
        { icon: SiExpress, label: 'Express.js' },
        { icon: SiReact, label: 'React' },
        { icon: SiJavascript, label: 'JavaScript' },
        { icon: SiCplusplus, label: 'C++' },
        { icon: TbBrandCSharp, label: 'C#' },
        { icon: SiMongodb, label: 'MongoDB' },
        { icon: SiMysql, label: 'MySQL' },
        { icon: FaDatabase, label: 'SQL Server' },
        { icon: SiPostgresql, label: 'PostgreSQL' },
        { icon: SiDocker, label: 'Docker' },
        { icon: SiLinux, label: 'Linux' },
        { icon: SiGit, label: 'Git' },
        { icon: SiHtml5, label: 'HTML' },
        { icon: SiCss3, label: 'CSS' },
        { icon: SiAstro, label: 'Astro' },
        { icon: SiSass, label: 'Sass' },
        { icon: SiTailwindcss, label: 'Tailwind' },
      ].map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center justify-center gap-1 bg-white rounded-lg shadow p-3 hover:scale-105 transition text-sm">
          <Icon className="text-4xl text-teal-600" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  </Window>
)}



        {openWindows.includes('Configuración') && (
          <Window
            title="Configuración"
            onClose={() => handleClose('Configuración')}
            position={windowPositions['Configuración']}
            theme="gray"
          >
            <p className="text-sm mb-2">Selecciona tu fondo de escritorio:</p>
            <div className="flex gap-4">
              <img
                src="/wallpaper1.webp"
                alt="Fondo 1"
                className="w-32 h-20 object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => handleWallpaperChange('/wallpaper1.webp')}
              />
              <img
                src="/wallpaper2.webp"
                alt="Fondo 2"
                className="w-32 h-20 object-cover cursor-pointer hover:scale-105 transition"
                onClick={() => handleWallpaperChange('/wallpaper2.webp')}
              />
            </div>
          </Window>
        )}
      </main>
    </div>
  );
};

export default Desktop;
