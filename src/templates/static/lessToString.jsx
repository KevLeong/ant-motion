let point = require('!raw!./point.less');

point = point.replace('../../../static/custom.less', './custom.less');

const antD = require('!raw!./ant-d.less');
const global = require('!raw!../../theme/static/global.less');
let common = require('!raw!./common.less');

common = common.replace('../../theme/static/global', './global');

const custom = require('!raw!./custom.less');
const content = require('!raw!./content.less');

export default {
  'ant-d': antD,
  global,
  common,
  custom,
  point,
  content,
};
