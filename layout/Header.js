import { useState, memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusCircleIcon, LoginIcon, MenuIcon } from "@heroicons/react/outline";

import Drawer from "../components/Drawer";

function Header() {
  const [mobileMenuOpen, setMobileMenu] = useState(false);
  const MenuItem = ({ href, text }) => {
    return (
      <Link href={href}>
        <a className="text-grey-200 hover:text-white transition-colors">
          {text}
        </a>
      </Link>
    );
  };

  const MobileMenuItem = ({ href, text }) => {
    return (
      <Link href={href}>
        <a className="text-grey-900 py-2 hover:text-grey-300 transition-colors block text-right">
          {text}
        </a>
      </Link>
    );
  };

  return (
    <header>
      <div className="bg-grey-700 w-full h-10 hidden sm:block">
        <div className="container mx-auto px-4 flex items-center justify-end h-full transition-colors">
          <nav className="flex space-x-4">
            <MenuItem href="/motorok" text="Motorok" />
            <MenuItem href="/motorok" text="Motoros ruházat" />
            <MenuItem href="/motorok" text="Motor alkatrészek" />
            <MenuItem href="/motorok" text="Blog" />
          </nav>
        </div>
      </div>
      <div className="bg-white mb-4 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="h-14 w-full flex items-center">
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/logo.svg"
                  alt="me"
                  width="296"
                  height="36"
                  unoptimized
                />
              </a>
            </Link>
            <div className="ml-auto hidden sm:flex">
              <a href="/" className="btn btn-primary mr-2">
                <LoginIcon className="w-6 h-6 mr-2" />
                Bejelentkezés
              </a>
              <a href="/" className="btn btn-secondary">
                <PlusCircleIcon className="w-6 h-6 mr-2" />
                Új hirdetés
              </a>
            </div>
            <div className="ml-auto flex sm:hidden">
              <button
                type="button"
                className="p-1"
                onClick={() => setMobileMenu(true)}
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </nav>
        </div>
      </div>
      <Drawer status={mobileMenuOpen} onClose={() => setMobileMenu(false)}>
        <nav>
          <MobileMenuItem href="/motorok" text="Motorok" />
          <MobileMenuItem href="/motorok" text="Motoros ruházat" />
          <MobileMenuItem href="/motorok" text="Motor alkatrészek" />
          <MobileMenuItem href="/motorok" text="Blog" />
        </nav>
        <div className="mt-auto">
          <a href="/" className="btn btn-secondary mb-2">
            <PlusCircleIcon className="w-6 h-6 mr-2" />
            Új hirdetés
          </a>
          <a href="/" className="btn btn-primary">
            <LoginIcon className="w-6 h-6 mr-2" />
            Bejelentkezés
          </a>
        </div>
      </Drawer>
    </header>
  );
}

export default memo(Header);
