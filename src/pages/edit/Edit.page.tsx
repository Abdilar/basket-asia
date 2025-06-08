import { useSearchParams } from 'react-router'

export const EditPage = () => {
  const [searchParams] = useSearchParams()
  const firstName = searchParams.get('firstName')
  const lastName = searchParams.get('lastName')
  const dateOfBirth = searchParams.get('dateOfBirth')

  return (
    <>
      <h2 data-testid='edit'>✏️ Edit a customer</h2>
      <p data-testid='params'>
        {firstName} {lastName} {dateOfBirth}
      </p>
    </>
  )
}
