export const debounce = (fn, delay=500) => {
  let timer = null;

  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this,args);
    }, delay);
  }
}