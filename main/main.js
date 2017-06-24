module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}\n
    o) 最大值 = ${sequence.maximun()}\n
    o) 元素数量 = ${sequence.length}\n
    o) 平均值 = ${sequence.average()}\n
// Write your code here
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
    var this.input = input;
    var this.length = input.length;
  }

  minimum() {
    // Write your code here
    var min = this.input[0];
    for(var i=1;i<this.input.length;i++) {
      if(this.input[i] < min) {
        min = this.input[i];
      }
    }
    return min;
  }

  maximum() {
    // Write your code here
    var max = this.input[0];
    for(var i=1;i<this.length;i++) {
      if(this.input[i] > max) {
        max = this.input[i];
      }
    }
    return max;
  }

  average() {
    var sum = 0;
    for(var i=0;i<this.length;i++) {
      sum += this.input[i];
    }
    return (sum / this.length);
  }


  // Write your code here
}