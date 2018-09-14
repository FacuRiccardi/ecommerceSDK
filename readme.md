# SDK for the API http://ecommerce.casu-net.com.ar/apidoc/

## Resources:
So that SDK works, it's necessary the implementation of the jQuery framework in your proyect

## Installation:
Download the proyect and copy-paste the _ecommerceSDK.js_ file in your JavaScript resources folder in your proyect

## How to import it to the proyect:
Link them in your html code as you do with any other .js file.
`<script src="ecommerceSDK.js"></script>`
**Remember to change the route to the actual ecommerceSDK.js file's route**
        
## How to use it:
The proyect is development as a closure, so you use it in the following way:
`ecommerce.nameOfTheFunction(parameters, callback)`
All the function comes with a callback parameter, which is a `funcion(parameter)` that will execute when the API returns the response, _parameter_ is the body of the response in the case that the request has gone sucesfully, or a JSON with the error data in the case of a error.

## Functionalities:
### registerUser(email, password, firstname, lastname, callback)
A user will be created with the provided data. The callback's body will be a JSON with de user´s data.

**email** : string,
**password** : string,
**firstname** : string,
**lastname** : string


### authenticateUser(email, password, callback)
A token will be created for the session of the user, and it's saved as a local variable in the closure. The callback's body will be a JSON with the token.

**email**: string,
**password**: string


### init(token)
If you already have a token, you can initialize it in the closure, using this funcion. This function is the only one without a callback.

**token**: string


### getProducts(callback)
The callback's body will be a JSON with a list of all the available products.

### getCart(callback)
The callback's body will be a JSON with a list of all the products in the actual session's cart.


### addProductToCart(productId, quantity, callback)
The product specified with the id will be added to the actual sesion's cart, the quantity of times that it's defined. The callback's body will be a JSON with a list of all the products in the actual session's cart.

**productId**: string,
**quantity**: integer


### deleteProductFromCart(productId, callback, all)
The product specified with the id will be deleted from the actual session's cart. If _all_ is defined, all the existences of the product will be deleted, if _all_ is not defined, only one existence of the product will be deleted. The callback's body will be a JSON with a list of all the products in the actual session's cart.

**productId**: string,
**all**: any type of data (preferably `true`)


### getWishList(callback)
The callback's body will be a JSON with a list of all the products in the actual session's wish list.


### addProductToWishList(productId, callback)
The product specified with the id will be added to the actual session's wish list. The callbak body will be a JSON with a list of all the products in the actual sesion's wish list.

**productId**: string


### deleteProductFromWishList(idProduct, callback)
The product specified with the id will be deleted from the actual session's wish list. The callback's body will be a JSON with a list of all the products in the actual session's wish list.

**productId**: string


## Things to consider
* The functionality of a function, will work anyway eventhough the callback function doesn't, due to asynchronism of the system (As long as the parameters and the function are used correctly).