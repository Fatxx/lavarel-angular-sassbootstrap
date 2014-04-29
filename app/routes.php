<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/


Route::get('/', function()
{
    // Route to Angular.js
    return View::make('index');

});


// Route Group API
Route::group(array('prefix' => 'api'), function()
{
    Route::resource('photo', 'PhotoController',
            array('except' => array('create', 'edit')));
});


Route::group(array('prefix' => 'service'), function()
{
    Route::resource('authenticate', 'AuthenticationController',
                  array('only' =>  array('index', 'store')));
});
