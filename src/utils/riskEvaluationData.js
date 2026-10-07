const scores = [
  [50, 45, 40],
  [45, 40, 36],
  [40, 28, 21],
  [32, 16, 8],
  [50, 42, 45],
  [48, 32, 32],
  [36, 23, 18],
  [24, 12, 4],
  [55, 40, 50],
  [42, 30, 27],
  [30, 15, 15],
  [20, 6, 6],
  [46, 40, 41],
  [38, 35, 24],
  [28, 18, 9],
  [18, 8, 0],
  [44, 40, 39],
  [33, 22, 14],
];

const people = [
  { _id: '1', name: 'Kamal Gupta' },
  { _id: '2', name: 'Mr Poorva Pawar' },
  { _id: '3', name: 'Mr Ashok Kumar' },
  { _id: '4', name: 'Abhilasha' },
  { _id: '5', name: 'Mr Shailendra' },
  { _id: '6', name: 'Pooja Devi' },
];

const ownerCounts = [1, 2, 3, 2, 4, 1, 2, 5, 3, 2, 1, 6, 2, 3, 4, 2, 1, 3];

const riskTexts = [
  {
    name: 'Access to Capital Risk',
    description:
      'Inadequate liquidity, high leverage, refinancing challenges, covenant breaches, and interest rate swings may strain cash flow.',
    mitigationCounts: { approved: 5, forApproval: 2, noChange: 7 },
  },
  {
    name: 'Regulatory and Contractual Dispute Risk',
    description:
      'Unresolved PPA interpretations, legacy claims, and land-lease dues may create material liabilities and extra provisioning.',
    mitigationCounts: { approved: 4, forApproval: 3, noChange: 2 },
  },
  {
    name: 'Process Safety and Occupational Health Risk',
    description:
      'Fire, mechanical, electrical, and work-at-height hazards, plus vehicle movement, may cause injury and plant shutdowns.',
    mitigationCounts: { approved: 6, forApproval: 4, noChange: 3 },
  },
  {
    name: 'Delayed Execution and Partner Dependency',
    description:
      'Delays in statutory and environmental approvals after the demerger may push commissioning and raise project cost.',
    mitigationCounts: { approved: 3, forApproval: 1, noChange: 3 },
  },
  {
    name: 'Asset Reliability and Fuel Availability',
    description:
      'Unreliable equipment, uneven fuel supply, and unsafe man-machine interaction may cut output through unplanned outages.',
    mitigationCounts: { approved: 7, forApproval: 2, noChange: 4 },
  },
  {
    name: 'Stakeholder and Community Engagement',
    description:
      'Weak community engagement, CSR gaps, and sensitive disclosures may damage trust and disrupt operations.',
    mitigationCounts: { approved: 2, forApproval: 2, noChange: 2 },
  },
  {
    name: 'Environmental Compliance and Ash Management',
    description:
      'Poor control of fly ash, effluent, and wastewater may lead to pollution, penalties, and unsafe disposal.',
    mitigationCounts: { approved: 8, forApproval: 3, noChange: 4 },
  },
  {
    name: 'Security Threat and Perimeter Control',
    description:
      'Operations near sensitive borders face external threats where surveillance, access control, and patrols are weak.',
    mitigationCounts: { approved: 2, forApproval: 1, noChange: 2 },
  },
  {
    name: 'Water Availability and Zero Liquid Discharge',
    description:
      'Reliance on one water source, ZLD duties, and extreme weather may interrupt generation and cooling.',
    mitigationCounts: { approved: 3, forApproval: 4, noChange: 2 },
  },
  {
    name: 'Talent Retention and Succession',
    description:
      'Hiring and keeping skilled people at remote sites, plus thin succession cover, may weaken day-to-day capability.',
    mitigationCounts: { approved: 1, forApproval: 2, noChange: 2 },
  },
  {
    name: 'Cybersecurity and IT OT Complexity',
    description:
      'Ageing controls, privacy duties, and a more complex IT and OT estate may expose plants to disruption.',
    mitigationCounts: { approved: 6, forApproval: 5, noChange: 4 },
  },
  {
    name: 'O and M Partner and Critical Spares',
    description:
      'Dependence on one maintenance partner and scarce long-lead spares may extend downtime after a failure.',
    mitigationCounts: { approved: 2, forApproval: 1, noChange: 3 },
  },
  {
    name: 'Contract Labour and Statutory Compliance',
    description:
      'As principal employer, gaps in PF, ESI, wages, and vendor discipline may create statutory and cost exposure.',
    mitigationCounts: { approved: 4, forApproval: 3, noChange: 5 },
  },
  {
    name: 'Fuel Supply and Logistics',
    description:
      'Limited coal suppliers, route dependence, quality swings, and transit loss may raise cost and cut availability.',
    mitigationCounts: { approved: 9, forApproval: 2, noChange: 3 },
  },
  {
    name: 'Offtake and Grid Concentration',
    description:
      'A narrow set of buyers and grid constraints may leave generation unsold when demand or dispatch shifts.',
    mitigationCounts: { approved: 3, forApproval: 2, noChange: 2 },
  },
  {
    name: 'Insurance and Asset Damage',
    description:
      'Underinsured plant and slow claims after fire, flood, or machinery breakdown may delay restoration.',
    mitigationCounts: { approved: 1, forApproval: 1, noChange: 2 },
  },
  {
    name: 'Land and Rehabilitation',
    description:
      'Unresolved land title, rehabilitation commitments, and local objections may block access and expansion.',
    mitigationCounts: { approved: 2, forApproval: 3, noChange: 2 },
  },
  {
    name: 'Climate and Extreme Weather',
    description:
      'Heat, flood, and cyclone exposure may damage assets, interrupt fuel movement, and force derating.',
    mitigationCounts: { approved: 4, forApproval: 2, noChange: 3 },
  },
];

export const risks = riskTexts.map((risk, index) => {
  const [inherent, q1Residual, q2Residual] = scores[index];
  const ownerList = Array.from({ length: ownerCounts[index] }, (_, offset) => people[(index + offset) % people.length]);
  const code = `#R${String(index + 1).padStart(2, '0')}`;
  const q2Trend = q2Residual > q1Residual ? 'up' : q2Residual < q1Residual ? 'down' : 'flat';

  return {
    _id: String(index + 1),
    code,
    name: risk.name,
    description: risk.description,
    risk: `${code} ${risk.name}`,
    inherent,
    q1Residual,
    q2Residual,
    q2Trend,
    owners: ownerList.map((owner) => owner.name).join(', '),
    ownerList,
    mitigationCounts: risk.mitigationCounts,
  };
});
