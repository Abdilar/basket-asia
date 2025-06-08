import { Navbar } from 'components'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
