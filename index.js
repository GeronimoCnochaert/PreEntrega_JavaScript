//Nombre y Apellido
const titulo = document.getElementById('titulo')
const inputNombre = document.getElementById('nombre')
const inputApellido = document.getElementById('apellido')
const formulario = document.getElementById('formulario')

formulario.onsubmit = (e) =>{
    e.preventDefault()
    const datosUsuario = {
        nombre: inputNombre.value,
        apellido: inputApellido.value,
    }
    localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario))
    formulario.remove()
    titulo.innerText = `Bienvenido ${datosUsuario.nombre} ${datosUsuario.apellido} a Tienda Gero`
} 

// Storage

const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'))
if(datosUsuario){
    formulario.remove()
    titulo.innerText = `Bienvenido ${datosUsuario.nombre} ${datosUsuario.apellido} a Tienda Gero`
}


// fetch para todos los productos
const divProductos = document.getElementById('productos')
const botonFinalizar = document.getElementById('finalizar')


const fetchProductos = async () => {
    const productosApi = await fetch('https://fakestoreapi.com/products')
    const productosJSON = await productosApi.json()
    return productosJSON
}

// fetch para un los producto
const fetchUnProducto = async (id) => {
    const productApi = await fetch(`https://fakestoreapi.com/products/${id}`)
    const productJSON = await productApi.json()
    return productJSON
}


// funcion para extraer todos los productos

const extraerProductos = async () => {
    const productos = await fetchProductos()
    productos.forEach(element => {
        const { title, id, price, category, image } = element
        divProductos.innerHTML += `<div class="card cardProducts" style="width: 10rem;">
        <img src=${image} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${category}</p>
          <button type="button" class="btn btn-outline-primary" id=${id} onclick="agregarProducto(${id})">AGREGAR POR $${price}</button>
          <button type="button" class="btn btn-outline-danger" id=${id} onclick="eliminarProducto(${id})">QUITAR</button>
        </div>
      </div>`
    });
}

extraerProductos()
// carrito
let carrito = []

// agregar productos
const agregarProducto = async (id) => {
    const product = await fetchUnProducto(id)
    const buscarProdCarrito = carrito.find(e => e.id === product.id)
    if (!buscarProdCarrito) {
        carrito.push({
            id: product.id,
            name: product.title,
            cantidad: 1,
            price: product.price
        })
    } else {
        buscarProdCarrito.cantidad++
    }
    msjAgregarProducto()
    console.log(carrito)
}

// eliminar productos
const eliminarProducto = (id) => {
    const buscarProdCarrito = carrito.find(e => e.id === id)
    if (!buscarProdCarrito) {
        msjCeroProducto()
    }
    else {
        if (buscarProdCarrito.cantidad === 1) {

            carrito = carrito.filter((e) => e.id !== id)
        } else {
            buscarProdCarrito.cantidad--
        }
        msjEliminarProducto()
    }
    console.log(carrito)
}

// mensaje de confirmacion de seleccion de producto  
const msjAgregarProducto = () => {
    Swal.fire({
        text: 'Haz agregado el producto seleccionado',
        timer: 1500,
        icon: 'success'
    })
}

// mensaje de confirmacion de eliminacion de producto
const msjEliminarProducto = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas seguro de eliminar el producto seleccionado?',
        text: "No vas a poder recuperarlo!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminalo!',
        cancelButtonText: 'No, quiero mantenerlo!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Tu producto ha sido eliminado.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu producto se ha conservado :)',
            'error'
          )
        }
      })
}

// mensaje de no hay producto para eliminar
const msjCeroProducto = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No tienes el producto seleccionado en tu carrito!',
      })
}

// Listado de productos elegidos / Final de la compra
const thead = document.querySelector('#thead')
const tbody = document.querySelector('#tbody')
const finalizarBoton = document.querySelector('#finCompra')
const parrafoPrecioTotal = document.querySelector('#precioTotal')

finalizarBoton.onclick = ()=>{
    divProductos.remove()
    finalizarBoton.remove()
    thead.innerHTML = `<tr>
    <th scope="col">Producto</th>
    <th scope="col">Cantidad</th>
    <th scope="col">Total</th>
  </tr>
` 
let totalCompra = 0
carrito.forEach(e=>{
    totalCompra += e.cantidad*e.price
    tbody.innerHTML += ` <tr class="table-success">
    <td>${e.name}</td>
    <td>${e.cantidad}</td>
    <td>${e.cantidad*e.price}</td>
  </tr>`
}
)   

parrafoPrecioTotal.innerText = `El total de tu compra es ${totalCompra}`

}