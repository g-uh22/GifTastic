const giffer = animal => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${animal}&rating=g&api_key=79jPggx6Nh91CQCn9ceUgCoNYQNNyl0B`)
        .then(r => r.json())
        .then(({ data }) => {
            document.querySelector('#gifDiv').innerHTML = '' 
            data.forEach(gif => {
               const url = 
               gif.images.fixed_height.url
               let gifElem = document.createElement('img')
               gifElem.setAttribute('src', url)
               document.querySelector('#gifDiv').append(gifElem)
            })
        
        })
        .catch(e => console.error(e))
}