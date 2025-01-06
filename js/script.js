document.addEventListener('DOMContentLoaded', () => {
    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/sanreystudios/grupohb/main/data.json')
            .then(response => response.json())
            .then(data => {
                const dataContainer = document.getElementById('data-container');
                dataContainer.innerHTML = JSON.stringify(data, null, 2);
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    fetchData();
    setInterval(fetchData, 1000); // Actualiza cada segundo
});
