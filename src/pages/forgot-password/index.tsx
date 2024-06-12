import { ReactNode } from 'react'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import ForgotPasswordContainer from 'src/views/ForgotPasswordContainer'

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPasswordContainer />
    </>
  )
}

ForgotPasswordPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default ForgotPasswordPage
