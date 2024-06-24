import { UserSendTicket } from 'src/contracts/userSendTicket'
import HttpClientService from 'src/helpers/HttpClientService'

const userSendTicket = (
  ticket: UserSendTicket,
  successCallback?: () => void,
  errorCallback?: (errorMessage: string) => void
): void => {
  HttpClientService.post({ urlParameters: '/UserTicket' }, ticket)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .then(response => {
      if (successCallback) {
        successCallback()
      }
    })
    .catch(error => {
      if (errorCallback) {
        errorCallback(error)
      }
    })
}

const UserTicketService = {
  userSendTicket
}

export default UserTicketService
