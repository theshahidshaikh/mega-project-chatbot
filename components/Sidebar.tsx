import React from 'react';
import { Server, Database, X, ShieldCheck, Activity } from 'lucide-react';
import { BREED_DB } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <div className={`
        fixed md:relative z-30
        w-72 h-full bg-slate-900 text-slate-100 flex flex-col shadow-xl transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Header */}
        <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-950">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
              <Server size={20} className="text-white" />
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-white">Bharat BreedBot</h1>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest">Enterprise Module</span>
            </div>
          </div>
          <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        {/* Status Card */}
        <div className="p-4 bg-slate-900">
          <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="relative">
                   <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                   <div className="absolute top-0 left-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-xs font-semibold text-green-400">SYSTEM ONLINE</span>
              </div>
              <Activity size={14} className="text-slate-500" />
            </div>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex justify-between"><span>Connection:</span> <span className="text-white">Secure (TLS)</span></p>
              <p className="flex justify-between"><span>Latency:</span> <span className="text-white">24ms</span></p>
              <p className="flex justify-between"><span>Records:</span> <span className="text-white">{BREED_DB.length} Items</span></p>
            </div>
          </div>
        </div>

        {/* Database Content List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4">
          <div className="flex items-center gap-2 mb-3 mt-2">
            <Database size={14} className="text-indigo-400" />
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internal Registry</h2>
          </div>
          
          <div className="space-y-2">
            {BREED_DB.map((breed) => (
              <div key={breed.id} className="group bg-slate-800/40 hover:bg-slate-800 rounded-lg p-3 border border-slate-700/50 hover:border-indigo-500/50 transition-all cursor-default">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-slate-200 group-hover:text-white">{breed.name}</h3>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-400 mt-1 inline-block border border-slate-600">
                      {breed.category}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400"></div>
                </div>
                <p className="text-[10px] text-slate-500 mt-2 line-clamp-1">
                  {breed.origin}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck size={14} />
            <span className="text-[10px]">Restricted Access: Internal Use Only</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;