function manageStack(arr, operations) {
  let stack = [...arr]; 
  let log = [];

  for (let op of operations) {
    if (op.startsWith("push:")) {
      let value = op.split(":")[1];
      stack.push(value);
      log.push(`Added ${value}`);
    } 
    else if (op === "pop") {
      let removed = stack.pop();
      log.push(`Removed ${removed}`);
    }
  }

  return {
    result: stack,
    log: log
  };
}
console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack(["a"], ["push:b", "pop", "push:c"]));
