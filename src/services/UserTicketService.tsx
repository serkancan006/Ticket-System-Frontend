import { AxiosResponse } from 'axios'
import { GetAllTicket } from 'src/contracts/ticket_models/Get_All_Ticket'
import { UserSendTicket } from 'src/contracts/userSendTicket'
import HttpClientService from 'src/helpers/HttpClientService'

const userSendTicketAsync = (ticket: UserSendTicket): Promise<AxiosResponse<{ status: boolean; message: string }>> => {
  return HttpClientService.post({ urlParameters: 'Ticket/Add' }, ticket)
}

const AllTicket = async (): Promise<AxiosResponse<{ status: boolean; tickets: GetAllTicket[] }>> => {
  return await HttpClientService.get<{ status: boolean; tickets: GetAllTicket[] }>({
    urlParameters: 'Ticket/AllTicket'
  })
}


const UserTicketService = {
  userSendTicketAsync,
  AllTicket
}

export default UserTicketService
