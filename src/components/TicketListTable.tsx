// ** React Imports
import { useState, ChangeEvent } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import { Chip } from '@mui/material'
import { NavigationOutline, PencilOutline, TrashCanOutline } from 'mdi-material-ui'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

//Router
import { useRouter } from 'next/router'

interface Column {
  id: 'id' | 'title' | 'date' | 'status' | 'islem'
  label: string
  minWidth?: number
  align?: 'right' | 'center' | 'left'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'id', label: '#', align: 'center' },
  { id: 'title', label: 'Başlık', align: 'center' },
  { id: 'date', label: 'Tarih', align: 'center' },
  { id: 'status', label: 'Durum', align: 'center' },
  { id: 'islem', label: 'İşlemler', align: 'center' }
]

type StatusType = 'İlgileniliyor' | 'Çözüldü' | 'Beklemede' | 'Yeni'

interface Data {
  id: number
  title: string
  date: string
  status: StatusType
  islem: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

const statusObj: StatusObj = {
  İlgileniliyor: { color: 'error' },
  Çözüldü: { color: 'primary' },
  Beklemede: { color: 'warning' },
  Yeni: { color: 'success' }
}

function createData(id: number, title: string, date: string, status: StatusType, islem: string): Data {
  return { id, title, date, status, islem }
}

const rows = [
  createData(1, 'Form Açılmıyor', '12 Mayıs', 'Yeni', '1'),
  createData(2, 'Fatura Kesemiyorum', '23 Nisan', 'İlgileniliyor', '2'),
  createData(3, 'Sms gönderilmiyor', '1 Ocak', 'Çözüldü', '3'),
  createData(4, 'Faturalar gelmiyor', '23 Ekin', 'Beklemede', '4'),
  createData(5, 'UI çalışmıyor', '1 Nisan', 'Yeni', '5'),
  createData(5, 'UI çalışmıyor', '1 Nisan', 'Yeni', '6'),
  createData(5, 'UI çalışmıyor', '1 Nisan', 'Yeni', '7'),
  createData(5, 'UI çalışmıyor', '1 Nisan', 'Yeni', '8')
]

const TicketListTable = () => {
  const router = useRouter()

  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(20)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.id} align={column.align} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    const value = row[column.id]
                    const result = column.format && typeof value === 'number' ? column.format(value) : value

                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === 'status' ? (
                          <Chip
                            label={result}
                            color={statusObj[row.status].color}
                            sx={{
                              height: 24,
                              fontSize: '0.75rem',
                              textTransform: 'capitalize',
                              '& .MuiChip-label': { fontWeight: 500 }
                            }}
                          />
                        ) : column.id === 'islem' ? (
                          <>
                            <NavigationOutline
                              style={{ cursor: 'pointer', marginRight: '5px' }}
                              onClick={() => router.push('/admin/tickets/' + result)}
                              titleAccess='detay'
                              color='info'
                            />
                            <TrashCanOutline
                              style={{ cursor: 'pointer', marginRight: '5px' }}
                              onClick={() => alert('sil: ' + result)}
                              titleAccess='sil'
                              color='error'
                            />
                            <PencilOutline
                              style={{ cursor: 'pointer', marginRight: '5px' }}
                              onClick={() => alert('güncelle: ' + result)}
                              titleAccess='güncelle'
                              color='warning'
                            />
                          </>
                        ) : column.id === 'id' ? (
                          index
                        ) : (
                          result
                        )}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TicketListTable
