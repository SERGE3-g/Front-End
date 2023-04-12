
function getHtmlCss() {
  return {
    type: GET_HTML_CSS,
    payload: axios.get('/api/html-css')
  };
}
