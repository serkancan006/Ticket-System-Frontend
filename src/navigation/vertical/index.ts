// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import { Account, Ticket, TicketOutline, AccountEdit, Help, Send, Chat, SendOutline } from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'Admin'
    },
    {
      icon: Account,
      title: 'Profilim',
      path: '/admin/profile'
    },
    {
      icon: Ticket,
      title: 'Ticket',
      path: '/admin/tickets'
    },
    {
      icon: AccountEdit,
      title: 'Kullanıcılar',
      path: '/admin/user-list'
    },
    {
      sectionTitle: 'User'
    },
    {
      title: 'Profilim',
      icon: Account,
      path: '/user/profile'
    },
    {
      title: 'Bilet Gönder',
      icon: SendOutline,
      path: '/user/send-ticket'
    },
    {
      title: 'Biletlerim',
      icon: TicketOutline,
      path: '/user/tickets'
    },
    {
      title: 'Bilet Chat',
      icon: Chat,
      path: '/user/ticket-chat'
    },
    {
      sectionTitle: 'UI'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/login'
    },
    {
      icon: Send,
      title: 'Send Ticket',
      path: '/send-ticket'
    },
    {
      icon: Help,
      title: 'Faq',
      path: '/faq'
    },
    {
      sectionTitle: 'Test'
    },
    {
      icon: CubeOutline,
      title: 'Test',
      path: '/test'
    },
    {
      sectionTitle: 'Tema'
    },
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/core/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/core/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/core/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/core/typography'
    },
    {
      title: 'Icons',
      path: '/core/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/core/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/core/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/core/form-layouts'
    }
  ]
}

export default navigation
