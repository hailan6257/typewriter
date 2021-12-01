const sentence = "hello there from lighthouse labs";
const len = sentence.length;
let timer = 0;
for (let i = 0; i < len; i ++) {
  let char = sentence[i];
  setTimeout(() => {
    process.stdout.write(i === (len - 1) ? (char + '\n') : char);
  }, timer);
  timer += 50;
}