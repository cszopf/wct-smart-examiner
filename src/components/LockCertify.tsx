import { Lock, FileCheck, History, Database, ArrowRight } from 'lucide-react';

export default function LockCertify() {
  return (
    <section className="p-12 bg-brand-blue text-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,78,168,0.15)]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-6 max-w-xl">
          <h2 className="text-[10px] font-display font-bold uppercase text-brand-light tracking-[0.3em]">Final Certification</h2>
          <p className="text-4xl font-display font-bold tracking-tighter uppercase leading-[0.9]">Ready to certify assertions and freeze data state.</p>
          <p className="text-sm text-brand-light/80 leading-relaxed font-medium">
            Locking the title file will perform a final gap search, validate timestamps, and capture a full audit log of all examiner decisions. This action is permanent.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <button className="flex items-center justify-center gap-4 px-10 py-5 bg-white text-brand-blue font-display font-bold uppercase tracking-widest rounded-2xl hover:bg-brand-light transition-all shadow-xl group">
            <Lock size={20} className="group-hover:scale-110 transition-transform" />
            Lock Title File
          </button>
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center p-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
              <History size={18} className="text-brand-light" />
              <span className="text-[8px] font-bold uppercase mt-2 tracking-widest">Audit Log</span>
            </div>
            <div className="flex flex-col items-center p-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
              <Database size={18} className="text-brand-light" />
              <span className="text-[8px] font-bold uppercase mt-2 tracking-widest">Freeze</span>
            </div>
            <div className="flex flex-col items-center p-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
              <FileCheck size={18} className="text-brand-light" />
              <span className="text-[8px] font-bold uppercase mt-2 tracking-widest">Gap Search</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="group cursor-pointer p-6 rounded-2xl hover:bg-white/5 transition-all">
          <span className="text-[9px] font-bold uppercase text-brand-light block mb-3 tracking-[0.2em]">Next Phase</span>
          <div className="flex items-center justify-between">
            <h4 className="font-display font-bold uppercase text-sm tracking-wider">Generate Commitment</h4>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-brand-teal" />
          </div>
        </div>
        <div className="group cursor-pointer p-6 rounded-2xl hover:bg-white/5 transition-all">
          <span className="text-[9px] font-bold uppercase text-brand-light block mb-3 tracking-[0.2em]">Next Phase</span>
          <div className="flex items-center justify-between">
            <h4 className="font-display font-bold uppercase text-sm tracking-wider">Consumer Final Review</h4>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-brand-teal" />
          </div>
        </div>
        <div className="group cursor-pointer p-6 rounded-2xl hover:bg-white/5 transition-all">
          <span className="text-[9px] font-bold uppercase text-brand-light block mb-3 tracking-[0.2em]">Next Phase</span>
          <div className="flex items-center justify-between">
            <h4 className="font-display font-bold uppercase text-sm tracking-wider">Policy Shell</h4>
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-brand-teal" />
          </div>
        </div>
      </div>
    </section>
  );
}
