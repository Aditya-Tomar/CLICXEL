/// <reference lib="webworker" />

addEventListener('message', ({ data}) => {
  if(data.length){
    const newdata = data.sort();
    const response = `worker response to ${newdata}`;
    postMessage(response);
  }
  else{
    postMessage('lol')
  }
});

