<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/todo', function () {
    return view('welcome');
});
Route::get('/mcdo', function () {
    return view('welcome');
});
Route::get('/timer', function () {
    return view('welcome');
});
Route::get('/notes', function () {
    return view('welcome');
});
Route::get('/notes/create', function () {
    return view('welcome');
});
Route::get('/planning', function () {
    return view('welcome');
});
