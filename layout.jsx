
export const metadata = {
  title: "SchoolScheduler AI",
  description: "ระบบจัดตารางเรียนด้วย AI สำหรับโรงเรียน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
