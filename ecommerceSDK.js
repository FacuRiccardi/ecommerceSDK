//ecommerce SDK

const url = 'http://ecommerce.casu-net.com.ar/api'


function registerUser(email, password, firstname, lastname){
    $.ajax({
        method: 'POST',
        url: url + '/users',
        dataType: 'json',
        data: {email: email, password: password, firstname: firstname, lastname: lastname}
    }).done(function(body){
        console.log(body)
    })
}

function authenticateUser(email, password){
    $.ajax({
        method: 'POST',
        url: url + '/users/authenticate',
        dataType: 'json',
        data: {email: email, password: password}
    }).done(function(body){
        console.log(body)
        localStorage.setItem('token', body.token)
    })
}

function getProducts(){
    $.ajax({
        method: 'GET',
        url: url + 'products'
    }).done(function(body){
        console.log(body)
        return body
    })
}

function getCart(){

    $.ajax({
        method: 'GET',
        url : url + '/cart',
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    }).done(function(body){
        console.log(body)
        return body
    })
}

function addProductToCart(productId, qty){
    $.ajax({
        method: 'POST',
        url : url + '/cart',
        headers: {
            'x-access-token': localStorage.getItem('token'),
			'Content-type': 'application/json'
        },
        data: JSON.stringify({
            'productId': productId,
            'qty': parseInt(qty)
        })
    }).done(function(body){
        console.log(body)
        return body
    })
}

function deleteProductFromCart(productId, all){
    $.ajax({
        method: 'DELETE',
        url : url + '/cart/' + productId + ((all != null)? '?all=1': ''),
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    }).done(function(body){
        console.log(body)
        return body
    })
}

function getWishList(){
    $.ajax({
        method: 'GET',
        url: url + '/whishlist',
        headers:{
            'x-access-token': localStorage.getItem('token')
        }
    }).done(function(body){
        console.log(body);
        return body;
    })
}

function addItemToWishList(productId){
    $.ajax({
        method: 'POST',
        url: url + '/whishlist',
        headers: {
            'x-access-token': localStorage.getItem('token')
        },
        data: {
            'productId': productId
        }
    }).done(function(body){
        console.log(body)
        return body
    })
}

function deleteItemFromWishList(productId){
    $.ajax({
        method: 'DELETE',
        url: url + '/whishlist/' + productId,
        headers: {
            'x-access-token': localStorage.getItem('token')
        }
    }).done(function(body){
        console.log(body)
        return body
    })

}