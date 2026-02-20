import { MOCK_CONFLICTS } from '../mockData';
import { AlertCircle, FileText, CheckCircle, XCircle, ShieldAlert } from 'lucide-react';

export default function DiscrepancyEngine() {
  return (
    <section className="p-8 border-b border-line">
      <h2 className="col-header mb-6">Discrepancy Engine</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_CONFLICTS.map(conflict => (
          <div key={conflict.id} className="bg-white border border-brand-teal/30 rounded-2xl p-8 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-teal" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-brand-teal/10 text-brand-teal">
                <ShieldAlert size={24} />
              </div>
              <div>
                <h3 className="font-display font-bold uppercase text-brand-blue tracking-wider leading-none">Conflict Card</h3>
                <p className="text-xs text-brand-muted mt-1.5 font-medium">{conflict.title}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="p-4 bg-bg rounded-xl border border-line">
                <span className="text-[9px] uppercase font-bold text-brand-muted tracking-widest">Report A</span>
                {conflict.urlA ? (
                  <a 
                    href={conflict.urlA} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-blue mt-2 leading-relaxed block hover:text-brand-teal transition-colors"
                  >
                    {conflict.reportA}
                  </a>
                ) : (
                  <p className="text-xs font-bold text-ink mt-2 leading-relaxed">{conflict.reportA}</p>
                )}
              </div>
              <div className="p-4 bg-bg rounded-xl border border-line">
                <span className="text-[9px] uppercase font-bold text-brand-muted tracking-widest">Report B</span>
                {conflict.urlB ? (
                  <a 
                    href={conflict.urlB} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-blue mt-2 leading-relaxed block hover:text-brand-teal transition-colors"
                  >
                    {conflict.reportB}
                  </a>
                ) : (
                  <p className="text-xs font-bold text-ink mt-2 leading-relaxed">{conflict.reportB}</p>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-8 p-3 bg-brand-teal/5 rounded-lg border border-brand-teal/10 text-[11px] font-bold uppercase text-brand-blue tracking-wide">
              <AlertCircle size={16} className="text-brand-teal" />
              {conflict.systemFlag}
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-line rounded-xl text-[10px] font-bold text-brand-blue uppercase tracking-wider hover:border-brand-blue hover:shadow-sm transition-all">
                <FileText size={14} className="text-brand-teal" />
                Open Image
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-line rounded-xl text-[10px] font-bold text-brand-blue uppercase tracking-wider hover:border-brand-blue hover:shadow-sm transition-all">
                <CheckCircle size={14} className="text-brand-teal" />
                Mark Active
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-line rounded-xl text-[10px] font-bold text-brand-blue uppercase tracking-wider hover:border-brand-blue hover:shadow-sm transition-all">
                <XCircle size={14} className="text-rose-500" />
                Mark Released
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue text-white rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-brand-blue/90 shadow-md transition-all">
                Escalate
              </button>
            </div>
          </div>
        ))}
        
        <div className="bg-bg/50 border-2 border-dashed border-line rounded-2xl flex flex-col items-center justify-center p-12 opacity-60">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-4">
            <CheckCircle size={24} className="text-brand-teal" />
          </div>
          <p className="text-[10px] font-display font-bold uppercase text-brand-muted tracking-[0.2em]">No Other Conflicts Detected</p>
        </div>
      </div>
    </section>
  );
}
