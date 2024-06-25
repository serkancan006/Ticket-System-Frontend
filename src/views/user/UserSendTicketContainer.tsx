import React from 'react'
import { useFormik } from 'formik'
import { SendTicketSchema } from 'src/schema/SendTicketSchema'
import { initialUserSendTicket, UserSendTicket } from 'src/contracts/userSendTicket'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

//import { FileAccount } from 'mdi-material-ui'
//import { MuiFileInput } from 'mui-file-input'
import UserTicketService from 'src/services/UserTicketService'
import { showNotifyStack } from 'src/helpers/NotiStackService'

const UserSendTicketContainer: React.FC = () => {
  // ** Formik
  const onSubmit = async (values: UserSendTicket, actions: any) => {
    const response = await UserTicketService.userSendTicketAsync(values)
    if (response.data.status) {
      showNotifyStack(response.data.message, 'success')
    } else {
      showNotifyStack(response.data.message, 'warning')
    }
    try {
    } catch (error) {
      console.error(error)
    } finally {
      actions.resetForm()
    }
  }

  const formik = useFormik({
    initialValues: initialUserSendTicket,
    onSubmit,
    validationSchema: SendTicketSchema
  })

  return (
    <div>
      <Card>
        <CardHeader title='Bir Bilet Gönder' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField
                  error={formik.touched.subject && !!formik.errors.subject}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.subject && formik.errors.subject}
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                  fullWidth
                  label='Konu'
                  name='subject'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  error={formik.touched.description && !!formik.errors.description}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.description && formik.errors.description}
                  onChange={formik.handleChange}
                  value={formik.values.description}
                  fullWidth
                  multiline
                  minRows={5}
                  label='Açıklama'
                  name='description'
                  sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <MuiFileInput
                  label='Dosya seç'
                  multiple
                  error={formik.touched.files && !!formik.errors.files}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.files && formik.errors.files}
                  onChange={files => formik.setFieldValue('files', files)}
                  value={formik.values.files ?? []} // Değer null olabilir, bu yüzden ?? [] kullanarak varsayılan bir dizi atayın
                  InputProps={{
                    inputProps: {
                      accept: '.png, .jpeg, .jpg, .pdf'
                    },
                    startAdornment: <FileAccount />
                  }}
                  placeholder='Ek ekle'
                />
              </Grid> */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    gap: 5,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Button type='submit' variant='contained' size='large'>
                    Gönder
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserSendTicketContainer
