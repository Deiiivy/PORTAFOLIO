import { useState } from 'react';

const Terminal = ({ onCommand }) => {
  const [history, setHistory] = useState([
    'Ubuntu Terminal — escribe `help` para ver comandos disponibles.'
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    let response = '';
    switch (trimmed) {
      case 'help':
        response = 'Comandos disponibles:\nhelp\nwhoami\nprojects\ncontact\nclear';
        break;
      case 'whoami':
        response = 'deivy@ubuntu';
        break;
      case 'projects':
        onCommand('Proyectos');
        response = 'Abriendo proyectos...';
        break;
      case 'contact':
        onCommand('Contacto');
        response = 'Abriendo contacto...';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = `Comando no reconocido: ${trimmed}`;
    }

    setHistory((prev) => [...prev, `$ ${trimmed}`, response]);
    setInput('');
  };

  return (
    <div className="font-mono text-sm text-green-100 bg-black p-2 h-full overflow-auto rounded">
      <div className="mb-2 whitespace-pre-wrap">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <span className="text-green-500">$ </span>
        <input
          className="bg-black text-green-100 outline-none w-4/5"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
        />
      </form>
    </div>
  );
};

export default Terminal;
