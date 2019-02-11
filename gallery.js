const request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if (request.readyState === 4) {
    console.log(request.response);
  }
}

request.open('GET', 'img/gallery');
request.send();


//for (let i = 0; )