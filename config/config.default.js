/*
 * :file description: 
 * :name: /nutting/config/config.default.js
 * :author: 张德志
 * :copyright: (c) 2023, Tungee
 * :date created: 2023-04-25 00:27:10
 * :last editor: 张德志
 * :date last edited: 2023-04-25 00:36:47
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1585065013693_5364';

  //配置上传地址
  config.uploadDir = 'app/public/admin/upload'

  //配置中间件
  config.middleware = ['auth'];

  config.auth = {
    match:'/admin'
  }

  //配置渲染ejs
  config.view = {
    mapping:{
      '.html':"ejs"
    }
  }
  //配置线上地址
  config.cluster = {
    listen:{
      path:"",
      port:8083,
      hostname:"0.0.0.0"
    }
  }
  //关闭csrf
  config.security = {
    csrf: {
      enable: false,
    },
  };

 //配置数据库
  config.mongoose = {
    client:{
      url:'mongodb://127.0.0.1:27017/link',
      options:{}
    }
  }


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
