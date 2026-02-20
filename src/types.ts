export type AssertionStatus = 'Validated' | 'Action Required' | 'Conflict' | 'Pending';
export type ConfidenceLevel = 'High' | 'Medium' | 'Low';
export type RiskLevel = 'Green' | 'Yellow' | 'Red';

export interface Source {
  name: string;
  reference: string;
  url?: string;
}

export interface Assertion {
  id: string;
  title: string;
  description: string;
  sources: Source[];
  confidence: ConfidenceLevel;
  status: AssertionStatus;
  examinerAction?: string;
  underwritingGuidance?: string;
  suggestedResolution?: string;
  assignedTo?: string;
  dueDate?: string;
  category: RiskCategory;
}

export interface Conflict {
  id: string;
  title: string;
  reportA: string;
  urlA?: string;
  reportB: string;
  urlB?: string;
  systemFlag: string;
  resolved: boolean;
}

export type RiskCategory = 'Chain Risk' | 'Lien Risk' | 'Fraud Risk' | 'Access Risk' | 'Boundary Risk';

export interface RiskScore {
  category: RiskCategory;
  level: RiskLevel;
  assertions: string[]; // IDs of related assertions
}

export interface Exception {
  id: string;
  title: string;
  url?: string;
  materiallyAffectsMarketability: boolean | null;
  requiredByManual: boolean | null;
  isGenericBoilerplate: boolean | null;
  decision: 'Include' | 'Summarize' | 'Exclude' | null;
}
