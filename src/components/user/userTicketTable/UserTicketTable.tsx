// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { NavigationOutline } from 'mdi-material-ui'

interface RowType {
  ticketId: string
  ticketSubject: string
  createdDate: string
  status: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const rows: RowType[] = [
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'cozuldu'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'beklemede'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'ilgileniliyor'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'beklemede'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'cozuldu'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'beklemede'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'cozuldu'
  },
  {
    ticketId: '1526-5586-aa54-as85',
    ticketSubject: 'fatura gelmiyor',
    createdDate: '12 Mayıs 2024',
    status: 'ilgileniliyor'
  }
]

const statusObj: StatusObj = {
  ilgileniliyor: { color: 'info' },
  cozuldu: { color: 'error' },
  beklemede: { color: 'primary' }
}

const UserTicketTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Konu</TableCell>
              <TableCell>Oluşma Tarihi</TableCell>
              <TableCell>Durum</TableCell>
              <TableCell>İslemler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: RowType) => (
              <TableRow hover key={row.ticketId} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.ticketId}</Typography>
                    <Typography variant='caption'>{row.ticketSubject}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.createdDate}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <NavigationOutline
                    style={{ cursor: 'pointer', marginRight: '5px' }}
                    onClick={() => alert('/user/tickets/' + row.ticketId)}
                    titleAccess='detay'
                    color='info'
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default UserTicketTable
