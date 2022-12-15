// Question 1 answer
// const shiftArray = (nums, p, d) => {
//   const l = nums.length;
//   const left = nums.slice(0, p);
//   const right = nums.slice(p, l);
//   if (d == 1) {
//     left.push(...right);
//     return left;
//   }
//   if (d == 0) {
//     right.push(...left);
//     return right;
//   }
// };
// console.log(shiftArray([1, 3, 2, 7, 4, 6], 3, 0));

// question 2 answer

class Clock {
  constructor() {
    this.nowTime = new Date();
    this.alarms = []
  }

  currentTime() {
    this.nowTime = new Date();
    return this.nowTime;
  }
  addAlarm(action, [h, m]) {
  }
  deleteAlarm()
}
const clock = new Clock();
setTimeout(() => {
  const time = clock.currentTime();
  console.log(time);
}, 10000);
