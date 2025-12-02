import Link from "next/link";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer() {
  const navLinks = ["Home", "Categories", "Tournaments", "Leaderboard"];
  const socialLinks = [
    {
      name: "TikTok",
      icon: <AiFillTikTok size={32} />,
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={32} />,
      url: "#",
    },
    {
      name: "Instagram",
      icon: <AiFillInstagram size={32} />,
      url: "#",
    },
    {
      name: "YouTube",
      icon: <FaYoutube size={32} />,
      url: "#",
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Main footer content */}
      <div className="max-w-screen-2xl px-4! 2xl:px-0 2xl:mx-auto py-16">
        <div className="flex justify-between gap-12">
          {/* Left section - Branding and description */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-bold text-lg">
                F
              </div>
              <h2 className="text-2xl font-bold">Freej Trivia</h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Cryptocurrency has revolutionized the world of finance and digital
              transactions, providing individuals with a decentralized and
              secure way to store, transfer, and manage their wealth
            </p>
          </div>

          {/* Right section - Navigation and Social */}
          <div className="flex flex-col items-center gap-8">
            {/* Navigation links */}
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-white hover:text-gray-300 transition text-sm font-medium"
                >
                  {link}
                </Link>
              ))}
            </div>

            <div className="bg-[linear-gradient(281deg,rgba(255,137,55,0)_16.01%,#FF8937_51.37%,rgba(255,137,55,0)_82.27%)] w-[400px] h-0.5"></div>

            {/* Social media icons */}
            <div className="flex gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="rounded flex items-center justify-center"
                  title={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Copyright section */}
      <div className="max-w-screen-2xl px-4! 2xl:px-0 2xl:mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>©2025 All Rights Reserved by Freej Trivia</p>
        <p>© 2000-2021, All Rights Reserved</p>
      </div>
    </footer>
  );
}
