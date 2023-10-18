
export const Rcords = () => {
  return (
    fetch('https://dummyjson.com/carts/1')
    .then(res => res.json())
  )
}


export const Getrevenue = () => {
  return (
    fetch('https://dummyjson.com/carts')
    .then(res => res.json()) 
    )           
}


export const Getproducts = () => {
  return (
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    )
    
}
export const Getorders = () => {
  return (
    fetch('https://dummyjson.com/carts/1')
    .then(res => res.json())
    )
    
}
export const Getusers = () => {
  return (
    fetch('https://dummyjson.com/users')
    .then(res => res.json())
    )
    
}
