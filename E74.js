const btn = document.getElementById("btn-get-position");
const label = document.getElementById("p-output");


btn.addEventListener('click', () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            label.innerHTML = '';
            label.innerHTML += 'Широта: ' + coords.latitude + ' Долгота: ' + coords.longitude;
        });
    };

});

