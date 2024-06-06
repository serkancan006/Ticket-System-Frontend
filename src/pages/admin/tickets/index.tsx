// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Demo Components Imports
import TicketListTable from 'src/components/TicketListTable'



const TicketList = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          <Link href='https://mui.com/components/tables/' target='_blank'>
            Biletler
          </Link>
        </Typography>
        <Typography variant='body2'>Aşağıdaki biletler tablosundan bütün biletleri görebilir ve işlemlerinizi gerçekleştirebilirsiniz</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Biletler Tablosu' titleTypographyProps={{ variant: 'h6' }} />
          <TicketListTable />
        </Card>
      </Grid>
    </Grid>
  )
}

export default TicketList
