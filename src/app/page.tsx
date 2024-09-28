'use client'

// import { useRouter } from 'next/navigation'
// import DashboardLayout from './dashboard/layout'
import Layout from './layout'
// import Landing from '@/components/landing'
import Treee from '@/components/tree';
import { useEffect, useState } from 'react'

export default function Page() {
  // const router = useRouter()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true after the component has been mounted on the client
    setMounted(true);
  }, []);

  // If not mounted, render null (or a loading placeholder)
  if (!mounted) {
    return null;
  }

  return (
    <Layout>
      {/* <Landing /> */}
      <Treee />
    </Layout>
  )
}





// import type { Metadata } from 'next'

// export const metadata: Metadata = {
//   title: 'Next.js',
// }

// export default function Page() {
//   return '...'
// }







// import Landing from '@/components/landing'
// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//       <Landing />
//     </div>
//   )
// }

// export default Page
