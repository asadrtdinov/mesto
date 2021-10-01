export default class UserInfo {
  constructor( {nameSelector, aboutSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
        name: this._name.textContent,
        about: this._about.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {
      this._name.textContent = name;
      this._about.textContent = about;
      this._avatar.src = avatar;
  }
}
