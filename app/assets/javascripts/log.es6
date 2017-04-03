document.addEventListener('DOMContentLoaded', doStuff)
document.addEventListener('turbolinks:load', doStuff)

function doStuff () {
  document.getElementById('root').innerHTML = 'Hi from assets/javascripts! Yays! No turbolinks!'
  const myObj = { a: 2 }
  console.log({ ...myObj, b: 3 })
}
