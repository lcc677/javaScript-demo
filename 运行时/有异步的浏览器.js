
const xhr = new XMLHttpRequest()
xhr.open('GET', 'http://127.0.0.1:8000/system/index');
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
    console.log('pp')
    console.log(xmlHttp.responseText);
  } else {
    console.log("error")
  }
}
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

console.log('script end');

