import { useState } from 'react';
import { MOCK_ASSERTIONS } from '../mockData';
import { Assertion } from '../types';
import { CheckCircle2, AlertTriangle, Clock, ChevronDown, ChevronUp, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AssertionsPanel() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Validated': return <CheckCircle2 size={16} className="text-brand-teal" />;
      case 'Action Required': return <AlertTriangle size={16} className="text-amber-500" />;
      case 'Pending': return <Clock size={16} className="text-brand-blue" />;
      default: return null;
    }
  };

  return (
    <section className="p-8 border-b border-line">
      <h2 className="col-header mb-6">Title Assertions</h2>
      
      <div className="bg-white border border-line rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-[60px_1.5fr_1fr_100px_140px_60px] p-5 border-b border-line bg-bg/50">
          <span className="col-header">#</span>
          <span className="col-header">Assertion</span>
          <span className="col-header">Primary Source</span>
          <span className="col-header">Confidence</span>
          <span className="col-header">Status</span>
          <span></span>
        </div>
        
        {MOCK_ASSERTIONS.map((assertion, index) => (
          <div key={assertion.id} className="border-b border-line last:border-0">
            <div 
              className="grid grid-cols-[60px_1.5fr_1fr_100px_140px_60px] p-5 items-center hover:bg-brand-blue/[0.02] cursor-pointer transition-colors"
              onClick={() => setExpandedId(expandedId === assertion.id ? null : assertion.id)}
            >
              <span className="data-value text-xs text-brand-muted">{String(index + 1).padStart(2, '0')}</span>
              <span className="font-bold text-ink text-sm">{assertion.title}</span>
              <span className="data-value text-[10px] text-brand-blue font-bold uppercase">{assertion.sources[0].name}</span>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${assertion.confidence === 'High' ? 'bg-brand-teal' : 'bg-amber-400'}`} />
                <span className="data-value text-[10px] font-bold uppercase">{assertion.confidence}</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                {getStatusIcon(assertion.status)}
                <span className={assertion.status === 'Action Required' ? 'text-amber-600' : assertion.status === 'Validated' ? 'text-brand-teal' : 'text-brand-blue'}>
                  {assertion.status}
                </span>
              </div>
              <div className="flex justify-end text-brand-muted">
                {expandedId === assertion.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </div>
            
            <AnimatePresence>
              {expandedId === assertion.id && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden bg-bg/30"
                >
                  <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-line">
                    <div className="space-y-6">
                      <div>
                        <h4 className="col-header mb-3">Assertion Detail</h4>
                        <p className="text-base font-display font-medium text-ink leading-relaxed">{assertion.description}</p>
                      </div>
                      
                      <div>
                        <h4 className="col-header mb-3 text-brand-blue">Source Reconciliation</h4>
                        <div className="space-y-2">
                          {assertion.sources.map((source, i) => (
                            <div key={i} className="flex justify-between items-center p-3 border border-line bg-white rounded-xl shadow-sm group hover:border-brand-teal transition-colors">
                              <span className="text-[10px] font-bold uppercase text-brand-muted">{source.name}</span>
                              {source.url ? (
                                <a 
                                  href={source.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="data-value text-[11px] font-bold text-brand-blue flex items-center gap-2 hover:text-brand-teal transition-colors"
                                >
                                  {source.reference}
                                  <ExternalLink size={12} className="text-brand-teal opacity-50 group-hover:opacity-100 transition-opacity" />
                                </a>
                              ) : (
                                <span className="data-value text-[11px] font-bold text-brand-blue flex items-center gap-2">
                                  {source.reference}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6 border-l border-line pl-12">
                      <div className="p-5 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                        <div className="flex items-center gap-2 mb-3">
                          <ShieldCheck size={16} className="text-brand-blue" />
                          <h4 className="text-[10px] font-bold uppercase text-brand-blue tracking-widest">Underwriting Guidance</h4>
                        </div>
                        <p className="text-xs font-medium text-brand-blue/80 leading-relaxed">
                          {assertion.underwritingGuidance || 'Standard review protocol applies. No deviations detected.'}
                        </p>
                      </div>
                      
                      {assertion.status === 'Action Required' && (
                        <div className="p-5 bg-amber-50 rounded-2xl border border-amber-200">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle size={16} className="text-amber-500" />
                            <h4 className="text-[10px] font-bold uppercase text-amber-700 tracking-widest">Required Action</h4>
                          </div>
                          <p className="text-xs font-bold text-amber-900 mb-5">{assertion.examinerAction}</p>
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <span className="text-[9px] uppercase font-bold text-amber-600/60 block tracking-widest">Assigned To</span>
                              <span className="text-[11px] font-bold text-amber-900">{assertion.assignedTo}</span>
                            </div>
                            <div>
                              <span className="text-[9px] uppercase font-bold text-amber-600/60 block tracking-widest">Due Date</span>
                              <span className="data-value text-[11px] font-bold text-amber-900">{assertion.dueDate}</span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex gap-3 pt-4">
                        <button className="flex-1 px-6 py-3 bg-brand-blue text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-brand-blue/90 shadow-md transition-all">
                          Validate Assertion
                        </button>
                        <button className="px-6 py-3 border border-line bg-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:border-brand-blue transition-all">
                          Add Note
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
