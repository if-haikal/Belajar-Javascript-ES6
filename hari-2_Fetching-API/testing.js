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

        // cek response dari API
        if (!api.ok) {
            throw new Error("API tidak merespon dengan baik");
        }

        const data = await api.json();

        // Cek apakah terdapat data dan ada element pertama
        if (data.length === 0 || !data[0]) {
            containerDisplay.innerHTML = "<p>Ga ada data</p>"
            return
        }

        // Tampilkan data pada containerDisplay
        data.forEach(({category, title, price, image}) => {
            const card = document.createElement("div");
            card.className = "mb-4 p-4 break-inside-avoid bg-white shadow-md rounded-lg border";

            card.innerHTML = `
                <img alt="" class="h-40 w-full object-contain skeleton rounded-md">
                <h3 class="font-semibold text-lg md:text-center skeleton skeleton_text skeleton__body mt-2 mx-auto "></h3>
                <p class="text-sm text-gray-500 md:text-center skeleton skeleton_text skeleton__body mx-auto"></p>
                <p class="text-sm text-gray-700 md:text-center pb-10 skeleton skeleton_text skeleton__footer mx-auto"> </p>
            `;

            containerDisplay.appendChild(card)
        });

    } catch (error) {
        console.error("Fetch error : ", error);
        containerDisplay.innerHTML = `<p class="text-md text-red-500 text-center border-2 border-solid border-red-500">Gagal buat fetching data API</p>`;
    }
}


fetchData();