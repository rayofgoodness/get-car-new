class Request {
  constructor(baseUrl, port) {
    this.baseUrl = baseUrl;
    this.port = port;
    this.token = null;
  }

  setToken(token) {
    this.token = token;
  }

  async post(API, body) {
    const headers = this.getHeaders()

    const response = await fetch(`${this.baseUrl}:${this.port}${API}`, {
      method: 'post',
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  async get(API, body) {
    const headers = this.getHeaders()

    const response = await fetch(`${this.baseUrl}:${this.port}${API}`, {
      method: 'post',
      headers,
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`;
    }
    return headers
  }
}

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const PORT = import.meta.env.VITE_PORT;

const request = new Request(VITE_BASE_URL, PORT);

export default request;
