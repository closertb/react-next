const servers = {
  development: {
    admin: 'http://127.0.0.1:8080'
  },
  production: {
    admin: '//server.closertb.site/client'
  }
};

const server = servers[process.env.NODE_ENV];
export default server;