(function () {
  const apiEndPoint = 'http://class10.taalmap.nl/en'
  let subject = 'bank'
  let url = `${apiEndPoint}?subject=${subject}`

  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click" , onClickSearch);
  let cashQueries= {}
  const fetchJSON = url => fetch(url).then(res => res.json())
  
  function renderSentence(ul, sentence) {
    const li = document.createElement('li')
    li.innerHTML = '<span class="phrase">' +
      sentence.phrase +
      '</span><br /><span class="translation">' +
      sentence.translation
      + '</span'
    ul.appendChild(li)
  }
  /*function renderSentence(htmlElementID,html){
    let htmlElement = document.getElementById(htmlElementID);
    htmlElement.innerHTML=html;
  }*/
  function render(query, sentences) {
    cashQueries[query]=sentences;
    const h1 = document.getElementById('query')
    h1.innerHTML = query
    const ul = document.getElementById('content')
    if(!sentences.length>0){
       ul.innerHTML="No Result Found";
       return;
    }
    ul.innerHTML=" ";
    sentences.reduce((prev, current) => {
      renderSentence(ul, current)
    });
  }
  function onClickSearch() {
    const searchInput = document.getElementById("userInput");
    const contentList = document.getElementById("content");
    var userInput = searchInput.value;
    subject=userInput;
    url = `${apiEndPoint}?subject=${subject}`
    cashQueries[subject]?
    render(subject,cashQueries[subject]):
    fetchJSON(url).then(res =>render(subject, res));
  }
  fetchJSON(url).then(res =>render(subject, res)).catch(exception=>render(exception.value,[]));

})()