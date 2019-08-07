function schedule(s, e) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
      for (let j = s[i]; j <= e[i]; j++) {
          if (dict[j] === undefined) dict[j] = [i];
          else dict[j].push(i);
      }
  }
  console.log(dict)
  let unique = {};
  let count = 0;
  // eslint-disable-next-line guard-for-in
  for (let k in dict) {
      let val = dict[k];
      for (let i = 0; i < val.length; i++) {
          let el = val[i];
          console.log("el: ", el)
          if (unique[el] === undefined) {
              unique[el] = true
              count++;
              break;
          }
      }
  }
  return count;
}

// console.log(schedule([1,2,1], [1,4,1]))

let text = 'outside';
function logIt(){
    console.log(text);
    // let text = 'inside';
}
logIt();
