import { Assertion, Conflict, RiskScore, Exception } from './types';

export const MOCK_ASSERTIONS: Assertion[] = [
  {
    id: 'as-1',
    title: 'Current Owner of Record',
    description: 'Current Owner of Record is Christopher Sauerzopf',
    sources: [
      { 
        name: 'Recorder Instrument', 
        reference: '201802120019687',
        url: 'https://recorder.franklincountyohio.gov/Search/InstrumentDetail?instrumentNumber=201802120019687'
      },
      { 
        name: 'Auditor record', 
        reference: 'Parcel 545-237699-00',
        url: 'https://auditor.franklincountyohio.gov/Search/ParcelDetail?parcelId=54523769900'
      },
      { name: 'Title Search Package', reference: 'ra020226U000001' }
    ],
    confidence: 'High',
    status: 'Validated',
    examinerAction: 'None',
    category: 'Chain Risk'
  },
  {
    id: 'as-2',
    title: 'Chain of Title Continuity',
    description: 'No Break in Chain of Title (42 years)',
    sources: [
      { name: 'Title Search Package', reference: 'Deed timeline' },
      { 
        name: 'Recorder index pull', 
        reference: '1984-2026',
        url: 'https://recorder.franklincountyohio.gov/Search/IndexSearch'
      }
    ],
    confidence: 'High',
    status: 'Validated',
    examinerAction: 'None',
    category: 'Chain Risk'
  },
  {
    id: 'as-3',
    title: 'Active Civil Judgment',
    description: 'SV Capital Ltd v. Christopher Sauerzopf (Case 08 JG 041274)',
    sources: [
      { 
        name: 'Clerk search', 
        reference: '08 JG 041274',
        url: 'https://fcdcfcjs.franklincountyohio.gov/CaseInformation?caseNumber=08JG041274'
      },
      { name: 'Searcher Notes', reference: 'Judgment Amount: $35,309.73' }
    ],
    confidence: 'High',
    status: 'Action Required',
    examinerAction: 'Confirm if bankruptcy discharge (11BK60679) includes this judgment; Obtain satisfaction if not discharged.',
    underwritingGuidance: 'Judgment > 5 years old and dormant? Eligible to insure over with indemnity if bankruptcy confirmed.',
    category: 'Lien Risk'
  },
  {
    id: 'as-4',
    title: 'Active Mortgage',
    description: 'Active Mortgage – United Wholesale Mortgage, LLC ($330,000)',
    sources: [
      { 
        name: 'Mortgage Instrument', 
        reference: '202109080159681',
        url: 'https://recorder.franklincountyohio.gov/Search/InstrumentDetail?instrumentNumber=202109080159681'
      },
      { name: 'Title Search Package', reference: 'Mortgage table' }
    ],
    confidence: 'High',
    status: 'Action Required',
    examinerAction: 'Obtain payoff; Confirm satisfaction recording post close',
    assignedTo: 'Closing Team',
    dueDate: '2026-03-15',
    underwritingGuidance: 'Standard mortgage payoff required.',
    suggestedResolution: 'Obtain payoff statement from UWM.',
    category: 'Lien Risk'
  },
  {
    id: 'as-5',
    title: 'Tax Status',
    description: '2024 Taxes Paid: $10,468.24. No delinquencies reported.',
    sources: [
      { 
        name: 'Treasurer Record', 
        reference: 'Parcel 545-237699-00',
        url: 'https://treasurer.franklincountyohio.gov/Search/TaxDetail?parcelId=54523769900'
      },
      { name: 'Tax Search', reference: '2025-10471.02' }
    ],
    confidence: 'High',
    status: 'Validated',
    category: 'Lien Risk'
  }
];

export const MOCK_CONFLICTS: Conflict[] = [
  {
    id: 'conf-1',
    title: 'Judgment Satisfaction vs. Bankruptcy',
    reportA: 'Case 08 JG 041274 listed as ACTIVE in Clerk records.',
    urlA: 'https://fcdcfcjs.franklincountyohio.gov/CaseInformation?caseNumber=08JG041274',
    reportB: 'Searcher notes indicate bankruptcy (11BK60679) but no court-cancelled satisfaction on record.',
    urlB: 'https://pacer.uscourts.gov/search-results?caseNumber=11BK60679',
    systemFlag: 'Conflict – requires manual docket review',
    resolved: false
  }
];

export const MOCK_RISK_SCORES: RiskScore[] = [
  { category: 'Chain Risk', level: 'Green', assertions: ['as-1', 'as-2'] },
  { category: 'Lien Risk', level: 'Red', assertions: ['as-3', 'as-4', 'as-5'] },
  { category: 'Fraud Risk', level: 'Green', assertions: [] },
  { category: 'Access Risk', level: 'Green', assertions: [] },
  { category: 'Boundary Risk', level: 'Green', assertions: [] }
];

export const MOCK_EXCEPTIONS: Exception[] = [
  {
    id: 'ex-1',
    title: 'Declaration of Restrictions (199835251)',
    url: 'https://recorder.franklincountyohio.gov/Search/InstrumentDetail?instrumentNumber=199835251',
    materiallyAffectsMarketability: false,
    requiredByManual: true,
    isGenericBoilerplate: true,
    decision: null
  },
  {
    id: 'ex-2',
    title: 'Easement - Columbia Gas (34842-A1)',
    url: 'https://recorder.franklincountyohio.gov/Search/InstrumentDetail?instrumentNumber=34842-A1',
    materiallyAffectsMarketability: false,
    requiredByManual: true,
    isGenericBoilerplate: false,
    decision: null
  }
];
