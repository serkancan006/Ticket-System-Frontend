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

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
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
    },
    {
      sectionTitle: 'Admin'
    },
    {
      icon: CubeOutline,
      title: 'Ticket',
      path: '/admin/tickets'
    },
    {
      sectionTitle: 'User'
    },
    {
      title: 'Profilim',
      icon: CubeOutline,
      path: '/user/account'
    },
    {
      title: 'Bilet Gönder',
      icon: CubeOutline,
      path: '/user/send-ticket'
    },
    {
      title: 'Biletlerim',
      icon: CubeOutline,
      path: '/user/tickets'
    },
    {
      title: 'Bilet Chat',
      icon: CubeOutline,
      path: '/user/ticket-messages'
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
      icon: CubeOutline,
      title: 'Send Ticket',
      path: '/send-ticket'
    },
    {
      icon: CubeOutline,
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
    }
  ]
}

export default navigation
