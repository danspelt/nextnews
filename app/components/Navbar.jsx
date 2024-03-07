'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Image
                src="/images/site-icon.webp"
                width={50}
                height={50}
                alt="PrimePulse Logo"
              />
              <Link href="/"
                 className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                  PrimePulse	
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/about" className="py-5 px-3 hover:text-gray-900">
                About
              </Link>
              {/* Add more navigation links here */}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {user ? (
              <>
                <span>Hello, {user.displayName || user.email}</span>
                <button onClick={logout} className="px-3 py-2 rounded bg-gray-700 hover:bg-gray-600">Logout</button>
              </>
            ) : (
              <Link href="/login" className="px-3 py-2 rounded bg-gray-700 hover:bg-gray-600">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
