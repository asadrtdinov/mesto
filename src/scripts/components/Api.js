export default class Api {
  constructor(url) {
    this._url = url;
  }

  getUserInfo() {
    return fetch(this._url +'/users/me', {
      headers: {
      authorization: '4bbad6bd-2811-470e-a5ed-e059873eda41'
    }}).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`Response is not ok with code ${res.status}`);
      }
    }).catch(err => {
      console.log(err);

      return [];
    });
  }
}
