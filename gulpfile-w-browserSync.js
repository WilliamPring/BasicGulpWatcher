var gulp = require('gulp');
var browserSync = require('browser-sync').create();




gulp.task('default', function () {
    console.log('Gulp is now running.....');
    console.log('Gulp is now tracking changes(HTML, CSS, JS)');
});

gulp.task('watch', function () {
    browserSync.init({
        //Change your url base on your localhost
        proxy: "",
        //change to google chrome if os is Windows 7+
        browser: "chrome"
    });
    /*
    ************** OR ****************
    browserSync.init({
        server: {
            //init server name
            baseDir:'./'
        }
    });
    ************* END **************
    */


    function reportChange(event) {
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }
    //add additional watch change path if you wish
    gulp.watch('Content/*.css', [browserSync.reload]).on('change', reportChange);
});
