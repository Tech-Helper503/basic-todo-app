module.exports = {
    mount: {
        public: '/',
        src: '/_dist_'
    },
    plugins: [
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript'
    ]
}