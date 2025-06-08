import { Link } from 'react-router'

export const Navbar = () => {
  return (
    <nav style={{ background: '#eee', padding: '1rem', display: 'flex', gap: '1rem' }}>
      <Link to='/'>🏠 Home</Link>
      <Link to='/create'>➕ Create</Link>
    </nav>
  )
}
