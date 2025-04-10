// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import SendTicketContainer from 'src/views/SendTicketContainer'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const SendTicketPage = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <SendTicketContainer />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default SendTicketPage
