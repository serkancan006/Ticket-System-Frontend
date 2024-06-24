// ** React Imports
import { useState, ElementType, ChangeEvent, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button, { ButtonProps } from '@mui/material/Button'
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const ProfileAccount = () => {
  // ** State
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  const [date, setDate] = useState<Date | null | undefined>(null)

  const onChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)

      reader.readAsDataURL(files[0])
    }
  }

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sx={{ marginTop: 4.8, marginBottom: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <Box>
                <ButtonStyled component='label' variant='contained' htmlFor='account-settings-upload-image'>
                  Resim Yükle
                  <input
                    hidden
                    type='file'
                    onChange={onChange}
                    accept='image/png, image/jpeg'
                    id='account-settings-upload-image'
                  />
                </ButtonStyled>
                <ResetButtonStyled color='error' variant='outlined' onClick={() => setImgSrc('/images/avatars/1.png')}>
                  Sıfırla
                </ResetButtonStyled>
                <Typography variant='body2' sx={{ marginTop: 5 }}>
                  İzin verilen dosya uzantıları PNG yada JPEG. Maksimum boyut 800 Kbyte.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Ad' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Soyad' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='email'
              label='Email'

              // defaultValue='johnDoe@example.com'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label='Username' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='account-settings-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={(date: Date) => setDate(date)}
              />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='number' label='Phone' placeholder='(123) 456-7890' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Country</InputLabel>
              <Select label='Country' defaultValue='Turkey'>
                <MenuItem value='Turkey'>Turkey</MenuItem>
                <MenuItem value='USA'>USA</MenuItem>
                <MenuItem value='UK'>UK</MenuItem>
                <MenuItem value='Australia'>Australia</MenuItem>
                <MenuItem value='Germany'>Germany</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
              <RadioGroup row defaultValue='male' aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='male' label='Male' control={<Radio />} />
                <FormControlLabel value='female' label='Female' control={<Radio />} />
                <FormControlLabel value='other' label='Other' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Kaydet
            </Button>
            <Button type='reset' variant='outlined' color='secondary'>
              Sıfırla
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default ProfileAccount
