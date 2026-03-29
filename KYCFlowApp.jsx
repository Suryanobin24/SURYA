'use client';

import { useMemo, useState } from 'react';
import {
  ShieldCheck,
  Users,
  Clock3,
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Search,
  Filter,
  Upload,
  FileText,
  Camera,
  Bell,
  Settings,
  LayoutDashboard,
  UserRound,
  ScanFace,
  Moon,
  SunMedium,
  Plus,
  Send,
  RefreshCw,
  ChevronRight,
  CircleAlert,
  BadgeCheck,
  Link2,
  Lock,
  History,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';
import { dashboardTrend, statusData, customers, alerts, timeline, extractedData, expiringRecords } from '@/lib/data';

function badgeClass(status) {
  if (status === 'Verified' || status === 'Low' || status === 'Match') return 'badge success';
  if (status === 'Pending' || status === 'Medium' || status === 'Review Needed') return 'badge warning';
  if (status === 'Rejected' || status === 'High' || status === 'Mismatch') return 'badge danger';
  return 'badge';
}

function Sidebar({ current, setCurrent, dark, setDark }) {
  const items = [
    ['Dashboard', LayoutDashboard],
    ['Customers', Users],
    ['Customer Profile', UserRound],
    ['Upload Portal', Upload],
    ['Verification', ScanFace],
    ['Alerts & Compliance', Bell],
    ['Settings', Settings]
  ];

  return (
    <aside className="sidebar glass-card">
      <div className="brand-row">
        <div className="brand-wrap">
          <div className="brand-icon"><ShieldCheck size={24} /></div>
          <div>
            <div className="eyebrow">B2B KYC Platform</div>
            <div className="brand-title">Zoho KYCFlow</div>
          </div>
        </div>
        <button className="icon-button" onClick={() => setDark((v) => !v)} aria-label="Toggle theme">
          {dark ? <SunMedium size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <div className="secure-card">
        <div className="secure-title"><Lock size={16} /> Secure workspace</div>
        <p>Encrypted document handling, role-based access, and audit trace across every KYC decision.</p>
      </div>

      <nav className="menu">
        {items.map(([label, Icon]) => (
          <button
            key={label}
            className={current === label ? 'menu-item active' : 'menu-item'}
            onClick={() => setCurrent(label)}
          >
            <span><Icon size={16} /> {label}</span>
            <ChevronRight size={16} />
          </button>
        ))}
      </nav>

      <div className="sidebar-metric">
        <div className="metric-title">Approval efficiency</div>
        <div className="metric-value">92%</div>
        <div className="metric-trend"><ArrowUpRight size={16} /> Faster than last month</div>
      </div>
    </aside>
  );
}

function Topbar({ title, subtitle }) {
  return (
    <div className="topbar">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className="action-row">
        <button className="primary-button"><Plus size={16} /> Add Customer</button>
        <button className="secondary-button"><Send size={16} /> Send KYC Request</button>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, tone, detail }) {
  return (
    <div className="glass-card stat-card">
      <div>
        <div className="muted-text">{title}</div>
        <div className="stat-value">{value}</div>
        <div className="muted-text">{detail}</div>
      </div>
      <div className={`icon-pod ${tone}`}>
        <Icon size={20} />
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="screen-stack">
      <Topbar title="KYC Dashboard" subtitle="A secure overview of customer verification activity, compliance alerts, and operational health." />

      <div className="stats-grid">
        <StatCard title="Total KYC Records" value="1,523" icon={Users} tone="blue" detail="Across individual and business accounts" />
        <StatCard title="Verified" value="1,286" icon={CheckCircle2} tone="green" detail="84.4% successful completion" />
        <StatCard title="Pending" value="164" icon={Clock3} tone="yellow" detail="Requires team follow-up" />
        <StatCard title="Rejected" value="73" icon={XCircle} tone="red" detail="Failed due to mismatch or invalid docs" />
      </div>

      <div className="layout-2-1">
        <section className="glass-card panel tall-panel">
          <div className="panel-head">
            <div>
              <h3>KYC completions this week</h3>
              <p>Operational throughput for completed verifications</p>
            </div>
          </div>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dashboardTrend}>
                <defs>
                  <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.03} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--line)" opacity={0.35} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Area type="monotone" dataKey="completed" stroke="#2563eb" fill="url(#fillBlue)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="glass-card panel tall-panel">
          <div className="panel-head">
            <div>
              <h3>Status breakdown</h3>
              <p>Current verification distribution</p>
            </div>
          </div>
          <div className="mini-chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} dataKey="value" innerRadius={56} outerRadius={82} paddingAngle={4}>
                  {statusData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="legend-stack">
            {statusData.map((item) => (
              <div className="legend-row" key={item.name}>
                <div className="legend-left">
                  <span className="dot" style={{ background: item.color }} />
                  {item.name}
                </div>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="layout-2-1">
        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Compliance alerts</h3>
              <p>Items needing review before they impact audit readiness</p>
            </div>
          </div>
          <div className="stack-list">
            {alerts.map((item) => (
              <div className="alert-row" key={item.title}>
                <div className="alert-left">
                  {item.type === 'warning' ? <AlertTriangle className="yellow-text" size={18} /> : item.type === 'danger' ? <CircleAlert className="red-text" size={18} /> : <Bell className="blue-text" size={18} />}
                  <div>
                    <div className="row-title">{item.title}</div>
                    <div className="muted-text">Immediate follow-up recommended</div>
                  </div>
                </div>
                <button className="secondary-button small">{item.action}</button>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Quick actions</h3>
              <p>Speed up operational workflows</p>
            </div>
          </div>
          <div className="stack-list">
            {['Add Customer', 'Send KYC Request', 'Review Failed Cases', 'Export Audit Report'].map((item) => (
              <button key={item} className="secondary-button full-left">{item}</button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function CustomerListScreen({ openProfile }) {
  return (
    <div className="screen-stack">
      <Topbar title="Customer Records" subtitle="Search, filter, and open customer KYC profiles with full compliance context." />
      <section className="glass-card panel">
        <div className="filter-row">
          <div className="search-wrap">
            <Search size={16} />
            <input placeholder="Search customer, ID, PAN, Aadhaar" />
          </div>
          <select><option>All status</option><option>Pending</option><option>Verified</option><option>Rejected</option></select>
          <select><option>Last 30 days</option><option>Last 7 days</option><option>Today</option></select>
          <select><option>All types</option><option>Individual</option><option>Business</option></select>
          <button className="secondary-button"><Filter size={16} /> Filters</button>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Last Updated</th>
                <th>Risk Level</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.id}>
                  <td>
                    <div className="row-title">{c.name}</div>
                    <div className="muted-text tiny">{c.id}</div>
                  </td>
                  <td><span className={badgeClass(c.status)}>{c.status}</span></td>
                  <td>{c.updated}</td>
                  <td><span className={badgeClass(c.risk)}>{c.risk}</span></td>
                  <td>{c.type}</td>
                  <td><button className="link-button" onClick={openProfile}>Open</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function CustomerProfileScreen({ openVerification }) {
  return (
    <div className="screen-stack">
      <Topbar title="Customer Profile" subtitle="Detailed KYC record with documents, history, risk level, and approval controls." />
      <div className="layout-2-1">
        <section className="glass-card panel">
          <div className="profile-head">
            <div className="profile-left">
              <div className="avatar">AN</div>
              <div>
                <div className="profile-title">Arjun Narayanan</div>
                <div className="muted-text">Individual customer • ID ZKF-1003</div>
                <div className="badge-row">
                  <span className={badgeClass('Pending')}>Pending Review</span>
                  <span className={badgeClass('High')}>High Risk</span>
                </div>
              </div>
            </div>
            <div className="action-row">
              <button className="success-button"><BadgeCheck size={16} /> Approve</button>
              <button className="danger-button"><XCircle size={16} /> Reject</button>
            </div>
          </div>
          <div className="detail-grid">
            {[
              ['PAN', 'AVNPN1841F'],
              ['DOB', '14 Aug 1993'],
              ['Phone', '+91 98765 43210'],
              ['Email', 'arjun.n@example.com'],
              ['Address', '12 Lakeview Road, Chennai'],
              ['Verification Source', 'OCR + Face Match + Manual Review']
            ].map(([label, value]) => (
              <div className="detail-card" key={label}>
                <div className="muted-text">{label}</div>
                <div className="row-title">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Completion progress</h3>
              <p>Submission readiness for approval</p>
            </div>
          </div>
          <div className="progress-track"><div className="progress-fill" style={{ width: '82%' }} /></div>
          <div className="stack-list compact">
            {[
              ['ID proof uploaded', true],
              ['Address proof uploaded', true],
              ['Selfie uploaded', true],
              ['OCR verified', true],
              ['Manual approval', false]
            ].map(([label, done]) => (
              <div className="between-row" key={label}>
                <span>{label}</span>
                {done ? <CheckCircle2 className="green-text" size={16} /> : <Clock3 className="yellow-text" size={16} />}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="layout-2-1">
        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Uploaded documents</h3>
              <p>Sensitive identity documents secured in encrypted storage</p>
            </div>
          </div>
          <div className="card-grid-3">
            {[
              ['Aadhaar Card', 'Front and back uploaded'],
              ['PAN Card', 'OCR extracted successfully'],
              ['Selfie', 'Face confidence 96.2%']
            ].map(([title, desc]) => (
              <div className="mini-doc-card" key={title}>
                <FileText className="blue-text" size={24} />
                <div className="row-title top-gap">{title}</div>
                <div className="muted-text">{desc}</div>
                <button className="link-button"><Eye size={14} /> Preview</button>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Action timeline</h3>
              <p>Immutable audit trail for this customer</p>
            </div>
          </div>
          <div className="timeline-list">
            {timeline.map((item) => (
              <div className="timeline-row" key={item.time + item.event}>
                <span className={`timeline-dot ${item.status}`} />
                <div>
                  <div className="row-title">{item.event}</div>
                  <div className="muted-text tiny">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="secondary-button full-left" onClick={openVerification}><History size={16} /> Open verification workspace</button>
        </section>
      </div>
    </div>
  );
}

function UploadScreen() {
  return (
    <div className="screen-stack">
      <Topbar title="Customer Upload Portal" subtitle="A mobile-first document collection flow built for trust, clarity, and low friction." />
      <div className="upload-center">
        <div className="glass-card mobile-card">
          <div className="mobile-top">
            <div className="eyebrow light">Secure KYC Upload</div>
            <div className="mobile-title">Identity verification</div>
            <div className="mobile-progress"><div className="mobile-progress-fill" /></div>
            <div className="tiny light">Step 2 of 3 • Encrypted transfer enabled</div>
          </div>
          <div className="mobile-body">
            <div>
              <div className="section-title">Upload your documents</div>
              <div className="muted-text">Please upload clear, readable images. Supported formats: JPG, PNG, PDF.</div>
            </div>
            {[
              ['ID Proof', Camera, 'Aadhaar, Passport, or Driver License'],
              ['Address Proof', FileText, 'Utility bill, bank statement, or rental agreement'],
              ['Selfie', ScanFace, 'Ensure your face is well lit and fully visible']
            ].map(([title, Icon, desc]) => (
              <div className="upload-drop" key={title}>
                <div className="upload-icon"><Icon size={20} /></div>
                <div className="upload-copy">
                  <div className="row-title">{title}</div>
                  <div className="muted-text">{desc}</div>
                  <button className="secondary-button small"><Upload size={16} /> Upload file</button>
                </div>
              </div>
            ))}
            <div className="tip-box">Make sure all 4 corners of the document are visible. Avoid glare, blur, and cropped edges for faster approval.</div>
            <button className="primary-button full-width">Continue securely</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VerificationScreen() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({ score: 96.2, decision: 'Match', source: 'Awaiting live verification' });
  const [review, setReview] = useState('No AI compliance summary yet.');
  const [reviewLoading, setReviewLoading] = useState(false);

  async function runVerification() {
    setLoading(true);
    try {
      const response = await fetch('/api/verify-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId: 'ZKF-1003',
          selfieImageUrl: 'https://example.com/selfie.jpg',
          idImageUrl: 'https://example.com/id-photo.jpg'
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Verification failed');
      setResult(data);
    } catch (error) {
      setResult({ score: 72.4, decision: 'Review Needed', source: error.message || 'Fallback simulation' });
    } finally {
      setLoading(false);
    }
  }

  async function runAiReview() {
    setReviewLoading(true);
    try {
      const response = await fetch('/api/ai-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: 'Arjun Narayanan',
          riskLevel: 'High',
          status: 'Pending',
          ocrRows: extractedData,
          verificationResult: result
        })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'AI review failed');
      setReview(data.summary);
    } catch (error) {
      setReview(error.message || 'AI review failed.');
    } finally {
      setReviewLoading(false);
    }
  }

  return (
    <div className="screen-stack">
      <Topbar title="Verification Workspace" subtitle="Review OCR, compare entered data, verify face match, and approve or request re-upload in one flow." />
      <div className="layout-2-1">
        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>OCR comparison</h3>
              <p>Document-extracted fields compared against entered customer data</p>
            </div>
          </div>
          <div className="stack-list">
            {extractedData.map((row) => (
              <div className={row.match ? 'ocr-row' : 'ocr-row mismatch'} key={row.label}>
                <div className="row-title">{row.label}</div>
                <div>
                  <div className="tiny muted-text">Document</div>
                  <div>{row.document}</div>
                </div>
                <div>
                  <div className="tiny muted-text">Entered data</div>
                  <div>{row.entered}</div>
                </div>
                <div className="right-chip"><span className={badgeClass(row.match ? 'Match' : 'Mismatch')}>{row.match ? 'Match' : 'Mismatch'}</span></div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Face match</h3>
              <p>Selfie vs ID photo comparison</p>
            </div>
          </div>
          <div className="face-grid">
            <div className="face-box">Selfie</div>
            <div className="face-box">ID Photo</div>
          </div>
          <div className="verification-summary">
            <div className="muted-text">Verification source</div>
            <div className="row-title">{result.source}</div>
            <div className="between-row top-gap">
              <div>
                <div className="muted-text">Confidence score</div>
                <div className="stat-value smaller">{result.score}%</div>
              </div>
              <span className={badgeClass(result.decision)}>{result.decision}</span>
            </div>
          </div>
          <div className="stack-list compact">
            <button className="primary-button" onClick={runVerification} disabled={loading}>{loading ? <RefreshCw size={16} className="spin" /> : <ScanFace size={16} />} Run photo verification</button>
            <button className="secondary-button" onClick={runAiReview} disabled={reviewLoading}>{reviewLoading ? <RefreshCw size={16} className="spin" /> : <CircleAlert size={16} />} Generate AI compliance note</button>
            <button className="success-button"><BadgeCheck size={16} /> Approve</button>
            <button className="danger-button"><XCircle size={16} /> Reject</button>
            <button className="secondary-button"><Upload size={16} /> Request re-upload</button>
          </div>
          <div className="ai-box">
            <div className="row-title">AI reviewer summary</div>
            <p>{review}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

function AlertsComplianceScreen() {
  return (
    <div className="screen-stack">
      <Topbar title="Alerts & Compliance" subtitle="Monitor expiring records, renewal status, and risk-driven exceptions in one place." />
      <div className="layout-2-1">
        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Expiring KYC records</h3>
              <p>Prioritize renewals before policy breaches occur</p>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Due</th>
                  <th>Risk</th>
                  <th>Owner</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {expiringRecords.map((record) => (
                  <tr key={record.name}>
                    <td className="row-title">{record.name}</td>
                    <td>{record.due}</td>
                    <td><span className={badgeClass(record.risk)}>{record.risk}</span></td>
                    <td>{record.owner}</td>
                    <td><span className="badge info">Reminder scheduled</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="glass-card panel tall-panel">
          <div className="panel-head">
            <div>
              <h3>Risk summary</h3>
              <p>Current flagged population</p>
            </div>
          </div>
          <div className="chart-area">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[{ level: 'Low', value: 980 }, { level: 'Medium', value: 411 }, { level: 'High', value: 132 }]}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--line)" opacity={0.35} />
                <XAxis dataKey="level" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} />
                <Bar dataKey="value" radius={[12, 12, 0, 0]} fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}

function SettingsScreen() {
  return (
    <div className="screen-stack">
      <Topbar title="Settings" subtitle="Control KYC rules, expiry windows, alerts, and integrations from a structured admin console." />
      <div className="layout-2-1">
        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Configuration</h3>
              <p>Secure policy controls for admins and compliance owners</p>
            </div>
          </div>
          <div className="settings-stack">
            {[
              ['Mandatory Aadhaar or Passport', true],
              ['PAN required for business tax validation', true],
              ['Selfie required for all individual KYC', true],
              ['High-risk entities renewal every 6 months', true],
              ['Auto-reminder 30 days before expiry', true],
              ['CRM sync enabled', true]
            ].map(([label, enabled]) => (
              <label className="toggle-row" key={label}>
                <span>{label}</span>
                <input type="checkbox" defaultChecked={enabled} />
              </label>
            ))}
          </div>
        </section>

        <section className="glass-card panel">
          <div className="panel-head">
            <div>
              <h3>Preferences</h3>
              <p>Notification and workflow defaults</p>
            </div>
          </div>
          <div className="settings-stack">
            <div>
              <label className="field-label">Email notifications</label>
              <select><option>Critical only</option><option>All alerts</option><option>Disabled</option></select>
            </div>
            <div>
              <label className="field-label">Expiry reminder window</label>
              <select><option>30 days</option><option>15 days</option><option>45 days</option></select>
            </div>
            <div className="integration-box">
              <div className="row-title"><Link2 size={16} /> Integration health</div>
              <div className="between-row"><span>OCR provider</span><span className="green-text">Connected</span></div>
              <div className="between-row"><span>Face match API</span><span className="green-text">Connected</span></div>
              <div className="between-row"><span>CRM webhook</span><span className="yellow-text">Review needed</span></div>
            </div>
            <button className="primary-button">Save configuration</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function KYCFlowApp() {
  const [current, setCurrent] = useState('Dashboard');
  const [dark, setDark] = useState(false);

  const screen = useMemo(() => {
    switch (current) {
      case 'Customers':
        return <CustomerListScreen openProfile={() => setCurrent('Customer Profile')} />;
      case 'Customer Profile':
        return <CustomerProfileScreen openVerification={() => setCurrent('Verification')} />;
      case 'Upload Portal':
        return <UploadScreen />;
      case 'Verification':
        return <VerificationScreen />;
      case 'Alerts & Compliance':
        return <AlertsComplianceScreen />;
      case 'Settings':
        return <SettingsScreen />;
      default:
        return <DashboardScreen />;
    }
  }, [current]);

  return (
    <div className={dark ? 'app-root dark' : 'app-root'}>
      <div className="app-shell">
        <Sidebar current={current} setCurrent={setCurrent} dark={dark} setDark={setDark} />
        <main className="main-area">
          <div className="status-strip"><ShieldCheck size={16} /> Enterprise KYC workflow • Minimal clicks • Audit-ready • Secure by design</div>
          {screen}
        </main>
      </div>
    </div>
  );
}
