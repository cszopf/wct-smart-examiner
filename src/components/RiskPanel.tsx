import { MOCK_RISK_SCORES, MOCK_ASSERTIONS } from '../mockData';
import { RiskLevel } from '../types';
import { ShieldAlert, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

export default function RiskPanel() {
  const getLevelColor = (level: RiskLevel) => {
    switch (level) {
      case 'Green': return 'bg-brand-teal';
      case 'Yellow': return 'bg-amber-400';
      case 'Red': return 'bg-rose-500';
      default: return 'bg-brand-muted';
    }
  };

  const getLevelText = (level: RiskLevel) => {
    switch (level) {
      case 'Green': return 'text-brand-teal';
      case 'Yellow': return 'text-amber-600';
      case 'Red': return 'text-rose-600';
      default: return 'text-brand-muted';
    }
  };

  return (
    <section className="p-8 border-b border-line bg-white/50">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="col-header mb-1">Risk Classification</h2>
          <p className="text-xs text-brand-muted font-medium">Systemic risk assessment based on validated assertions</p>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-xl">
          <div className="flex flex-col items-end text-right">
            <span className="text-[9px] uppercase font-bold text-brand-muted tracking-widest leading-none">Global Risk Index</span>
            <span className="text-lg font-display font-bold text-brand-blue leading-none mt-1">LOW</span>
          </div>
          <div className="w-px h-8 bg-brand-blue/20" />
          <div className="w-10 h-10 rounded-full border-4 border-brand-teal flex items-center justify-center">
            <span className="text-[10px] font-bold text-brand-blue">08</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {MOCK_RISK_SCORES.map(risk => {
          const relatedAssertions = MOCK_ASSERTIONS.filter(a => risk.assertions.includes(a.id));
          const validatedCount = relatedAssertions.filter(a => a.status === 'Validated').length;
          const actionCount = relatedAssertions.filter(a => a.status === 'Action Required').length;
          const totalCount = relatedAssertions.length;
          
          return (
            <div key={risk.category} className="bg-white border border-line p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/30 transition-all cursor-pointer group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1 ${getLevelColor(risk.level)} opacity-50`} />
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-brand-muted uppercase tracking-widest leading-tight">{risk.category}</span>
                <div className={`w-2 h-2 rounded-full ${getLevelColor(risk.level)} shadow-sm`} />
              </div>

              <div className="space-y-4">
                <div className="flex items-end justify-between">
                  <span className={`text-xl font-display font-bold ${getLevelText(risk.level)}`}>
                    {risk.level.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-brand-blue">
                    {totalCount} TOTAL
                  </span>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[9px] font-bold uppercase tracking-tighter">
                    <span className="text-brand-teal">Validated: {validatedCount}</span>
                    <span className="text-amber-600">Action: {actionCount}</span>
                  </div>
                  <div className="h-1.5 w-full bg-bg rounded-full overflow-hidden flex">
                    <div 
                      className="h-full bg-brand-teal transition-all duration-500" 
                      style={{ width: `${totalCount > 0 ? (validatedCount / totalCount) * 100 : 0}%` }} 
                    />
                    <div 
                      className="h-full bg-amber-400 transition-all duration-500" 
                      style={{ width: `${totalCount > 0 ? (actionCount / totalCount) * 100 : 0}%` }} 
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-line flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold uppercase text-brand-blue">View Assertions</span>
                <Info size={12} className="text-brand-teal" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-brand-blue/5 border border-dashed border-brand-blue/20 rounded-2xl flex items-center gap-4">
        <div className="p-2 bg-white rounded-lg shadow-sm text-brand-blue">
          <ShieldAlert size={18} />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase text-brand-blue tracking-widest mb-0.5">Systemic Risk Alert</p>
          <p className="text-xs text-brand-muted font-medium leading-relaxed">
            Lien Risk is elevated due to an <span className="text-rose-600 font-bold">Unsatisfied Judgment</span> and an <span className="text-brand-blue font-bold">Active Mortgage</span>. Manual reconciliation required for Case 08 JG 041274.
          </p>
        </div>
        <button className="px-4 py-2 bg-white border border-brand-blue/20 rounded-xl text-[10px] font-bold text-brand-blue uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all">
          Run Analysis
        </button>
      </div>
    </section>
  );
}
