import React from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/docs/introduction');
  }, []);
  return null;
}
