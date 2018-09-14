//ecommerce SDK

var ecommerce = (function(){
    const url = 'http://ecommerce.casu-net.com.ar/api'
    var token;

    var apiCall = function(method, resource, headers, data, callback, skipAuth){
        var h = headers || {}
        if(!skipAuth){
            h['x-access-token'] = token;
        }
        $.ajax({
            method: method,
            url: url + resource,
            headers: h,
            data: data
        }).done(function(body){
            callback(body);
        }).error(function(err){
            callback(err.responseJSON);
        })
    };
    
    return {

        init: function(t){
            token = t;
        },
        
        registerUser: function(email, password, firstname, lastname, callback){
            var data = {email: email, password: password, firstname: firstname, lastname: lastname}
            apiCall('POST', '/users', null, data, callback, true)
        },

        authenticateUser: function(email, password, callback){            
            $.ajax({
                method: 'POST',
                url: url + '/users/authenticate',
                data: {email: email, password: password}
            }).done(function(body){
                token = body.token;
                callback(body);
            }).error(function(err){
                callback(err.responseJSON);
            })
        },

        getProducts: function(callback){
            apiCall('GET', '/products', null, null, callback, true)
        },

        getCart: function(callback){
            apiCall('GET', '/cart', null, null, callback);
        },

        addProductToCart: function(productId, qty, callback){
            var headers = {
                    'Content-type': 'application/json'
                },
                data = JSON.stringify({
                    'productId': productId,
                    'qty': parseInt(qty)
                });
            apiCall('POST', '/cart', headers, data, callback);
        },

        deleteProductFromCart: function(productId, callback, all){
            var urlAux = '/cart/' + productId + ((all != null)? '?all=1': '');
            apiCall('DELETE', urlAux, null, null, callback);
        },
        
        getWishList: function(callback){
            apiCall('GET', '/whishlist', null, null, callback);
        },
        
        addItemToWishList: function(productId, callback){
            var data = {
                    productId: productId
                }
            apiCall('POST', '/whishlist', null, data, callback);
        },
        
        deleteItemFromWishList: function(productId, callback){
            var urlAux = '/whishlist/' + productId;
            apiCall('DELETE', urlAux, null, null, callback);
        }
    }
})();