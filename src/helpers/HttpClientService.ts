import axios, { Axios, AxiosHeaders, AxiosResponse } from "axios";

export class HttpClientService {
  constructor(
    private baseUrl: string | undefined = process.env.BASE_API_URL,
    private httpClient: Axios = axios.create()
  ) {}

  private urlBuilder(requestParamaters: Partial<RequestParamaters>): string {
    return `${
      requestParamaters.baseUrl ? requestParamaters.baseUrl : this.baseUrl
    }/${requestParamaters.controller}${
      requestParamaters.action ? `/${requestParamaters.action}` : ""
    }`;
  }

  public Get<T>(
    requestParamaters: Partial<RequestParamaters>,
    id?: string
  ): Promise<AxiosResponse<T>> {
    let endpoint = "";
    if (requestParamaters.fullEndPoint)
      endpoint = requestParamaters.fullEndPoint;
    else
      endpoint = `${this.urlBuilder(requestParamaters)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(endpoint, {
      headers: requestParamaters.headers,
    });
  }

  public Post<T>(
    requestParamaters: Partial<RequestParamaters>,
    body: Partial<T>
  ): Promise<AxiosResponse<T>> {
    let endpoint = "";
    if (requestParamaters.fullEndPoint)
      endpoint = requestParamaters.fullEndPoint;
    else endpoint = `${this.urlBuilder(requestParamaters)}`;

    return this.httpClient.post<T>(endpoint, body, {
      headers: requestParamaters.headers,
    });
  }

  public Put<T>(
    requestParamaters: Partial<RequestParamaters>,
    body: Partial<T>
  ): Promise<AxiosResponse<T>> {
    let endpoint = "";
    if (requestParamaters.fullEndPoint)
      endpoint = requestParamaters.fullEndPoint;
    else endpoint = `${this.urlBuilder(requestParamaters)}`;

    return this.httpClient.put<T>(endpoint, body, {
      headers: requestParamaters.headers,
    });
  }

  public Delete<T>(
    requestParamaters: Partial<RequestParamaters>,
    id: string
  ): Promise<AxiosResponse<T>> {
    let endpoint = "";
    if (requestParamaters.fullEndPoint)
      endpoint = requestParamaters.fullEndPoint;
    else endpoint = `${this.urlBuilder(requestParamaters)}/${id}`;

    return this.httpClient.delete<T>(endpoint, {
      headers: requestParamaters.headers,
    });
  }
}

export class RequestParamaters {
  controller?: string;
  action?: string;
  queryString?: string;

  headers?: AxiosHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
