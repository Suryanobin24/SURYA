export default function Home() {
  const stats = [
    { title: "Pending Verifications", value: "24" },
    { title: "Approved Today", value: "18" },
    { title: "Rejected Cases", value: "3" },
    { title: "Total Customers", value: "1,248" }
  ];

  const recentCases = [
    { id: "KYC-1001", customer: "Aarav Technologies", status: "Pending", updated: "10 mins ago" },
    { id: "KYC-1002", customer: "BlueWave Finserv", status: "Approved", updated: "25 mins ago" },
    { id: "KYC-1003", customer: "Nova Retail LLP", status: "Under Review", updated: "40 mins ago" },
    { id: "KYC-1004", customer: "Prime Healthcare", status: "Rejected", updated: "1 hour ago" }
  ];

  return (
    <main style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>Zoho KYCFlow</div>
        <nav style={styles.nav}>
          <div style={styles.navItemActive}>Dashboard</div>
          <div style={styles.navItem}>Customers</div>
          <div style={styles.navItem}>Verifications</div>
          <div style={styles.navItem}>Documents</div>
          <div style={styles.navItem}>Reports</div>
          <div style={styles.navItem}>Settings</div>
        </nav>
      </aside>

      <section style={styles.content}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.heading}>Compliance Dashboard</h1>
            <p style={styles.subtext}>Monitor customer KYC activity, document verification, and approval workflow.</p>
          </div>
          <button style={styles.button}>+ New Verification</button>
        </header>

        <section style={styles.statsGrid}>
          {stats.map((item) => (
            <div key={item.title} style={styles.card}>
              <div style={styles.cardTitle}>{item.title}</div>
              <div style={styles.cardValue}>{item.value}</div>
            </div>
          ))}
        </section>

        <section style={styles.mainGrid}>
          <div style={styles.largeCard}>
            <div style={styles.sectionTitle}>Recent Verification Cases</div>
            <div style={styles.table}>
              <div style={styles.tableHeader}>
                <span>Case ID</span>
                <span>Customer</span>
                <span>Status</span>
                <span>Updated</span>
              </div>
              {recentCases.map((caseItem) => (
                <div key={caseItem.id} style={styles.tableRow}>
                  <span>{caseItem.id}</span>
                  <span>{caseItem.customer}</span>
                  <span>{caseItem.status}</span>
                  <span>{caseItem.updated}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.sidePanel}>
            <div style={styles.largeCard}>
              <div style={styles.sectionTitle}>Quick Actions</div>
              <button style={styles.actionButton}>Upload KYC Documents</button>
              <button style={styles.actionButton}>Review Pending Cases</button>
              <button style={styles.actionButton}>Generate Compliance Report</button>
            </div>

            <div style={styles.largeCard}>
              <div style={styles.sectionTitle}>System Status</div>
              <p style={styles.statusText}>Document OCR: Active</p>
              <p style={styles.statusText}>Fraud Screening: Active</p>
              <p style={styles.statusText}>Audit Logs: Healthy</p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f4f7fb",
    color: "#111827",
    fontFamily: "Arial, sans-serif"
  },
  sidebar: {
    width: "240px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
    padding: "24px 18px"
  },
  logo: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "30px"
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  navItem: {
    padding: "12px 14px",
    borderRadius: "10px",
    cursor: "pointer",
    color: "#cbd5e1"
  },
  navItemActive: {
    padding: "12px 14px",
    borderRadius: "10px",
    backgroundColor: "#1e293b",
    cursor: "pointer",
    color: "#ffffff",
    fontWeight: "600"
  },
  content: {
    flex: 1,
    padding: "32px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "28px",
    gap: "16px"
  },
  heading: {
    margin: 0,
    fontSize: "32px"
  },
  subtext: {
    margin: "8px 0 0",
    color: "#6b7280"
  },
  button: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 18px",
    fontSize: "14px",
    cursor: "pointer"
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "18px",
    marginBottom: "24px"
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  cardTitle: {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "10px"
  },
  cardValue: {
    fontSize: "28px",
    fontWeight: "700"
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px"
  },
  largeCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)"
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "18px"
  },
  table: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr",
    fontWeight: "700",
    color: "#374151",
    paddingBottom: "8px",
    borderBottom: "1px solid #e5e7eb"
  },
  tableRow: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr 1fr",
    padding: "10px 0",
    borderBottom: "1px solid #f1f5f9",
    color: "#4b5563"
  },
  sidePanel: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  actionButton: {
    width: "100%",
    padding: "12px 14px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    backgroundColor: "#f9fafb",
    cursor: "pointer",
    textAlign: "left"
  },
  statusText: {
    margin: "10px 0",
    color: "#4b5563"
  }
};
