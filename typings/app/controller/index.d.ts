// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportAdminActivity = require('../../../app/controller/admin/activity');
import ExportAdminBase = require('../../../app/controller/admin/base');
import ExportAdminClassify = require('../../../app/controller/admin/classify');
import ExportAdminDetail = require('../../../app/controller/admin/detail');
import ExportAdminFeedback = require('../../../app/controller/admin/feedback');
import ExportAdminFocus = require('../../../app/controller/admin/focus');
import ExportAdminHome = require('../../../app/controller/admin/home');
import ExportAdminLogin = require('../../../app/controller/admin/login');
import ExportAdminManager = require('../../../app/controller/admin/manager');
import ExportAdminPicture = require('../../../app/controller/admin/picture');
import ExportAdminSponsor = require('../../../app/controller/admin/sponsor');
import ExportAdminTheme = require('../../../app/controller/admin/theme');
import ExportAdminUser = require('../../../app/controller/admin/user');
import ExportDefaultActivity = require('../../../app/controller/default/activity');
import ExportDefaultBack = require('../../../app/controller/default/back');
import ExportDefaultBeauty = require('../../../app/controller/default/beauty');
import ExportDefaultDetail = require('../../../app/controller/default/detail');
import ExportDefaultHome = require('../../../app/controller/default/home');
import ExportDefaultUpload = require('../../../app/controller/default/upload');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    admin: {
      activity: ExportAdminActivity;
      base: ExportAdminBase;
      classify: ExportAdminClassify;
      detail: ExportAdminDetail;
      feedback: ExportAdminFeedback;
      focus: ExportAdminFocus;
      home: ExportAdminHome;
      login: ExportAdminLogin;
      manager: ExportAdminManager;
      picture: ExportAdminPicture;
      sponsor: ExportAdminSponsor;
      theme: ExportAdminTheme;
      user: ExportAdminUser;
    }
    default: {
      activity: ExportDefaultActivity;
      back: ExportDefaultBack;
      beauty: ExportDefaultBeauty;
      detail: ExportDefaultDetail;
      home: ExportDefaultHome;
      upload: ExportDefaultUpload;
    }
  }
}
