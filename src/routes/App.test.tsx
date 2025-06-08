import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { AppRoutes } from './App.route'

describe('AppRoute (TDD)', () => {
  it('renders HomePage on "/"', () => {
    const router = createMemoryRouter(AppRoutes, {
      initialEntries: ['/'],
    })

    render(<RouterProvider router={router} />)
    expect(screen.getByTestId(/home/i)).toBeInTheDocument()
  })

  it('renders CreatePage on "/create"', () => {
    const router = createMemoryRouter(AppRoutes, {
      initialEntries: ['/create'],
    })

    render(<RouterProvider router={router} />)
    expect(screen.getByTestId(/create/i)).toBeInTheDocument()
  })

  it('renders EditPage on "/edit"', () => {
    const router = createMemoryRouter(AppRoutes, {
      initialEntries: ['/edit'],
    })

    render(<RouterProvider router={router} />)
    expect(screen.getByTestId(/edit/i)).toBeInTheDocument()
  })

  it('should read firstName, lastName, and dateOfBirth from query string', () => {
    const router = createMemoryRouter(AppRoutes, {
      initialEntries: ['/edit?firstName=Saeed&lastName=Abdilar&dateOfBirth=1993-10-03'],
    })

    render(<RouterProvider router={router} />)

    expect(screen.getByTestId('edit')).toBeInTheDocument()
    expect(screen.getByTestId('params')).toHaveTextContent('Saeed Abdilar 1993-10-03')
  })

  it('shows 404 or fallback for unknown route', () => {
    const router = createMemoryRouter(AppRoutes, {
      initialEntries: ['/not-found'],
    })

    render(<RouterProvider router={router} />)
    expect(screen.queryByText(/not found/i)).toBeInTheDocument()
  })
})
