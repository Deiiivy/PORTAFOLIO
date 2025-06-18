import React from 'react'

const Header = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-10 bg-zinc-900 text-white flex justify-between items-center px-4 z-50">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold">🟢 Ubuntu Dev</span>
        </div>
        <div className="text-sm">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    );
  };
  
  export default Header;
  