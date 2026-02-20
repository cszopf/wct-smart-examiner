import { MOCK_EXCEPTIONS } from '../mockData';
import { HelpCircle, Info, FileSearch } from 'lucide-react';

export default function ExceptionOptimizer() {
  return (
    <section className="p-8 border-b border-line">
      <h2 className="col-header mb-6">Exception Optimizer</h2>
      
      <div className="space-y-6">
        {MOCK_EXCEPTIONS.map(exception => (
          <div key={exception.id} className="bg-white border border-line rounded-2xl p-8 shadow-sm group hover:border-brand-blue/30 transition-all">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-blue/5 text-brand-blue">
                  <FileSearch size={20} />
                </div>
                {exception.url ? (
                  <a 
                    href={exception.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-display font-bold uppercase text-brand-blue text-sm tracking-wider hover:text-brand-teal transition-colors"
                  >
                    {exception.title}
                  </a>
                ) : (
                  <h3 className="font-display font-bold uppercase text-brand-blue text-sm tracking-wider">{exception.title}</h3>
                )}
              </div>
              <div className="flex items-center gap-2 text-[9px] bg-brand-blue text-white px-3 py-1.5 rounded-full uppercase font-bold tracking-widest shadow-sm">
                <Info size={12} />
                Schedule B Review
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase text-brand-muted flex items-center gap-2 tracking-widest">
                  Materially affect marketability?
                  <HelpCircle size={12} className="opacity-30" />
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 border border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">Yes</button>
                  <button className="flex-1 py-2.5 border border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">No</button>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase text-brand-muted flex items-center gap-2 tracking-widest">
                  Is it required by manual?
                  <HelpCircle size={12} className="opacity-30" />
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 border border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">Yes</button>
                  <button className="flex-1 py-2.5 border border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">No</button>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase text-brand-muted flex items-center gap-2 tracking-widest">
                  Is it generic boilerplate?
                  <HelpCircle size={12} className="opacity-30" />
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 py-2.5 border border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">Yes</button>
                  <button className="flex-1 py-2.5 border border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">No</button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 items-center border-t border-line pt-8">
              <span className="col-header text-brand-blue">Examiner Choice:</span>
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                <button className="px-6 py-3 border-2 border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">Include as full exception</button>
                <button className="px-6 py-3 border-2 border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">Summarize in plain English</button>
                <button className="px-6 py-3 border-2 border-line rounded-xl text-[10px] font-bold uppercase tracking-widest hover:border-brand-blue hover:text-brand-blue transition-all">Exclude per guideline</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
