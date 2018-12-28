// read and parse the JSON files just as we did before
let rose = JSON.parse(Assets.getText('companions/rose.json'));
let martha = JSON.parse(Assets.getText('companions/martha.json'));

// 导出模块的写法
// const Doctor = {
//   companions: [rose, martha]
// };

// export {
//   Doctor
// };

// 导出全局的写法
Doctor = {
  companions: [rose, martha]
};