import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import LoginContainer from 'src/views/LoginContainer'

const LoginPage = () => {
  return (
    <>
      <LoginContainer />
    </>
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
