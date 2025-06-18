const Sidebar = ({ onIconClick }) => {
    const apps = [
      { name: 'Terminal', icon: '🖥️' },
      { name: 'Proyectos', icon: '📁' },
      { name: 'Sobre mí', icon: '🧑‍💻' },
      { name: 'Contacto', icon: '✉️' },
      { name: 'Archivos', icon: '🗂️' },
      { name: 'Habilidades', icon: '💼' },
      { name: 'Configuración', icon: '⚙️' },
    ];
  
    return (
      <div className="fixed top-10 left-0 h-[calc(100vh-2.5rem)] w-14 bg-zinc-800 flex flex-col items-center py-4 gap-4 z-40">
        {apps.map((app) => (
          <button
            key={app.name}
            onClick={() => onIconClick(app.name)}
            className="text-xl hover:bg-zinc-700 w-10 h-10 rounded flex items-center justify-center"
            title={app.name}
          >
            {app.icon}
          </button>
        ))}
      </div>
    );
  };
  
  export default Sidebar;
  
  