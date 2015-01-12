'use strict';

/**
 * 0.1.1
 * Deferred load js/css file, used for ui-jq.js and Lazy Loading.
 * 
 * @ flatfull.com All Rights Reserved.
 * Author url: http://themeforest.net/user/flatfull
 */

angular.module('ui.load', [])

	.factory('catalogService', ['$http', '$q', function ($http, $q) {
			 function getAll() {
				 var deferred = $q.defer();
				 return $http.get(serviceBase + 'odata/Catalogues').success(function (response) {
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });

				 return deferred.promise;
			 };
			 function getCatalogComplex(catalogId) {
				 var deferred = $q.defer();
				 return $http.get(serviceBase + 'odata/Catalogues(' + catalogId + ')').success(function (response) {
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });

				 return deferred.promise;
			 };
			 function saveCatalog(catalog) {
				 var deferred = $q.defer();
				 return $http.post(serviceBase + 'odata/Catalogues', catalog).success(function (response) {
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });

				 return deferred.promise;
			 };
			 function updateCatalog(catalog) {
				 debugger
				 var deferred = $q.defer();
				 return $http.post(serviceBase + 'odata/Catalogues/(' + catalog.id + ')', catalog).success(function (response) {
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });

				 return deferred.promise;
			 };
			 function saveModule(module) {
				 var deferred = $q.defer();
				 return $http.post(serviceBase + 'odata/Modules', module).success(function (response) {
				     //$scope.loadTreeCatalog($scope.IdCatalog);
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });

				 return deferred.promise;
			 };
			 function saveCategory(category) {
				 var deferred = $q.defer();
				 return $http.post(serviceBase + 'odata/Categories', category).success(function (response) {
				     //$scope.loadTreeCatalog($scope.IdCatalog);
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });

				 return deferred.promise;
			 };
			 function removeCatalog(id) {
				 var deferred = $q.defer();
				 return $http.delete(serviceBase + 'odata/Catalogues(' + id + ')').success(function (response) {
					 deferred.resolve(response);
				 }, function (err) {
					 deferred.reject(err);
				 });
				 return deferred.promise;
			 };
			 function removeCategory(id) {
			     var deferred = $q.defer();
			     return $http.delete(serviceBase + 'odata/Categories(' + id + ')').success(function (response) {
			         //$scope.loadTreeCatalog($scope.IdCatalog);
			         deferred.resolve(response);
			     }, function (err) {
			         deferred.reject(err);
			     });
			     return deferred.promise;
			 };
			 function removeModule(id) {
			     var deferred = $q.defer();
			     return $http.delete(serviceBase + 'odata/Modules(' + id + ')').success(function (response) {
			         //$scope.loadTreeCatalog($scope.IdCatalog);
			         deferred.resolve(response);
			     }, function (err) {
			         deferred.reject(err);
			     });
			     $scope.loadTreeCatalog($scope.IdCatalog);
			     return deferred.promise;
			 };
			 return {
				 getAll: getAll,
				 saveCatalog: saveCatalog,
				 updateCatalog: updateCatalog,
				 saveModule: saveModule,
				 saveCategory: saveCategory,
				 removeCatalog: removeCatalog,
				 removeCategory: removeCategory,
				 removeModule: removeModule,
				 getCatalogComplex: getCatalogComplex
			 };
	   }])
	  .factory('accountService', ['$http', '$q', function ($http, $q) {
		function getAll() {
			var deferred = $q.defer();
			return $http.get(serviceBase + 'api/account/users', { cache: false }).success(function (response) {
				deferred.resolve(response);
			}, function (err) {
				deferred.reject(err);
			});

			return deferred.promise;
		};

		function getUser(id) {
		    var deferred = $q.defer();
		    return $http.get(serviceBase + 'api/account/' + id).success(function (response) {		
		        deferred.resolve(response);
		    }, function (err) {
		        deferred.reject(err);
		    });

		    return deferred.promise;
		};

		function saveRegistration(registration) {
			var deferred = $q.defer();
			return $http.post(serviceBase + 'api/account/register', registration).success(function (response) {
				deferred.resolve(response);
			}, function (err) {
				deferred.reject(err);
			});

			return deferred.promise;
		};

		function updateUser(account) {
		    var deferred = $q.defer();
		    return $http.put(serviceBase + 'api/account/', account).success(function (response) {
		        deferred.resolve(response);
		    }, function (err) {
		        deferred.reject(err);
		    });

		    return deferred.promise;
		};

		


		function removeUser(user) {
			var users = {
				Active: true,
				ApplicationUserId: user.ApplicationUserId,
				Id: user.Id,
				Name: user.Name,
				Surname: user.Surname
			};
			var deferred = $q.defer();
			return    $http.post  (serviceBase + 'api/account/delete', users, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {
			//return $http.delete(serviceBase + 'api/account/delete', users, { headers: { 'content-type: application/json' } }).success(function (response) {
				deferred.resolve(response);
			}, function (err) {
				deferred.reject(err);
			});
			return deferred.promise;
		};

		return {
			saveRegistration: saveRegistration,
			getAll: getAll,
			removeUser: removeUser,
			getUser: getUser,
			updateUser: updateUser
		};
	  }])
	.factory('productService', ['$http', '$q', function ($http, $q) {
		 function getAll() {
			 var deferred = $q.defer();
			// return $http.get(serviceBase + 'odata/Products', {cache:true}).success(function (response) {
			 return $http.get(serviceBase + 'odata/Products').success(function (response) {
				 deferred.resolve(response);
			 }, function (err) {
				 deferred.reject(err);
			 });

			 return deferred.promise;
		 };

		 function saveProduct(product) {
		   var deferred = $q.defer();
			 return $http.post(serviceBase + 'odata/Products', product).success(function (response) {				 
				 deferred.resolve(response);
			 }, function (err) {
				 deferred.reject(err);
			 });
			 return deferred.promise;
		 };

		 function removeProduct(id) {
			 var deferred = $q.defer();
			 return $http.delete(serviceBase + 'odata/Products(' + id + ')').success(function (response) {
				 deferred.resolve(response);
			 }, function (err) {
				 deferred.reject(err);
			 });
			 return deferred.promise;
		 };

		 return {
			 saveProduct: saveProduct,
			 getAll: getAll,
			 removeProduct : removeProduct 
		 };
	 }])
	.factory('authInterceptorService', ['$q', '$injector', '$location', 'localStorageService', function ($q, $injector, $location, localStorageService) {
		var authInterceptorServiceFactory = {};

		var _request = function (config) {
			config.headers = config.headers || {};
	   
			var authData = localStorageService.get('authorizationData');
			if (authData) {
				config.headers.Authorization = 'Bearer ' + authData.token;
			}

			return config;
		}

		var _responseError = function (rejection) {
			if (rejection.status === 401) {
				var authService = $injector.get('authService');
				var authData = localStorageService.get('authorizationData');

				if (authData) {
					if (authData.useRefreshTokens) {
						$location.path('/refresh');
						return $q.reject(rejection);
					}
				}
				authService.logOut();
				$location.path('/login');
			}
			return $q.reject(rejection);
		}

		authInterceptorServiceFactory.request = _request;
		authInterceptorServiceFactory.responseError = _responseError;

		return authInterceptorServiceFactory;
	}])
	.factory('authService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {
		var serviceBase = ngAuthSettings.apiServiceBaseUri;
		var authServiceFactory = {};

		var _authentication = {
			isAuth: false,
			username: "",
			useRefreshTokens: true
		};

		var _login = function (loginData) {
			var data = "grant_type=password&username=" + loginData.username + "&password=" + loginData.password;
			data = data + "&client_id=" + ngAuthSettings.clientId;
			var deferred = $q.defer();

			$http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).success(function (response) {

				if (loginData.useRefreshTokens) {
					localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.username, refreshToken: response.refresh_token, useRefreshTokens: true });
				}
				else {
					localStorageService.set('authorizationData', { token: response.access_token, userName: loginData.username, refreshToken: "", useRefreshTokens: false });
				}

				_authentication.isAuth = true;
				_authentication.username = loginData.username;
				_authentication.useRefreshTokens = loginData.useRefreshTokens;

				deferred.resolve(response);

			}).error(function (err, status) {
				_logOut();
				deferred.reject(err);
			});

			return deferred.promise;

		};

		var _logOut = function () {

			localStorageService.remove('authorizationData');

			_authentication.isAuth = false;
			_authentication.username = "";
			_authentication.useRefreshTokens = false;

		};

		var _fillAuthData = function () {

			var authData = localStorageService.get('authorizationData');
			if (authData) {
				_authentication.isAuth = true;
				_authentication.username = authData.userName;
				_authentication.useRefreshTokens = authData.useRefreshTokens;
			}

		};
		//authServiceFactory.saveRegistration = _saveRegistration;
		
		authServiceFactory.login = _login;
		authServiceFactory.logOut = _logOut;
		authServiceFactory.fillAuthData = _fillAuthData;
		authServiceFactory.authentication = _authentication;
	   // authServiceFactory.refreshToken = _refreshToken;

		//authServiceFactory.obtainAccessToken = _obtainAccessToken;
		//authServiceFactory.externalAuthData = _externalAuthData;
		//authServiceFactory.registerExternal = _registerExternal;

		return authServiceFactory;
	}])
	.service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {

		var loaded = [];
		var promise = false;
		var deferred = $q.defer();

		/**
		 * Chain loads the given sources
		 * @param srcs array, script or css
		 * @returns {*} Promise that will be resolved once the sources has been loaded.
		 */
		this.load = function (srcs) {
			srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
			var self = this;
			if(!promise){
				promise = deferred.promise;
			}
	  angular.forEach(srcs, function(src) {
		promise = promise.then( function(){
			return src.indexOf('.css') >=0 ? self.loadCSS(src) : self.loadScript(src);
		} );
	  });
	  deferred.resolve();
	  return promise;
		}

		/**
		 * Dynamically loads the given script
		 * @param src The url of the script to load dynamically
		 * @returns {*} Promise that will be resolved once the script has been loaded.
		 */
		this.loadScript = function (src) {
			if(loaded[src]) return loaded[src].promise;

			var deferred = $q.defer();
			var script = $document[0].createElement('script');
			script.src = src;
			script.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			script.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].body.appendChild(script);
			loaded[src] = deferred;

			return deferred.promise;
		};

		/**
		 * Dynamically loads the given CSS file
		 * @param href The url of the CSS to load dynamically
		 * @returns {*} Promise that will be resolved once the CSS file has been loaded.
		 */
		this.loadCSS = function (href) {
			if(loaded[href]) return loaded[href].promise;

			var deferred = $q.defer();
			var style = $document[0].createElement('link');
			style.rel = 'stylesheet';
			style.type = 'text/css';
			style.href = href;
			style.onload = function (e) {
				$timeout(function () {
					deferred.resolve(e);
				});
			};
			style.onerror = function (e) {
				$timeout(function () {
					deferred.reject(e);
				});
			};
			$document[0].head.appendChild(style);
			loaded[href] = deferred;

			return deferred.promise;
		};
}]);