import "./DashboardLayout.css";

export default function DashboardLayout({ header, footer, children }) {
  return (
    <>
      <header className="dashboard-header">{header}</header>
      <main className="content">{children}</main>
      <footer className="dashboard-footer">{footer}</footer>
    </>
  );
}
