import {
  Meteor
} from 'meteor/meteor';

import Redis from 'ioredis';
const redis = new Redis();

// 导入模块的写法
// import {
//   Doctor
// } from 'meteor/doctor';

Meteor.startup(() => {
  // code to run on server at startup
  console.error(Doctor);

  Promise.await(redis.set('key', 'value'));
  console.error(Promise.await(redis.get('key')));
});