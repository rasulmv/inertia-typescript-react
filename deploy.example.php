<?php

/**
 * This is an example "deploy.php" file.
 *
 * https://deployer.org/
 *
 * To deploy this project:
 * 1. Rename this file to "deploy.php".
 * 2. Replace strings that start and end with double underscore "__" accordingly.
 * 3. Run "dep deploy".
 *
 * If you don't want to use php-deployer:
 * 1. Delete this file, remove "deploy.php" from .gitignore
 * 2. Run "composer remove deployer/deployer"
 */

namespace Deployer;

require 'recipe/laravel.php';

// Config
set('repository', 'git@github.com:rismailov/inertia-typescript-react.git');
set('keep_releases', 3);

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts
host('__HOSTNAME__')
    ->set('remote_user', '__USER__')
    ->set('deploy_path', '__PATH_TO_PROJECT__');

task('deploy', [
    'deploy:prepare',
    'deploy:vendors',
    'artisan:storage:link',
    'artisan:config:cache',
    'artisan:route:cache',
    'artisan:view:cache',
    'artisan:event:cache',
    'artisan:optimize:clear',
    // 'artisan:migrate',
    'deploy:publish',
]);

// Hooks
after('artisan:optimize:clear', 'build');
after('deploy:failed', 'deploy:unlock');
