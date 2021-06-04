var surge = require('gulp-surge')

gulp.task('deploy', [], function () {
    return surge({
        project: './build',         // Path to your static build directory
        domain: 'ruilwinkel2.surge.sh'  // Your domain or Surge subdomain
    })
})