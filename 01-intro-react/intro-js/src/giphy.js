const APIKEY = '8o9t35KN8Y887cf7b63MI8iIh3hARtX9';
const PATH = `http://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`

export const showGIF = () => {
    fetch(PATH)
             .then(res => res.json())
             .then(({data}) => console.log(data));
}

export const showGIFAsync = async() => {
    const resp = await fetch(PATH);
    const {data} = await resp.json();

    const {url} = data.images.original;
    
    const body = document.body;

    body.innerHTML += `<img src="${url}">`;
}
