import { Rnd } from 'react-rnd';
import clsx from 'clsx';

const themeStyles = {
  dark: 'bg-zinc-800 text-white',
  blue: 'bg-blue-600 text-white',
  green: 'bg-green-600 text-white',
  yellow: 'bg-yellow-500 text-white',
  purple: 'bg-purple-600 text-white',
  gray: 'bg-gray-700 text-white',
  default: 'bg-zinc-900 text-white',
};

const Window = ({ title, children, onClose, position, theme = 'default' }) => {
  return (
    <Rnd
      default={{
        x: parseInt(position?.left || '150'),
        y: parseInt(position?.top || '100'),
        width: 500,
        height: 400,
      }}
      minWidth={300}
      minHeight={200}
      bounds="window"
      className="absolute bg-white shadow-xl rounded-xl overflow-hidden border border-zinc-300 z-50"
    >
  
      <div className={clsx("flex justify-between items-center px-3 py-2", themeStyles[theme])}>
        <span className="font-semibold">{title}</span>
        <button onClick={onClose} className="hover:text-red-300 text-lg leading-none">✖</button>
      </div>

   
      <div className="p-4 h-full overflow-auto bg-white text-black">
        {children}
      </div>
    </Rnd>
  );
};

export default Window;
