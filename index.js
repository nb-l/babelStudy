import "@babel/polyfill"

let array = [1, 2, 3, 4, 5, 6];
array.includes((item) => item > 2)

class Robot {
  constructor(msg) {
    this.message = msg
  }
  say() {
    alertMe(this.message)
  }
}

Object.assign({}, {
  a: 1,
  b: 2
})

const fn = () => 1;

new Promise();

let m = '   dwdwd    ';
console.log(m.trimStart())