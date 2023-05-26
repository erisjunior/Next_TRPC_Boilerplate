import { Footer, Header } from '~/presentation/components'

const DefaultLayout = ({ children }) => {
  return (
    <main className='bg-black-5 min-h-screen flex'>
      <div className='flex flex-1 bg-waves bg-top bg-cover'>
        <div className='flex flex-1 flex-col justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <Header />
          <div className='flex flex-1 flex-col'>{children}</div>
          <Footer />
        </div>
      </div>
    </main>
  )
}
export default DefaultLayout
