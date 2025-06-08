import { createRoutesFromElements, Route } from 'react-router-dom'
import { HomePage, CreatePage, EditPage, NotFoundPage } from 'pages'
import { MainLayout } from 'layouts'

export const AppRoutes = createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route path='/' element={<HomePage />} />
    <Route path='/create' element={<CreatePage />} />
    <Route path='/edit' element={<EditPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
)
