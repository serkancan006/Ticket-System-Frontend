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
import { TrashCanOutline, MonitorScreenshot } from 'mdi-material-ui'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

//Router
import { useDialog } from 'src/context/DialogProvider'
import { UserRoleDialog } from 'src/views/dialogs/UserRoleDialog'

interface Column {
  id: 'id' | 'profilPhoto' | 'username' | 'nameSurname' | 'company' | 'date' | 'status' | 'islem'
  label: string
  minWidth?: number
  align?: 'right' | 'center' | 'left'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { id: 'id', label: '#', align: 'center' },
  { id: 'profilPhoto', label: 'resim', align: 'center' },
  { id: 'username', label: 'kullanıcı-adı', align: 'center' },
  { id: 'nameSurname', label: 'ad-soyad', align: 'center' },
  { id: 'company', label: 'firmalar', align: 'center' },
  { id: 'date', label: 'tarih', align: 'center' },
  { id: 'status', label: 'durum', align: 'center' },
  { id: 'islem', label: 'işlemler', align: 'center' }
]

type StatusType = 'Aktif' | 'Pasif'

interface Data {
  id: number
  profilPhoto: string
  username: string
  nameSurname: string
  company: string
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
  Pasif: { color: 'error' },
  Aktif: { color: 'success' }
}

function createData(
  id: number,
  profilPhoto: string,
  username: string,
  nameSurname: string,
  company: string,
  date: string,
  status: StatusType,
  islem: string
): Data {
  return { id, profilPhoto, username, nameSurname, company, date, status, islem }
}

const rows = [
  createData(1, 'img1', 'osmanustundag', 'Osman Üstündağ', 'Microsoft', '13 haziran 2024', 'Aktif', '1'),
  createData(1, 'img2', 'bugraspalace', 'Bugra Yaşar', 'Amd', '1 Ocak 2024', 'Pasif', '2')
]

const AdminUserListContainer = () => {
  const { openDialog } = useDialog()

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

  const handleUserRoleModal = () => {
    openDialog(UserRoleDialog, { orderState: 'someUserRoleState' }, result => {
      //console.log('Dialog closed with result:', result)
    })
  }

  return (
    <div>
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
                              <MonitorScreenshot
                                style={{ cursor: 'pointer', marginRight: '5px' }}
                                onClick={handleUserRoleModal}
                                titleAccess='güncelle'
                                color='info'
                              />
                              <TrashCanOutline
                                style={{ cursor: 'pointer', marginRight: '5px' }}
                                onClick={() => alert('sil: ' + result)}
                                titleAccess='sil'
                                color='error'
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
    </div>
  )
}

export default AdminUserListContainer
