const config = {
    mode: 'production',
    entry: {
        index: ['./src/js/index.js'],
        gallery: ['./src/js/gallery.js'],
        about: ['./src/js/about.js'],
        general: ['./src/js/general.js'],



    },
    output: {
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader,css-loader'],
            }
        ]


    }
}
module.exports = config