const mix = require('laravel-mix');

mix.browserSync({
    proxy: 'http://127.0.0.1:8000',
    notify: false,
    snippetOptions: {
        rule: {
            match: /$/i,
            fn: function (snippet, match) {
                return snippet + match;
            }
        }
    }
});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/main.scss', 'public/css');

mix.disableSuccessNotifications();
