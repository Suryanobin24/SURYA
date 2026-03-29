import "./globals.css";

export const metadata = {
  title: "Zoho KYCFlow",
  description: "KYCFlow SaaS Application"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
