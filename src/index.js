module.exports = function multiply(first, second) {
  const arrayForFirst = first.split('').reverse();
  const arrayForSecond = second.split('').reverse();
  const stack = [];

  for (let i = 0; i < arrayForFirst.length; i++) {
    for (let k = 0; k < arrayForSecond.length; k++) {
      const multiplicationResult = arrayForFirst[i] * arrayForSecond[k];

      stack[i + k] = (stack[i + k]) ? stack[i + k] + multiplicationResult : multiplicationResult;
    };
  };

  for (let i = 0; i < stack.length; i++) {
    const number = stack[i] % 10;

    const transfer = Math.floor(stack[i] / 10);

    stack[i] = number;
    
    if (stack[i + 1]) {
      stack[i + 1] += transfer;
    } else if (transfer !== 0) {
      stack[i + 1] = transfer;
    };
  };
  
  return stack.reverse().join('');
};
