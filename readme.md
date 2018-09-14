# SDK para la API http://ecommerce.casu-net.com.ar/apidoc/

### Recursos:
Es necesario **jQuery** para que este sdk funcione.

### Instalacion:
Descarga el proyecto y copia el archivo _ecommerceSDK.js_ dentro de la carpeta de recursos JavaScript en tu proyecto

### Como importarlo a mi proyecto:
Linkealo en tu html como a cualquier otro archivo .js como te muestro a continuacion:
`<script src="ecommerceSDK.js"></script>`
**Recuerda cambiar la ruta a la ruta actual en donde se aloja ecommerceSDK.js**
        
### Como usarlo:
El proyecto se desarrollo como una closure, entonces se la usa de la siguiente manera
`ecommerce.nombreDeLaFuncion(parametros, callback)`
Toda las funciones vienen con un parametro de callback, que sera una `funcion(parametro)` que se ejecutara cuando la api devuelva la respuesta, _parametro_ es el body del response en caso de que la request haya sucecido correctamente, o un JSON con los datos del error en caso de que haya algun fallo

### Funcionalidades:
#### registerUser(email, password, firstname, lastname, callback)
Se creara un usuario con los datos brindados. El body del callback seria un JSON con los datos del usuario

**email** : string,
**password** : string,
**firstname** : string,
**lastname** : string


#### authenticateUser(email, password, callback)
Se creara un token para la sesion del usuario y se guarda en una variable local de la closure. El body del callback seria un JSON con el token.

**email**: string,
**password**: string


#### init(token)
Si usted ya posee una token, puede inicializarla usando esta funcion, solo esta funcion no tiene un _callback_

**token**: string


#### getProducts(callback)
El body del callback seria un JSON con la lista de los productos


#### getCart(callback)
El body del callback seria un JSON con la lista de productos en el carrito de la sesion actual.


#### addProductToCart(idProducto, cantidad, callback)
Se añade el producto especificado por id, al carrito de la sesion actual, la cantidad de veces que se define. El body del callback seria un JSON con la lista de productos en el carrito de la sesion actual.

**idProducto**: string,
**cantidad**: integer


#### deleteProductFromCart(idProducto, callback, all)
Se elimina el producto del carrito de la sesion actual. Si _all_ es definido, se borraran todas las existencias del producto del carrito, si no es definido se borrara solo una existencia. El body del callback seria un JSON con la lista de productos en el carrito de la sesion actual.

**idProducto**: string,
**all**: cualquier tipo de dato (preferentemente `true`)


#### getWishList(callback)
El body del callback seria un JSON con la lista de productos en la Wish List de la sesion actual.


#### addProductToWishList(idProducto, callback)
Se añade el producto especificado por id, a la Wish List de la sesion actual. El body del callback seria un JSON con la lista de productos en la Wish List de la sesion actual.

**idProducto**: string


#### deleteProductFromWishList(idProduct, callback)
Se elimina el producto de la Wish List de la sesion actual. El body del callback seria un JSON con la lista de productos en la Wish List de la sesion actual.
