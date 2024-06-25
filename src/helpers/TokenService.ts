const TOKEN_KEY = 'access_token'

// Token'i localStorage'de saklayan fonksiyon
const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

// localStorage'den token'i getiren fonksiyon
const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY)
}

// localStorage'den token'i silen fonksiyon
const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

const TokenService = {
  saveToken,
  getToken,
  removeToken
}

export default TokenService