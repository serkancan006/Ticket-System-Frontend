import { useState } from 'react'
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'

import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import { FileAccount } from 'mdi-material-ui'
import { MuiFileInput } from 'mui-file-input'

const UserSendTicketContainer = () => {
  const [files, setFiles] = useState<File[]>([])

  const handleChangeFile = (newFiles: File[]) => {
    //console.log(newFiles)
    setFiles(newFiles)
  }

  return (
    <div>
      <Card>
        <CardHeader title='Bir Bilet Gönder' titleTypographyProps={{ variant: 'h6' }} />
        <CardContent>
          <form onSubmit={e => e.preventDefault()} encType='multipart/form-data'>
            <Grid container spacing={5}>
              {/* <Grid item xs={12}>
              <TextField
                fullWidth
                type='email'
                label='Email'

                // helperText='You can use letters, numbers & periods'
              />
            </Grid> */}
              <Grid item xs={12}>
                <TextField fullWidth label='Konu' />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  minRows={5}
                  label='Açıklama'
                  sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                />
              </Grid>
              <Grid item xs={12}>
                <MuiFileInput
                  label='Dosya seç'
                  multiple
                  value={files}
                  onChange={handleChangeFile}
                  InputProps={{
                    inputProps: {
                      accept: '.png, .jpeg, .jpg'
                    },
                    startAdornment: <FileAccount />
                  }}
                  placeholder='Ek ekle'
                  style={{}}

                  // clearIconButtonProps={{
                  //   title: "Sil",
                  //   children: <TrashCan />,
                  // }}
                />
              </Grid>
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
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 2 }}>Hesabınız var mı?</Typography>
                    <Link passHref href='/pages/login'>
                      Giriş Yap
                    </Link>
                  </Box>
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
