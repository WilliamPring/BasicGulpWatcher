var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', function () {
    function reportChange(event) {
        console.log('Event type: ' + event.type); // added, changed, or deleted
        console.log('Event path: ' + event.path); // The path of the modified file
    }
    gulp.watch('Content/*.css', [browserSync.reload]).on('change', reportChange);
    gulp.watch('Scripts/*.js', [browserSync.reload]).on('change', reportChange);
    gulp.watch('Views/Master/*.cshtml', [browserSync.reload]).on('change', reportChange);

});

gulp.task('default', function () {
    console.log('Gulp is now running.....');
});