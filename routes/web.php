<?php

use App\Http\Controllers\User\Account\PasswordController;
use App\Http\Controllers\User\Account\ProfileController;
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

    // account
    Route::prefix('account')->as('account.')->group(function () {
        // profile info
        Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

        // change password
        Route::get('/password', [PasswordController::class, 'edit'])->name('password.edit');
        Route::patch('/password', [PasswordController::class, 'update'])->name('password.update');
    });
});

require __DIR__.'/auth.php';
