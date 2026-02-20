import { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SearchStatus {
  source: string;
  status: 'success' | 'failed' | 'pending';
}

interface PartySearch {
  name: string;
  role: 'Seller' | 'Buyer' | 'Prior Owner';
  searches: SearchStatus[];
}

const MOCK_PARTY_SEARCHES: PartySearch[] = [
  {
    name: 'CHRISTOPHER SAUERZOPF',
    role: 'Seller',
    searches: [
      { source: 'Auditor', status: 'success' },
      { source: 'Treasurer', status: 'success' },
      { source: 'Recorder', status: 'success' },
      { source: 'Pacer', status: 'failed' },
      { source: 'Clerk', status: 'success' },
      { source: 'Mc Clerk', status: 'success' },
      { source: 'Probate', status: 'success' },
      { source: 'Probate Marriage', status: 'success' },
      { source: 'Patriot', status: 'success' },
      { source: 'Public Finance', status: 'success' },
      { source: 'Attorney General', status: 'success' }
    ]
  },
  {
    name: 'CARISSA BAKER',
    role: 'Buyer',
    searches: [
      { source: 'Recorder', status: 'success' },
      { source: 'Probate Marriage', status: 'success' }
    ]
  },
  {
    name: 'SCHLICHER JOHN R',
    role: 'Prior Owner',
    searches: [
      { source: 'Recorder', status: 'success' }
    ]
  },
  {
    name: 'BUTCHER BILLY J',
    role: 'Prior Owner',
    searches: [
      { source: 'Recorder', status: 'success' }
    ]
  },
  {
    name: 'LIRA STEVEN P',
    role: 'Prior Owner',
    searches: [
      { source: 'Recorder', status: 'success' }
    ]
  },
  {
    name: 'M/I SCHOTTENSTEIN',
    role: 'Prior Owner',
    searches: [
      { source: 'Recorder', status: 'success' }
    ]
  }
];

export default function SearchPunchcard() {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Seller': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Buyer': return 'bg-rose-50 text-rose-700 border-rose-100';
      case 'Prior Owner': return 'bg-blue-600 text-white border-blue-700';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const renderParty = (party: PartySearch, index: number) => {
    const successCount = party.searches.filter(s => s.status === 'success').length;
    const totalCount = party.searches.length;
    const progress = totalCount > 0 ? (successCount / totalCount) * 100 : 0;

    return (
      <div key={index} className="border-b border-line pb-6 last:border-0 last:pb-0">
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-display font-bold text-ink uppercase tracking-wider">{party.name}</h3>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${getRoleColor(party.role)}`}>
            {party.role}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-3">
          {party.searches.map((search, sIndex) => (
            <div key={sIndex} className="flex items-center gap-1.5">
              {search.status === 'success' ? (
                <CheckCircle2 size={14} className="text-blue-600 fill-blue-600 text-white" />
              ) : search.status === 'failed' ? (
                <XCircle size={14} className="text-rose-600 fill-rose-600 text-white" />
              ) : (
                <div className="w-3.5 h-3.5 rounded-full border-2 border-gray-300" />
              )}
              <span className="text-xs font-medium text-ink/80">{search.source}</span>
            </div>
          ))}
        </div>

        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  const seller = MOCK_PARTY_SEARCHES.find(p => p.role === 'Seller');
  const others = MOCK_PARTY_SEARCHES.filter(p => p.role !== 'Seller');

  return (
    <section className="p-8 border-b border-line bg-white">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="col-header mb-1">Search Punchcard</h2>
          <p className="text-xs text-brand-muted font-medium">Verification status across all required indices</p>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-4 py-2 bg-brand-blue/5 text-brand-blue rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-blue/10 transition-colors"
        >
          {isExpanded ? 'Show Less' : 'Show All Parties'}
          {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>

      <div className="space-y-6">
        {seller && renderParty(seller, 0)}
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-6 overflow-hidden"
            >
              {others.map((party, index) => renderParty(party, index + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}