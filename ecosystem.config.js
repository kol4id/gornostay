module.exports = {
    apps: [{
            name: 'next-app',
            script: 'server.js',
            cwd: './', 
            instances: 2, 
            exec_mode: 'cluster', 
            watch: false, 
            autorestart: true, 
            max_memory_restart: '512M',
                env_production: {
                    NODE_ENV: 'production',
                    PORT: 3000, 
                },
        },
    ],
};