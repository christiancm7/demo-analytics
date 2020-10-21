export const HomeNav = [
  {
    icon: 'pe-7s-arc',
    label: 'Overview',
    to: '#/overview',
  },
];
export const PatientsNav = [
  {
    icon: 'pe-7s-id',
    label: 'Search Patient',
    to: '#/patients/search',
  },
  {
    icon: 'pe-7s-timer',
    label: 'Recently Opened',
    to: '#/patients/recent',
  },
];
export const BillingNav = [
  {
    icon: 'pe-7s-cash',
    label: 'Billed',
    content: [
      {
        label: 'Batches',
        to: '#/billing/billed/batches',
      },
      {
        label: 'Claims',
        to: '#/billing/billed/claims',
      },
    ],
  },
  {
    icon: 'pe-7s-target',
    label: 'Unbilled',
    content: [
      {
        label: 'Pending/On Hold',
        to: '#/billing/unbilled/pending',
      },
      {
        label: 'Rebilling',
        to: '#/billing/unbilled/rebilling',
      },
      {
        label: 'Self Pay',
        to: '#/billing/unbilled/self-pay',
      },
    ],
  },
  {
    icon: 'pe-7s-anchor',
    label: 'Misc',
    content: [
      {
        label: 'EOBS',
        to: '#/billing/misc/eobs',
      },
      {
        label: 'Posting',
        to: '#/billing/misc/posting',
      },
      {
        label: 'Adjustment Batches',
        to: '#/billing/misc/adjustment-batches',
      },
    ],
  },
];
export const AnalyticsNav = [
  {
    icon: 'pe-7s-graph',
    label: 'Dashboards',
    content: [
      {
        label: 'Billing',
        to: '#/dashboards/billing',
      },
      {
        label: 'Inpatient',
        to: '#/dashboards/inpatient',
      },
      {
        label: 'Medicare',
        to: '#/dashboards/medicare',
      },
      {
        label: 'Outpatient',
        to: '#/dashboards/outpatient',
      },
      {
        label: 'Physician',
        to: '#/dashboards/physician',
      },
      {
        label: 'ASC',
        to: '#/dashboards/asc',
      },
    ],
  },
  {
    icon: 'pe-7s-notebook',
    label: 'Reports',
    content: [
      {
        label: 'Financial',
        content: [
          {
            label: 'AR Dashboard',
            to: '#/reports/financial/ar-dashboard',
          },
          {
            label: 'AR Aging Report',
            to: '#/reports/financial/ar-aging',
          },
          {
            label: 'Collections by Patient',
            to: '#/reports/financial/collections',
          },
          {
            label: 'Production Report',
            to: '#/reports/financial/production-report',
          },
          {
            label: 'Transaction Report',
            to: '#/reports/financial/transaction-report',
          },
          {
            label: 'Provider P&L Report',
            to: '#/reports/financial/provider-report',
          },
        ],
      },
      {
        label: 'Mangement',
        content: [
          {
            label: 'Touch Aging Report',
            to: '#/reports/management/touch-report',
          },
        ],
      },
      {
        label: 'Claim Analysis',
        content: [
          {
            label: 'Claim Analysis Report',
            to: '#/reports/claim-analysis/claim-report',
          },
          {
            label: 'Payment Analysis Report',
            to: '#/reports/claim-analysis/payment-report',
          },
        ],
      },
      {
        label: 'Work Queues',
        to: '#/reports/work-queues',
      },
      {
        label: 'DRG Analysis',
        to: '#/reports/drg-analysis',
      },
      {
        label: 'HL7 Status Report',
        to: '#/reports/hl7-report',
      },
      {
        label: 'Providers Report',
        content: [
          {
            label: 'Coding Distribution Report',
            to: '#/reports/providers-report/coding-distribution-report',
          },
        ],
      },
    ],
  },
];
export const AdminNav = [
  {
    icon: 'pe-7s-user',
    label: 'Admin',
    content: [
      {
        label: 'Manage',
        content: [
          {
            label: 'Panels',
            to: '#/admin/manage/panels',
          },
          {
            label: 'Tests',
            to: '#/admin/manage/tests',
          },
          {
            label: 'Service Lines',
            to: '#/admin/manage/service-lines',
          },
          {
            label: 'Billing and Processing',
            to: '#/admin/manage/billing-processing',
          },
          {
            label: 'Hold Reason',
            to: '#/admin/manage/hold',
          },
          {
            label: 'Charge Master',
            to: '#/admin/manage/charge-master',
          },
          {
            label: 'AR Remarks',
            to: '#/admin/manage/ar-remarks',
          },
          {
            label: 'Insurance',
            to: '#/admin/manage/insurance',
          },
          {
            label: 'Facility Types',
            to: '#/admin/manage/facility-types',
          },
          {
            label: 'Facility Details',
            to: '#/admin/manage/facility-details',
          },
          {
            label: 'Facility DRG Details',
            to: '#/admin/manage/facility-drg',
          },
          {
            label: 'Documents',
            to: '#/admin/manage/documents',
          },
          {
            label: 'Resource',
            to: '#/admin/manage/resource',
          },
        ],
      },
      {
        label: 'Work Queues',
        content: [
          {
            label: 'Mng. CARC Codes',
            to: '#/admin/work-queues/carc',
          },
          {
            label: 'Mng. Work Queues',
            to: '#/admin/work-queues/panels',
          },
        ],
      },
      {
        label: 'Sales Portal',
        content: [
          {
            label: 'Manage',
            content: [
              {
                label: 'Sales Reps',
                to: '#/admin/sales-portal/manage/sales-reps'
              },
              {
                label: 'Practices',
                to: '#/admin/sales-portal/manage/practices'
              }
            ],
          },
          {
            label: 'Setup Commissions',
            to: '#/admin/sales-portal/setup-comissions',
          },
        ],
      },
      {
        label: 'Users',
        content: [
          {
            label: 'Portal Users',
            to: '#/admin/users/portal-users',
          },
          {
            label: 'Providers',
            to: '#/admin/users/providers',
          },
          {
            label: 'Roles',
            to: '#/admin/users/roles',
          },
          {
            label: 'Permissions',
            to: '#/admin/users/permissions',
          },
        ],
      },
      {
        label: 'Alerts',
        content: [
          {
            label: 'Ordering Filters',
            to: '#/admin/alerts/ordering-filters',
          },
          {
            label: 'Doctor/Ins. Alerts',
            to: '#/admin/alerts/doc-alerts',
          },
        ],
      },
      {
        label: 'Rule Engine',
        content: [
          {
            label: 'Manage Tenant',
            to: '#/admin/rule-engine/ordering-filters',
          },
          {
            label: 'Rule Manager',
            to: '#/admin/rule-engine/rule-manager',
          },
        ],
      },
      {
        label: 'Import 837',
        to: '#/admin/import-837',
      },
      {
        label: 'Import 835',
        to: '#/admin/import-835',
      },
      {
        label: 'EDI Reconciliation',
        to: '#/admin/import-835',
      },
    ],
  },
];
