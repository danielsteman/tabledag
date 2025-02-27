import "./globals.css";

export const metadata = {
  title: "React Flow + Next.js + Tailwind",
  description: "Example setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
