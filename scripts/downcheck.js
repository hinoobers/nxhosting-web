window.addEventListener("load", function() {
    this.fetchAPI("status", "GET")
        .then(response => {
            console.log(response);
        })
});