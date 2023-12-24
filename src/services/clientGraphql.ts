const { VITE_API_URL } = import.meta.env
const url = VITE_API_URL


const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: '',
};

export default {
  query(query: string) {
    requestOptions.body = JSON.stringify({ query })

    return fetch(url, requestOptions)
      .then((response) => response.json())
      .catch(e => {
        console.error(e)
        throw (e)
      })
  }
}