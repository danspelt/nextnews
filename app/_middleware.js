'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/AuthContext';

const SecurePage = () => {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
  }, [currentUser, router]);

  return (
    <div>
      {/* Your secure page content */}
    </div>
  );
};

export default SecurePage;
