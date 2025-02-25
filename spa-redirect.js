// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
// This script checks to see if a redirect is present in the query string,
// converts it back into the correct url and adds it to the
// browser's history using window.history.replaceState(...),
// which won't cause the browser to attempt to load the new url.
// When the single page app is loaded further down in this file,
// the correct url will be waiting in the browser's history for
// the single page app to route accordingly.
(function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
    
    // This handles the case where "?p=/path" is in the URL
    if (l.search.indexOf('?p=') === 0) {
      var path = l.search.substring(3);
      var queryStart = path.indexOf('&');
      var query = '';
      
      if (queryStart !== -1) {
        query = '?' + path.substring(queryStart + 1).replace(/~and~/g, '&');
        path = path.substring(0, queryStart);
      }
      
      window.history.replaceState(null, null,
          l.pathname + path + query + l.hash
      );
    }
  }(window.location))