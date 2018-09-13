SDK para la API http://ecommerce.casu-net.com.ar/apidoc/

Recursos:
    Es necesario jQuery para que este sdk funcione.

Instalacion:
    Descarga el proyecto y copia el archivo ecommerceSDK.js dentro de la carpeta de recursos JavaScript en tu proyecto

Como importarlo a mi proyecto:
    Linkealo en tu html como a cualquier otro archivo .js como te muestro a continuacion:
        <script src="ecommerceSDK.js"></script>
    Recuerda cambiar la ruta a la ruta actual en donde se aloja ecommerceSDK.js
        
Como usarlo:
    ecommerce.nombreDeLaFuncion(parametros)

Funcionalidades:

    registrarUsuario(email, password, firstname, lastname)
        email: dato tipo String
        password: dato tipo String
        firstname: dato tipo String
        lastname: dato tipo String
    Esta funcion crea un usuario, con los respectivos datos

    authenticateUser(email, password)
        email: dato tipo String
        password: dato tipo String
    Esta funcion identifica a un usuario, y guarda en el local storage una token, llamada 'token'

    getProducts()
    Esta funcion devuelve la lista de productos disponibles, en forma de array de objetos

    getCart()
    **
    Esta funcion devuelve el carrito del usuario identificado actualmente

    addProductToCart(productId, qty)
        productId: dato tipo String
        qty: dato tipo Integer
    **
    Esta funcion añade el producto(productId) al carrito. La cantidad(qty), es añadida a la cantidad actual si es que el producto ya existia o es seteada si no

    deleteProductFromCart(productId, all)
        productId: dato tipo String
        all: 1
    **
    Esta funcion borra un producto(productId) del carrito. Si no se especifica 'all', decresera la cantidad de ese producto 1 vez, si se especifica, borrara el producto completo.

    getWishList()
    **
    Esta funcion devuelve la WishList del usuario identificado

    addItemToWishList(productId)
        productId: dato tipo String
    **
    Esta funcion añade un producto(productId) a la WishList

    deleteItemFromWishList(prductId)
        productId: dato tipo String
    **
    Esta funcion elimina un producto(productId) de la WishList
    
    
    (Las funciones con **, necesitan que un usuario se haya identificado previamente para funcionar)

