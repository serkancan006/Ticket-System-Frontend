import React from 'react'
import { SendCircleOutline as SendIcon, Attachment } from 'mdi-material-ui'
import { Divider, Grid, TextField, Typography, List, ListItem, ListItemText, Fab, ListItemIcon } from '@mui/material'

const Chat = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h5' className='header-message'>
            Bilet Mesajları
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{ width: '100%', height: '80vh' }}>
        <Grid item xs={3} style={{ borderRight: '1px solid #e0e0e0' }}>
          {/* <List>
            <ListItem button key='RemySharp'>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary='John Wick'></ListItemText>
              <ListItemText secondary='8569-8569'></ListItemText>
            </ListItem>
          </List> */}
          {/* <Divider /> */}
          <Grid item xs={12} style={{ padding: '10px' }}>
            <TextField
              id='outlined-basic-email'
              label='Ticket Ara'
              placeholder='Ticket no giriniz'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Divider />
          <List>
            <ListItem button key='FaturaKesme'>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary='Fatura Kesme'>Fatura Kesme</ListItemText>
              <ListItemText secondary='8569-8569'></ListItemText>
            </ListItem>
            <ListItem button key='FaturaListeleme'>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary='Fatura Listeleme'>Fatura Listeleme</ListItemText>
              <ListItemText secondary='2354-6578'></ListItemText>
            </ListItem>
            <ListItem button key='Yetkilendirme'>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary='Yetkilendirme'>Yetkilendirme</ListItemText>
              <ListItemText secondary='8789-5098'></ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9}>
          <List style={{ height: '70vh', overflowY: 'auto' }}>
            <ListItem key='1'>
              <Grid container>
                <Grid item xs={12}>
                  <ListItemText style={{ textAlign: 'right' }} primary="Hey man, What's up ?"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText style={{ textAlign: 'right' }} secondary='09:30'></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key='2'>
              <Grid container>
                <Grid item xs={12} style={{ textAlign: 'left' }}>
                  <ListItemText primary='Hey, Iam Good! What about you ?'></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText secondary='09:31'></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
            <ListItem key='3'>
              <Grid container>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                  <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                </Grid>
                <Grid item xs={12}>
                  <ListItemText style={{ textAlign: 'right' }} secondary='10:30'></ListItemText>
                </Grid>
              </Grid>
            </ListItem>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={10}>
              <TextField id='outlined-basic-email' label='Bir şeyler yazın' fullWidth />
            </Grid>
            <Grid xs={2} style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                <Fab color='primary' aria-label='add'>
                  <SendIcon />
                </Fab>
                <Fab color='secondary' aria-label='add'>
                  <Attachment />
                </Fab>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Chat
