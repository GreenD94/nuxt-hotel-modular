import path from 'path';
module.exports = function UserModule (moduleOptions) {

    this.extendRoutes((routes) => {
 
      routes.unshift({
        name: 'user',
        path: '/user',
        component: path.resolve(__dirname, 'pages/index.vue')

      });

      routes.unshift({
        name: 'usercreate',
        path: '/user/create',
        component: path.resolve(__dirname, 'pages/create.vue')
      });
    });    
 
  }