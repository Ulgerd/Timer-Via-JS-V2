var [timer, hours, min, sec] = [];

function printTimer(fn, state) { 

  [hours, min, sec] = [hours || 0, min || 0, sec || 0];

  render = function() {
    if (sec == 60) {sec = 0, min++};
    if (min == 60) {min = 0, hours++};
    return `${(hours < 10) ? '0' + hours : hours}:${(min < 10) ? '0' + min : min}:${(sec < 10) ? '0' + sec++ : sec++}`;
  };

  if (state.firstRun) {
    [hours, min, sec] = [0, 0, 0];
    fn();
  } else if (state.running) {
    timer = setInterval(fn, 1000);
  } else if (state.running === false) {
    clearInterval(timer);
  } else {};
};