// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import SendTicket from 'src/components/SendTicket'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const HomePage = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <SendTicket />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default HomePage
