//ecommerce SDK

var ecommerce = (function(){
    const url = 'http://ecommerce.casu-net.com.ar/api'
    var token;
    
    return {

        init: function(token){
            this.token = token;
        },
        
        registerUser: function(email, password, firstname, lastname, callback){
            $.ajax({
                method: 'POST',
                url: url + '/users',
                data: {email: email, password: password, firstname: firstname, lastname: lastname}
            }).done(function(body){
                callback(body);
            })
        },

        authenticateUser: function(email, password, callback){
            var contexto = this;
            $.ajax({
                method: 'POST',
                url: url + '/users/authenticate',
                data: {email: email, password: password}
            }).done(function(body){
                contexto.token = body.token;
                callback(body);
            })
        },

        getProducts: function(callback){
            $.ajax({
                method: 'GET',
                url: url + '/products'
            }).done(function(body){
                callback(body);
            })
        },

        getCart: function(callback){
            $.ajax({
                method: 'GET',
                url : url + '/cart',
                headers: {
                    'x-access-token': this.token
                }
            }).done(function(body){
                callback(body);
            })
        },

        addProductToCart: function(productId, qty, callback){
            $.ajax({
                method: 'POST',
                url : url + '/cart',
                headers: {
                    'x-access-token': this.token,
                    'Content-type': 'application/json'
                },
                data: JSON.stringify({
                    'productId': productId,
                    'qty': parseInt(qty)
                })
            }).done(function(body){
                callback(body);
            })
        },

        deleteProductFromCart: function(productId, all, callback){
            $.ajax({
                method: 'DELETE',
                url : url + '/cart/' + productId + ((all != null)? '?all=1': ''),
                headers: {
                    'x-access-token': this.token
                }
            }).done(function(body){
                callback(body);
            })
        },
        
        getWishList: function(callback){
            $.ajax({
                method: 'GET',
                url: url + '/whishlist',
                headers:{
                    'x-access-token': this.token
                }
            }).done(function(body){
                callback(body);
            })
        },
        
        addItemToWishList: function(productId, callback){
            $.ajax({
                method: 'POST',
                url: url + '/whishlist',
                headers: {
                    'x-access-token': this.token
                },
                data: {
                    'productId': productId
                }
            }).done(function(body){
                callback(body);
            })
        },
        
        deleteItemFromWishList: function(productId, callback){
            $.ajax({
                method: 'DELETE',
                url: url + '/whishlist/' + productId,
                headers: {
                    'x-access-token': this.token
                }
            }).done(function(body){
                callback(body);
            })
        }
    }
})();