<?php

use App\Http\Controllers\User\ProfileSettings\AccountController;
use App\Http\Controllers\User\ProfileSettings\PasswordController;
use App\Http\Controllers\User\ProfileSettings\ProfileController;
use Illuminate\Support\Facades\Route;

/* Home */
Route::inertia('/', 'home/index')->name('homepage');
Route::inertia('/about', 'home/about')->name('about');

/* User Dashboard */
Route::group([
    'prefix'     => 'dashboard',
    'middleware' => ['auth', 'verified'],
    'as'         => 'dashboard.',
], function () {
    Route::inertia('/', 'dashboard/index')->name('index');

    // profile settings
    Route::prefix('profile')->as('profile.')->group(function () {
        // profile info
        Route::get('/', [ProfileController::class, 'edit'])->name('edit');
        Route::patch('/', [ProfileController::class, 'update'])->name('update');

        // change password
        Route::get('/password', [PasswordController::class, 'edit'])->name('password.edit');
        Route::patch('/password', [PasswordController::class, 'update'])->name('password.update');

        // manage account
        Route::get('/account', [AccountController::class, 'edit'])->name('account.edit')->middleware('password.confirm');
        Route::patch('/account', [AccountController::class, 'destroy'])->name('account.delete');
    });
});

require __DIR__.'/auth.php';
