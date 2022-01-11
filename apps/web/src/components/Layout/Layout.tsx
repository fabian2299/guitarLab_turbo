import Head from 'next/head'
import type { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Header } from '../Header'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-['auto_1fr_auto']">
      <Head>
        <meta name="description" content="Pagina web de ventas de guitarras" />
      </Head>
      <Header />
      <main className="container mx-auto min-h-[90vh] p-5">{children}</main>
      <Footer />
    </div>
  )
}
