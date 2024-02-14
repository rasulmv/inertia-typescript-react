<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    /**
     * A list of error messages.
     *
     * @var array<int, string>
     */
    protected $messages = [
        500 => [
            'title' => 'Something went wrong',
            'description' => "Our servers could not handle your request. Don't worry, our development team was already notified. Try refreshing the page.",
        ],
        503 => [
            'title' => 'Service unavailable',
            'description' => "Don't worry, our development team is already working on a fix. Refresh the page or try again later.",
        ],
        404 => [
            'title' => 'Page not found',
            'description' => "The page you're looking for doesn't exist. You may have misstyped the address or the page may have moved.",
        ],
        403 => [
            'title' => 'Not authorized',
            'description' => "Looks like you don't have permission to access this page. Please contact the website administrator.",
        ],
    ];

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);

        $status = $response->getStatusCode();

        if (! array_key_exists($status, $this->messages)) {
            return $response;
        }

        return inertia('error', [
            'status' => $status,
            'message' => $this->messages[$status],
        ])
            ->toResponse($request)
            ->setStatusCode($status);
    }
}
