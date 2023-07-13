module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON(`package.json`),
        less: {
            development: {
                files: {
                    'main.css':'../ex18/src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    '../ex18/dist/styles/main.min.css':'../ex18/src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            }
        },
        uglify: {
            target: {
                files: {
                    '../ex18/dist/scripts/main.min.js':'../ex18/src/scripts/main.js'
                }
            }
        }

    })


    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);

}