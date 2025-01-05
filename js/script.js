document.addEventListener('DOMContentLoaded', () => {
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=casIs8QXr7LZ9-h7uQsEXIHovsHX4h89efyg6IlVlsq4LOon5SQONC3TCNlyC10lvujnFCipPL9KaaoMsWRRl41KsKE70Q5cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnExLZ8Nex_E3qSxIdkcnf9XdNI4Vrzq9DW3UmBkP9O3Apys6pq11OSQ8eaw4aJutv0lpz7OhqVCsGtPdKMzpg8iJcAYw7XH8a9z9Jw9Md8uu&lib=MtMUeN_KPgogEmAx-pNn6Un9KvKRhJq3T')
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching data:', error));
});
