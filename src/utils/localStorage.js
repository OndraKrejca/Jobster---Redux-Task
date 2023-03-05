export const addToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const removeFromLocalStorage = () => {
  localStorage.removeItem('user')
}

export const getFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  const result = user ? JSON.parse(user) : null
  return result
}
