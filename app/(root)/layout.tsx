import Navbar from '@/components/Navbar'
import React from 'react'
import { SessionProvider } from 'next-auth/react'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <SessionProvider>
      <div>
        <Navbar />
        {children}
      </div>
    </SessionProvider>

  )
}

export default layout