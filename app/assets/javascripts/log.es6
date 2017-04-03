document.addEventListener('DOMContentLoaded', () => {
  const myObj = { a: 2 }
  document.getElementById('root').innerHTML = 'Hi from assets/javascripts! Yays! No turbolinks!'
  console.log({ ...myObj, b: 3 })
})
