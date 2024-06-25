export const ObjectToFormData = (jsonData: Record<string, any>): FormData => {
  const formData = new FormData()

  Object.keys(jsonData).forEach(key => {
    const value = jsonData[key]

    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      formData.append(key, String(value))
    } else if (Array.isArray(value)) {
      // Handle arrays (assuming array elements are strings or numbers)
      value.forEach((item, index) => {
        formData.append(`${key}[${index}]`, String(item))
      })
    } else if (value instanceof File) {
      // Handle File objects
      formData.append(key, value)
    } else {
      // Handle other types (object, null, undefined, etc.)
      formData.append(key, JSON.stringify(value))
    }
  })

  return formData
}
