export function throttle(fn, wait) {
    let shouldWait = false;
    return function throttledFunction(...args) {
      if (!shouldWait) {
        fn.apply(this, args);
        shouldWait = true;
        setTimeout(() => (shouldWait = false), wait);
      }
    };
  }
  