export const config = {
  server: {
    ip: '0.0.0.0',
    port: 4522
  },

  api: {
    key: 'Bearer aSuperSecretKey'
  },

  corsOptions: {
    origin: 'http://localhost:3000',
    methods: 'GET',
    allowedHeaders: 'Content-Type,Authorization'
  }
}
