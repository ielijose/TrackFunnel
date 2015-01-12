<?php

Route::group(['prefix' => 'api'], function () {

	/* Auth Links */
	Route::get('/login', ['as' => 'login', 'uses' => 'AuthController@login']);
	Route::post('/login', ['as' => 'login', 'uses' => 'AuthController@login']);
	Route::get('/forgot', ['uses' => 'AuthController@showForgot']);
	Route::post('/forgot', ['uses' => 'RemindersController@postRemind']);
	Route::get('/forgot/{token}', ['uses' => 'RemindersController@getReset']);
	Route::post('/forgot/reset', ['uses' => 'RemindersController@postReset']);
	Route::get('logout', ['uses' => 'AuthController@logout']);
	/* :Auth Links */

});