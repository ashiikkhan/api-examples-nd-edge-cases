const loadQuote = () => {
  fetch('https://api.kanye.rest/')
    .then((response) => response.json())
    .then((data) => displayQuote(data));
};
loadQuote();
const displayQuote = ({ quote }) => {
  const blockquote = document.getElementById('quote');
  blockquote.innerText = quote;
};
