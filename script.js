function plus(el){
  el.innerHTML = Number(el.innerHTML) + 1;
}
function minus(el){
  if (Number(el.innerHTML) > 0){
    el.innerHTML = Number(el.innerHTML) - 1;
  }
}