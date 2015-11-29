# gulp-candor
The official Candor Gulp plugin.

View the official project site for [Candor](http://r3oath.github.io/candor/)

# Usage
Example `gulpfile.js` that compiles Candor code.

```javascript
var gulp   = require('gulp');
var candor = require('gulp-candor');

gulp.task('default', ['candor']);

gulp.task('candor', function() {
    return gulp
        .src('index.cdor')
        .pipe(candor())
        .pipe(gulp.dest('./'));
});
```