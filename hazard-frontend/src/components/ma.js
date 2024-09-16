auth0.createAuth0Client({ // create auth0 client
    domain: "dev-gop37obgcywx3sqh.us.auth0.com",
    clientId: "APEnSBeV2GopTPeuGuXIJ6Av2LUIhGIb",
    authorizationParams: {
        redirect_uri: window.location.origin
    }
}).then(async (auth0Client) => {
    const loginButton = document.getElementById("login");

    loginButton.addEventListener("click", (e) => { // listen for login
        e.preventDefault(); // (don't do default action of function)
        auth0Client.loginWithRedirect();
    });

    if (location.search.includes("state=") && // check if access token was sent back
        (location.search.includes("code=") || 
        location.search.includes("error="))) {
        await auth0Client.handleRedirectCallback();
        window.history.replaceState({}, document.title, "/");
    }

    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
        window.userProfile = await auth0Client.getUser();
        window.location.href = '/init.html?user='+window.userProfile.sub
    }
    
});