//ecommerce SDK

var ecommerce = (function(){
    const url = 'http://ecommerce.casu-net.com.ar/api'

    return {
        
        registerUser: function(email, password, firstname, lastname){
            $.ajax({
                method: 'POST',
                url: url + '/users',
                dataType: 'json',
                data: {email: email, password: password, firstname: firstname, lastname: lastname}
            }).done(function(body){
                return body
            })
        },

        authenticateUser: function(email, password){
            $.ajax({
                method: 'POST',
                url: url + '/users/authenticate',
                dataType: 'json',
                data: {email: email, password: password}
            }).done(function(body){
                console.log(body)
                localStorage.setItem('token', body.token)
            })
        },

        getProducts: function(){
            $.ajax({
                method: 'GET',
                url: url + '/products'
            }).done(function(body){
                return body
            })
        },

        getCart: function(){
            $.ajax({
                method: 'GET',
                url : url + '/cart',
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            }).done(function(body){
                return body
            })
        },

        addProductToCart: function(productId, qty){
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
                return body
            })
        },

        deleteProductFromCart: function(productId, all){
            $.ajax({
                method: 'DELETE',
                url : url + '/cart/' + productId + ((all != null)? '?all=1': ''),
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            }).done(function(body){
                return body
            })
        },
        
        getWishList: function(){
            $.ajax({
                method: 'GET',
                url: url + '/whishlist',
                headers:{
                    'x-access-token': localStorage.getItem('token')
                }
            }).done(function(body){
                return body;
            })
        },
        
        addItemToWishList: function(productId){
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
                return body
            })
        },
        
        deleteItemFromWishList: function(productId){
            $.ajax({
                method: 'DELETE',
                url: url + '/whishlist/' + productId,
                headers: {
                    'x-access-token': localStorage.getItem('token')
                }
            }).done(function(body){
                return body
            })
        }
    }
})();