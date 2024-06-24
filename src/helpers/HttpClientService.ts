import axios, { AxiosHeaders, AxiosInstance, AxiosResponse } from 'axios'
import { httpClientErrorInterceptor } from './HttpClientErrorInterceptor'

const httpClient: AxiosInstance = axios.create()
httpClientErrorInterceptor(httpClient)

const urlBuilder = (requestParamaters: Partial<RequestParameters>): string => {
  return `${requestParamaters.fullEndPoint ?? process.env.BASE_API_URL}${
    requestParamaters.urlParameters ? `/${requestParamaters.urlParameters}` : ''
  }`
}

const get = <T>(requestParameters: Partial<RequestParameters>): Promise<AxiosResponse<T>> => {
  const url = urlBuilder(requestParameters)

  return httpClient.get<T>(url, {
    headers: requestParameters.headers
  })
}

const post = <T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Promise<AxiosResponse<T>> => {
  const url = urlBuilder(requestParameters)

  return httpClient.post<T>(url, body, {
    headers: requestParameters.headers
  })
}

const postMultipart = <T>(
  requestParameters: Partial<RequestParameters>,
  formData: FormData
): Promise<AxiosResponse<T>> => {
  const url = urlBuilder(requestParameters)

  return httpClient.post<T>(url, formData, {
    headers: {
      ...requestParameters.headers,
      'Content-Type': 'multipart/form-data'
    }
  })
}

const put = <T>(requestParameters: Partial<RequestParameters>, body: Partial<T>): Promise<AxiosResponse<T>> => {
  const url = urlBuilder(requestParameters)

  return httpClient.put<T>(url, body, {
    headers: requestParameters.headers
  })
}

const del = <T>(requestParameters: Partial<RequestParameters>): Promise<AxiosResponse<T>> => {
  const url = urlBuilder(requestParameters)

  return httpClient.delete<T>(url, {
    headers: requestParameters.headers
  })
}

export class RequestParameters {
  headers?: AxiosHeaders
  fullEndPoint?: string
  urlParameters?: string
}

const HttpClientService = {
  get,
  post,
  postMultipart,
  put,
  delete: del,
}

export default HttpClientService
