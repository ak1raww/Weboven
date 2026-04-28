(function() {
  const redirect = sessionStorage.redirect
  delete sessionStorage.redirect
  if (redirect && redirect !== location.pathname) {
    // This is a clean URL style for BrowserRouter
    history.replaceState(null, null, redirect)
  }
})();