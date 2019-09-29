import jsonp from 'jsonp';

const concatUrl = (url, data) => {
  url += url.indexOf('?') >=0 ? '&' : '?';
  const params = [];
  for(const key in data){
    params.push([key,encodeURIComponent(data[key])]);
  }

  return url + params.map(value => value.join('=')).join('&');
}

export default (url, data, options)=> {
  url = concatUrl(url, data);
  console.log(url);
  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data)=> {
      if(err) {
        reject(err);
      }else {
        resolve(data);
      }
    });
  })
}
