class MoviesApi {
  constructor({ baseUrl }) {
    this._url = baseUrl;
    this._headers = { 'Content-Type': 'application/json' };
  }

  _checkResult = (res) => {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  };

  _request = (url, options) => fetch(url, options).then(this._checkResult);

  getMovies = () => this._request(this._url, { headers: this._headers });
};

const apiConfig = { baseUrl: 'https://api.nomoreparties.co/beatfilm-movies/' };
const moviesApi = new MoviesApi(apiConfig);

export default moviesApi;