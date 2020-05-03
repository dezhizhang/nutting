// This file is created by egg-ts-helper@1.25.7
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin = require('../../../app/model/admin');
import ExportClassify = require('../../../app/model/classify');
import ExportDetail = require('../../../app/model/detail');
import ExportFocus = require('../../../app/model/focus');
import ExportPicture = require('../../../app/model/picture');
import ExportTheme = require('../../../app/model/theme');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Admin: ReturnType<typeof ExportAdmin>;
    Classify: ReturnType<typeof ExportClassify>;
    Detail: ReturnType<typeof ExportDetail>;
    Focus: ReturnType<typeof ExportFocus>;
    Picture: ReturnType<typeof ExportPicture>;
    Theme: ReturnType<typeof ExportTheme>;
    User: ReturnType<typeof ExportUser>;
  }
}
