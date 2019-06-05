const servers = {
  development: {
    admin: 'http://127.0.0.1:8080'
  },
  production: {
    admin: 'http://127.0.0.1:8080/client'
  }
};

const server = servers[process.env.NODE_ENV];
console.log('server', process.env.NODE_ENV, server);
export default server;