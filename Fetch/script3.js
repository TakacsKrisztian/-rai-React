document.getElementById("btn").onclick = function(event) {
    event.preventDefault();
    fetch('https://pizza.kando-dev.eu/pizza')
    .then(function (response)
     {
        if(!response.ok)
        {
            return Promise.reject();
        }
        return response.json()
    })
    .then(function(response){
        return console.log(response);
})
};