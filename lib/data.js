export const dashboardTrend = [
  { name: 'Mon', completed: 48 },
  { name: 'Tue', completed: 62 },
  { name: 'Wed', completed: 58 },
  { name: 'Thu', completed: 76 },
  { name: 'Fri', completed: 90 },
  { name: 'Sat', completed: 72 },
  { name: 'Sun', completed: 84 }
];

export const statusData = [
  { name: 'Pending', value: 164, color: '#eab308' },
  { name: 'Verified', value: 1286, color: '#16a34a' },
  { name: 'Rejected', value: 73, color: '#dc2626' }
];

export const customers = [
  { id: 'ZKF-1001', name: 'Acme Distributors Pvt Ltd', status: 'Verified', updated: 'Today, 11:48 AM', risk: 'Low', type: 'Business' },
  { id: 'ZKF-1002', name: 'Nila Trading Co.', status: 'Pending', updated: 'Today, 10:12 AM', risk: 'Medium', type: 'Business' },
  { id: 'ZKF-1003', name: 'Arjun Narayanan', status: 'Pending', updated: 'Yesterday', risk: 'High', type: 'Individual' },
  { id: 'ZKF-1004', name: 'Zenith Healthcare LLP', status: 'Pending', updated: 'Yesterday', risk: 'Medium', type: 'Business' },
  { id: 'ZKF-1005', name: 'Mira Foods Export', status: 'Verified', updated: '25 Mar 2026', risk: 'Low', type: 'Business' }
];

export const alerts = [
  { title: '18 KYC records expiring in 7 days', type: 'warning', action: 'Review renewals' },
  { title: '5 verifications failed face match threshold', type: 'danger', action: 'Open failed cases' },
  { title: '3 profiles missing address proof', type: 'info', action: 'Request document' }
];

export const timeline = [
  { time: '09:14 AM', event: 'Customer uploaded Aadhaar front and back', status: 'done' },
  { time: '09:16 AM', event: 'PAN document OCR completed', status: 'done' },
  { time: '09:18 AM', event: 'Selfie matched against ID photo', status: 'done' },
  { time: '09:22 AM', event: 'Compliance review opened', status: 'current' },
  { time: '09:35 AM', event: 'Approval pending admin action', status: 'pending' }
];

export const extractedData = [
  { label: 'Full Name', document: 'Arjun Narayanan', entered: 'Arjun Narayanan', match: true },
  { label: 'DOB', document: '14 Aug 1993', entered: '14 Aug 1993', match: true },
  { label: 'PAN', document: 'AVNPN1841F', entered: 'AVNPN1841F', match: true },
  { label: 'Address', document: '12 Lakeview Rd, Chennai', entered: '12 Lakeview Road, Chennai', match: false }
];

export const expiringRecords = [
  { name: 'Nila Trading Co.', due: 'In 4 days', risk: 'Medium', owner: 'Ops Team' },
  { name: 'Veda Diagnostics', due: 'In 6 days', risk: 'High', owner: 'Compliance' },
  { name: 'Sapphire Retail', due: 'In 9 days', risk: 'Low', owner: 'Admin' }
];
