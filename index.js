const divMotos = document.getElementById('divMotos')

//clase

class Moto {
    constructor(id, nombre, precio, image) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.image = image
    }
}
const motos = [
    new Moto(1, 'Yamaha IBR 125', 1300,'img/Yamaha_IBR.jpg'),
    new Moto(2, 'Bajaj Rouser 125', 1500,'img/Rouser_125.jpg'),
    new Moto(3, 'Bajaj Dominar 400', 2500,'img/Yamaha_IBR.jpg'),
    new Moto(4, 'Yamaha FZ 150', 1700,'img/Yamaha_IBR.jpg'),
    new Moto(5, 'Honda Wave 110', 900,'img/Yamaha_IBR.jpg'),
    new Moto(6, 'Honda XR 150', 1900,'img/Yamaha_IBR.jpg'),
    new Moto(7, 'Ninja Kawasaki 400', 5000,'img/Yamaha_IBR.jpg'),
    new Moto(8, 'Ninja Kawasaki 650', 7000,'img/Yamaha_IBR.jpg'),
    new Moto(9, 'Kymco Downtown 350', 4000,'img/Yamaha_IBR.jpg'),
    new Moto(10, 'Honda Twister 250', 3300,'img/Yamaha_IBR.jpg'),
]

motos.forEach(m => {
    divMotos.innerHTML += `<div class="col-sm-6 mb-3 mb-sm-0 cardMoto">
    <div class="card">
    <img src="${m.image}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${m.nombre}</h5>
        <p class="card-text">${m.precio}</p>
        <button id=${m.id} class="btn btn-primary">AGREGAR</button>
      </div>`
})

const carrito = []

const agregarBotones = document.querySelectorAll('.btn-primary')


agregarBotones.forEach(btn => {
    btn.onclick = () => {
        const moto = motos.find(m => m.id === parseInt(btn.id))
        const motoCarrito = {
            id: moto.id,
            nombre: moto.nombre,
            precio: moto.precio,
            cantidad: 1,

        }

        const motoEnCarrito = carrito.find(m=>m.id=== motoCarrito.id)
        if (!motoEnCarrito) {
            carrito.push(motoCarrito)
        } else{
            motoEnCarrito.cantidad++
        }

        console.log(carrito)
    }
})


const thead = document.querySelector('#thead')
const tbody = document.querySelector('#tbody')
const finalizarBoton = document.querySelector('#finCompra')
const parrafoPrecioTotal = document.querySelector('#precioTotal')

finalizarBoton.onclick = ()=>{
    divMotos.remove()
    finalizarBoton.remove()
    thead.innerHTML = `<tr>
    <th scope="col">Moto</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Total</th>
  </tr>
` 
let totalCompra = 0
carrito.forEach(m=>{
    totalCompra += m.cantidad*m.precio
    tbody.innerHTML += ` <tr class="table-success">
    <td>${m.nombre}</td>
    <td>${m.cantidad}</td>
    <td>${m.cantidad*m.precio}</td>
  </tr>`
}
)

parrafoPrecioTotal.innerText = `El total de tu compra es ${totalCompra}`

}