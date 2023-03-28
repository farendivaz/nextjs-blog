import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";
import "./globals.css";

export const metadata = {
  title: "Farendivaz's Blog",
  description: "Created by Farendivaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-900">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
