(function () {
  const apiEndPoint = 'http://class10.taalmap.nl/en'

  function getJSON(url, cb) {
    function processRequest() {
      if (xhr.readyState === 4) {
        cb(JSON.parse(xhr.response))
      }
    }
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = processRequest
  }

  const query = 'subject=bank'

  function renderSentence(ul, sentence) {
    const li = document.createElement('li')
    li.innerHTML = '<span class="phrase">' +
      sentence.phrase +
      '</span><br /><span class="translation">' +
      sentence.translation
      + '</span'
    ul.appendChild(li)
  }

  function render(query, sentences) {
    const h1 = document.getElementById('query')
    h1.innerHTML = query

    const ul = document.getElementById('content')
    ul.innerHTML = ''
    for (const sentence of sentences) {
      renderSentence(ul, sentence)
    }
  }

  const subject = 'bank'
  const url = apiEndPoint + '?subject=' + subject
  getJSON(url, function(res) {
    render(subject, res)
  })
})()