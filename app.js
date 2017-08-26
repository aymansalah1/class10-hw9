(function () {
  const apiEndPoint = 'http://class10.taalmap.nl/en'
  let subject = 'bank'
  let url = `${apiEndPoint}?subject=${subject}`

  const searchBtn = document.getElementById("searchBtn");
  const contentUL = document.getElementById('content')
  searchBtn.addEventListener("click", onClickSearch);

  const fetchJSON = (() => {
    const cache = {}
    return url => {
      const cached = cache[url]
      if (cached) {
        console.log(`cache hit for ${url}`)
        return Promise.resolve(cached)
      }
      return fetch(url).then(res => {
        const data = res.json()
        cache[url] = data
        return data
      })
    }
  })();

  const fetchURL = url => {
    fetchJSON(url)
      .then(res => getHTMLContent(subject, res))
      .then(html => contentUL.innerHTML = html)
      .catch(err => getHTMLContent(err.message, []));
  }

  function getHTMLContent(query, sentences) {
    const h1 = document.getElementById('query')
    h1.innerHTML = query
    if (!sentences.length > 0)
      return "<li>No Result Found</li>";
    contentUL.innerHTML = " ";
    return sentences.reduce((prev, current) => {
      return `${prev}<li><span class="phrase">${current.phrase}
      </span><br /><span class="translation">${current.translation}</span></li>`
    }, '');
  }
  function onClickSearch() {
    const searchInput = document.getElementById("userInput");
    let userInput = searchInput.value;
    subject = userInput;
    url = `${apiEndPoint}?subject=${subject}`
    fetchURL(url);
  }

  fetchURL(url);
})()


