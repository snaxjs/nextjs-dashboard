import Meta from './ui/Meta';
import { inter } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Meta title="Dashboard App" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
