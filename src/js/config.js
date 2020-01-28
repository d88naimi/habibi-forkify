// never store sensitive data on client side 

export const res = await axios(
  `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`
);
