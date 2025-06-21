const endpoint = "https://fakestoreapi.com/products";
// fetch(endpoint).then((result) => result.json()).then(( {data} ) => console.log(data));


// const fetchAllTodos = () => {
//     return fetch(endpoint).then((response) => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         return data;
//     }).catch((error) => {
//         return error;
//     });
// };

// fetchAllTodos()




// async function fetchData(){
//     const api = await fetch(endpoint);
//     const data = await api.json();
//     // console.log(data);

//     const {category, title, price, image} = await data[0];
//     console.log(`title: ${title}`);
//     console.log(`Kategori: ${category}`);
//     console.log(`price: ${price}`);
//     console.log(`image: ${image}`);
// }
// fetchData();


// const containerDisplay = document.getElementById("container-display");
// const fetchData = async () => {
//     const api = await fetch(endpoint);
//     const data = await api.json();

//     const {category, title, price, image} = await data[0];
//     containerDisplay.innerHTML += `
//         <div class="card">
//             <img src="${image}" alt="${title}" height="100px" width="100px">
//             <h3>${title}</h3>
//             <p>${category}</p>
//             <p>Price: $${price}</p>
//         </div>
//     `;
// }
// fetchData();


const containerDisplay = document.getElementById("card-display");
const fetchData = async () => {
    try {
        const api = await fetch(endpoint);
        const data = await api.json();

        // cek response dari API
        if (!api.ok) {
            throw new Error("API tidak merespon dengan baik");
        }

        // Cek apakah terdapat data dan ada element pertama
        if (data.length === 0 || !data[0]) {
            containerDisplay.innerHTML = "<p>Ga ada data</p>"
            return
        }

        // Tampilkan data pada containerDisplay
        const {category, title, price, image} = await data[0];

        containerDisplay.innerHTML += `
            <img src="${image}" alt="${title}" height="100px" width="100px">
            <h3>${title}</h3>
            <p>${category}</p>
            <p>Price: ${price}</p>
        `;

    } catch (error) {
        console.error("Fetch error : ", error);
        containerDisplay.innerHTML = "<p>Gagal buat fetching data API</p>";
    }
}
fetchData()