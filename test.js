function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();


// 'this' in normal function & arrow function
var this1 = {
  number: 123,
  logFunction: function () { console.log(this); },
  logArrow: () => console.log(this)
};

this1.logFunction(); // Object { number: 123}
this1.logArrow(); // Window 