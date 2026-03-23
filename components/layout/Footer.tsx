"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact", href: "/about-us#offices" },
    ],
  },
  {
    title: "Products & Tools",
    links: [
      { label: "AI Sourcing", href: "/ai-assistant" },
      { label: "Get a Quote", href: "/sign-up" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Kitchen Cabinets", href: "/collections/cabinets" },
      { label: "Quartz Slabs", href: "/collections/quartz-slabs" },
      { label: "SPC/LVP Flooring", href: "/collections/spc-flooring" },
      { label: "PVC Wall Panels", href: "/collections/pvc-wall-panels" },
      { label: "WPC Outdoor", href: "/collections/wpc-outdoor" },
      { label: "Sanitaryware", href: "/collections/sanitaryware" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Silica Safety", href: "/silica-safety" },
    ],
  },
];

const paymentMethods = [
  { name: "Visa", icon: "/images/payments/visa.svg" },
  { name: "Mastercard", icon: "/images/payments/mastercard.svg" },
  { name: "Amex", icon: "/images/payments/amex.svg" },
  { name: "Discover", icon: "/images/payments/discover.svg" },
  { name: "JCB", icon: "/images/payments/jcb.svg" },
  { name: "Diners Club", icon: "/images/payments/diners-club.svg" },
];

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/ai-assistant") return null;

  return (
    <footer className="bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <Link href="/" className="inline-block">
              <Image src="/images/logo/logo.png" alt="Perfect Building Supply Co." width={48} height={48} className="object-contain mb-2" />
            </Link>
            <p className="text-xs text-white/60 leading-snug mb-3">
              The Perfect Building<br />Supply Company
            </p>
            <address className="not-italic text-xs text-white/50 space-y-1">
              <p>515 Mountain Dr</p>
              <p>Destin, FL 32541</p>
              <p>
                <a href="tel:+18503987361" className="hover:text-white transition-colors">
                  James: (850) 398-7361
                </a>
              </p>
              <p>
                <a href="tel:+17139271500" className="hover:text-white transition-colors">
                  Thanh: (713) 927-1500
                </a>
              </p>
              <p>
                <a href="mailto:MrPerfectBuildingSupply@gmail.com" className="hover:text-white transition-colors">
                  MrPerfectBuildingSupply@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:LettonLLC@gmail.com" className="hover:text-white transition-colors">
                  LettonLLC@gmail.com
                </a>
              </p>
            </address>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.facebook.com/profile.php?id=61575569205217"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://m.me/61575569205217"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message us on Messenger"
                className="text-white/50 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.453 5.497 3.727 7.192V22l3.405-1.868c.91.252 1.871.388 2.868.388 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.07 12.456L10.59 11.88l-4.47 2.576 4.914-5.213 2.48 2.576 4.47-2.576-4.914 5.213z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-sm mb-3 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              Copyright {new Date().getFullYear()} &copy; Perfect Building Supply Co.
            </p>
            <div className="flex items-center gap-2">
              {paymentMethods.map((card) => (
                <div
                  key={card.name}
                  className="px-1.5 py-1 bg-white/10 border border-white/10 rounded"
                >
                  <img src={card.icon} alt={card.name} className="h-5 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
