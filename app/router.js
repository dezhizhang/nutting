'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  //登录
  router.get('/admin/login',controller.admin.login.index);
  router.get('/admin/verify',controller.admin.base.verify);
  router.post('/admin/doLogin',controller.admin.login.doLogin);
  router.get('/admin/loginOut',controller.admin.login.loginOut);
  //首页
  router.get('/admin/home',controller.admin.home.index);
  //管理员管理
  router.get('/admin/manager',controller.admin.manager.index);
  router.get('/admin/manager/add',controller.admin.manager.add);
  router.post('/admin/manager/doAdd',controller.admin.manager.doAdd);
  router.get('/admin/manager/delete',controller.admin.manager.delete);
  //用户管理
  router.get('/admin/user',controller.admin.user.index);
  router.get('/admin/user/add',controller.admin.user.add);
  router.post('/admin/user/doAdd',controller.admin.user.doAdd);
  router.get('/admin/user/delete',controller.admin.user.delete);

  //分类管理
  router.get('/admin/classify',controller.admin.classify.index);
  router.get('/admin/classify/add',controller.admin.classify.add);
  router.post('/admin/classify/doAdd',controller.admin.classify.doAdd);
  router.get("/admin/classify/delete",controller.admin.classify.delete);

  //图片管理
  router.get('/admin/picture',controller.admin.picture.index);
  router.get('/admin/picture/add',controller.admin.picture.add);
  router.post('/admin/picture/doAdd',controller.admin.picture.doAdd);
  router.get('/admin/picture/delete',controller.admin.picture.delete);

  //反馈管理
  router.get('/admin/feedback',controller.admin.feedback.index);


  //活动管理
  router.get('/admin/activity',controller.admin.activity.index);
  router.get('/admin/activity/add',controller.admin.activity.add);

  //赞助管理
  router.get('/admin/sponsor',controller.admin.sponsor.index);
  router.get('/admin/sponsor/add',controller.admin.sponsor.add);

  //主题管理
  router.get('/admin/theme',controller.admin.theme.index);
  router.get('/admin/theme/add',controller.admin.theme.add);
  router.post('/admin/theme/doAdd',controller.admin.theme.doAdd);
  router.get('/admin/theme/delete',controller.admin.theme.delete);

  //主题详情
  router.get('/admin/detail',controller.admin.detail.index);
  router.get('/admin/detail/add',controller.admin.detail.add);

  
  //轮播图管理
  router.get('/admin/focus',controller.admin.focus.index);
  router.get('/admin/focus/add',controller.admin.focus.add);
  router.post('/admin/focus/doAdd',controller.admin.focus.doAdd);
  router.get('/admin/focus/delete',controller.admin.focus.delete);

  
  


  //前台页面
  router.get('/', controller.default.home.index);
  //上传
  router.get('/upload',controller.default.upload.index);
  //详情
  router.get('/detail',controller.default.detail.index);
  //唯美图片
  router.get('/beauty',controller.default.beauty.index);
  //高清背景
  router.get('/back',controller.default.back.index);
  //活动
  router.get('/activity',controller.default.activity.index);
  
};
