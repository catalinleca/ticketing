import axios from 'axios';

export default ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      baseURL: 'www.events-ticketing-app.xyz',
      headers: req.headers,
    });
  }
  return axios.create({
    baseUrl: '/',
  });
};
