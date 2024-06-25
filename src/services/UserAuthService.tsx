import { AxiosResponse } from 'axios'
import { LoginContract } from 'src/contracts/Login'
import HttpClientService from 'src/helpers/HttpClientService'
import { ObjectToFormData } from 'src/helpers/ObjectToFormData'

type LoginType = { message: string; status: boolean; token: string }

const LoginAsync = (data: LoginContract): Promise<AxiosResponse<LoginType>> => {
  const formData = ObjectToFormData(data)

  return HttpClientService.postMultipart<LoginType>({ urlParameters: 'Login/login' }, formData)
}

const UserAuthService = {
  LoginAsync
}

export default UserAuthService
