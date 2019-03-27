const giffer = animal => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${animal}&rating=g&api_key=79jPggx6Nh91CQCn9ceUgCoNYQNNyl0B`)
        .then(r => r.json())
        .then(r => {
            let { url: animated } = r.data.images.fixed_height
            let { url: still } = r.data.images.fixed_height_still
            document.querySelector('#gifDiv').innerHTML = `
              <img class="gifImg" src="${still}" alt="${animal}Gif" data-still="${still}" data-animated="${animated}">
            `
          })
          .catch(e => console.error(e))
      }
      
      const pausePlay = gif => {
        let { animated, still } = gif.dataset
        toggle = !toggle
        gif.setAttribute('src', toggle ? animated : still)
      }
      
      document.addEventListener('click', ({ target }) => {
        switch (target.className) {
          case 'gifGetter':
            gifGetter(target.dataset.animal)
            break
          case 'gifImg':
            pausePlay(target)
            break
        }
      })




























        // .then(({ data }) => {
        //     document.querySelector('#gifDiv').innerHTML = '' 
        //     data.forEach(gif => {
        //        const url = 
        //        gif.images.fixed_height.url
        //        let gifElem = document.createElement('img')
        //        gifElem.setAttribute('src', url)
        //        document.querySelector('#gifDiv').append(gifElem)
        //     })
        
        // })
        // .catch(e => console.error(e))
