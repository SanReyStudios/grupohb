document.addEventListener('DOMContentLoaded', () => {
    const fetchData = () => {
        fetch('https://sanreystudios.github.io/grupohb/')
            .then(response => response.text())
            .then(data => {
                const jsonData = JSON.parse(data);
                const dataContainer = document.getElementById('data-container');
                dataContainer.innerHTML = JSON.stringify(jsonData, null, 2);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    fetchData();
    setInterval(fetchData, 1000); // Actualiza cada segundo
});
