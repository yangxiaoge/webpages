import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

function target(wd) {
  return 'https://www.google.com/search?q=' + encodeURIComponent(wd)
}

function complete(wd, callback) {
  axios.get('https://www.google.com/complete/search', {
    params: {
      client: 'psy-ab',
      hl: 'zh-CN',
      q: wd,
    },
    adapter: jsonpAdapter,
  }).then(resposnse => {
    callback({
      eng: 'google',
      wd: resposnse.data[0],
      list: resposnse.data[1].map(a => a[0]),
    })
  }).catch(error => console.error(error))
}

export default {
  target,
  complete,
}
