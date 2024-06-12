import React, { useState, useEffect } from 'react'
import { SendCircleOutline as SendIcon, Attachment } from 'mdi-material-ui'
import {
  Divider,
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Fab,
  ListItemIcon,
  Card
} from '@mui/material'
import { grey, blue } from '@mui/material/colors'

const message1 = [
  { message: "Hey man, What's up", role: 'admin', name: 'buğra', time: '09:30' },
  { message: 'Hey, Ian Good! What about you?', role: 'user', name: 'user', time: '09:31' },
  { message: "Cool. i am good, let's catch up!", role: 'admin', name: 'buğra', time: '10:30' }
]

const message2 = [
  { message: 'Selam nasılsın?', role: 'admin', name: 'buğra', time: '10:30' },
  { message: 'iyi, sen nasılsın?', role: 'user', name: 'user', time: '10:31' },
  { message: 'Bende iyiyim bugün maça geliyor musun?', role: 'admin', name: 'buğra', time: '11:30' }
]

const message3 = [
  { message: 'blablablablabla', role: 'admin', name: 'buğra', time: '12:30' },
  { message: 'adadadadadadadadada', role: 'user', name: 'user', time: '12:31' },
  { message: 'hohohohohohohoh', role: 'admin', name: 'buğra', time: '13:30' }
]

const TicketChatContainer = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages(message1)
  }, [])

  return (
    <Card>
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
            <ListItem button key='FaturaKesme' onClick={() => setMessages(message1)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary='Fatura Kesme'>Fatura Kesme</ListItemText>
              <ListItemText secondary='8569-8569'></ListItemText>
            </ListItem>
            <ListItem button key='FaturaListeleme' onClick={() => setMessages(message2)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary='Fatura Listeleme'>Fatura Listeleme</ListItemText>
              <ListItemText secondary='2354-6578'></ListItemText>
            </ListItem>
            <ListItem button key='Yetkilendirme' onClick={() => setMessages(message3)}>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary='Yetkilendirme'>Yetkilendirme</ListItemText>
              <ListItemText secondary='8789-5098'></ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={9}>
          <List style={{ height: '70vh', overflowY: 'auto' }}>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                style={{
                  justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    backgroundColor: message.role === 'user' ? blue[200] : grey[300],
                    borderRadius: '20px',
                    padding: '6px',
                    maxWidth: '60%'
                  }}
                >
                  <Grid container>
                    <Grid item xs={12}>
                      <ListItemText primary={message.message} style={{ textAlign: 'center' }} />
                    </Grid>
                    <Grid item xs={12}>
                      <ListItemText secondary={message.time} style={{ textAlign: 'right' }} />
                    </Grid>
                  </Grid>
                </div>
              </ListItem>
            ))}
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
    </Card>
  )
}

export default TicketChatContainer
