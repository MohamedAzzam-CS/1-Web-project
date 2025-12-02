(function(){
  try {
    var linksContainer = document.querySelector('.main-nav .links');
    if (!linksContainer) return;
    var links = linksContainer.querySelectorAll('a');
    var path = location.pathname.replace(/\\+/g,'/');
    links.forEach(function(a){
      a.classList.remove('active');
      var href = a.getAttribute('href');
      if (!href) return;
      // Resolve relative paths for subfolders
      var normalizedHref = href;
      if (href.startsWith('../')) {
        // Build comparable path from current location
        var parts = path.split('/');
        // remove last segment (file)
        if (parts.length) parts.pop();
        // apply .. segments
        var upCount = (href.match(/\.\./g) || []).length;
        for (var i=0; i<upCount; i++) { if (parts.length>1) parts.pop(); }
        normalizedHref = parts.join('/') + '/' + href.replace(/(\.\.\/)+/, '');
      } else if (href.startsWith('./')) {
        normalizedHref = path.replace(/[^/]+$/, '') + href.replace('./','');
      } else {
        // assume same folder
        normalizedHref = path.replace(/[^/]+$/, '') + href;
      }
      // Compare by filename
      var currentFile = path.split('/').pop();
      var hrefFile = normalizedHref.split('/').pop();
      if (currentFile === hrefFile) {
        a.classList.add('active');
      }
    });
  } catch(e) {
    // silent fail
  }
})();
