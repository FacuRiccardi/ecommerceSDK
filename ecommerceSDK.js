//ecommerce SDK
var ecommerce = (function() {
	const url = 'http://ecommerce.casu-net.com.ar/api'
	var token;

	var apiCall = function(method, resource, headers, data, callback, skipAuth, done) {
		var h = headers || {},
			d = done || function(b) {
				callback(b)
			};
		if (!skipAuth) {
			h['x-access-token'] = token;
		}
		$.ajax({
			method: method,
			url: url + resource,
			headers: h,
			data: data
		}).done(function(body) {
			d(body);
		}).error(function(err) {
			callback(err.responseJSON);
		});
	};

	return {

		init: function(t) {
			token = t;
		},

		registerUser: function(email, password, firstname, lastname, callback) {
			var data = {
				email: email,
				password: password,
				firstname: firstname,
				lastname: lastname
			};
			apiCall('POST', '/users', null, data, callback, true);
		},

		authenticateUser: function(email, password, callback) {
			var data = {
					email: email,
					password: password
				},
				done = function(b) {
					token = b.token;
					callback(b)
				};
			apiCall('POST', '/users/authenticate', null, data, callback, true, done);
		},

		getProducts: function(callback) {
			apiCall('GET', '/products', null, null, callback, true);
		},

		getCart: function(callback) {
			apiCall('GET', '/cart', null, null, callback);
		},

		addProductToCart: function(productId, qty, callback) {
			var headers = {
					'Content-type': 'application/json'
				},
				data = JSON.stringify({
					'productId': productId,
					'qty': parseInt(qty)
				});
			apiCall('POST', '/cart', headers, data, callback);
		},

		deleteProductFromCart: function(productId, callback, all) {
			var urlAux = '/cart/' + productId + ((all != null) ? '?all=1' : '');
			apiCall('DELETE', urlAux, null, null, callback);
		},

		getWishList: function(callback) {
			apiCall('GET', '/whishlist', null, null, callback);
		},

		addProductToWishList: function(productId, callback) {
			var data = {
				productId: productId
			};
			apiCall('POST', '/whishlist', null, data, callback);
		},

		deleteProductFromWishList: function(productId, callback) {
			var urlAux = '/whishlist/' + productId;
			apiCall('DELETE', urlAux, null, null, callback);
		}
	}
})();