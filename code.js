let a = [
    
        {
    name: 'table',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

    },
     {
    name: 'computer_table',
    material: 'дуб',
    price: 12000,
    size: '2m',
    type: 'useless',
    image: 'https://img.inmyroom.ru/inmyroom/resize/700x700/jpg:85/uploads/photo/file/1a/1aa0/jpg_1000_1aa0f8a6-2865-490b-bbd8-9427da17e087.jpg?sign=7b592b89382238fe67dad38d2c64f7e320cdaab3c9651142571426b47efe9d69'

    },
     {
    name: 'card_game_table',
    material: 'берёза',
    price: 55000,
    size: '1,5m',
    type: 'useless',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5FaZCTDbwNboe2-yHyE_QQx34hLEr8aicw&s'

    },
     {
    name: 'bedside_table',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://www.unitex.ru/image_cache/1000x1000_sized_-image_products-rm-formula-2343.jpg'

    },
     {
    name: 'School_desk',
    material: 'дуб',
    price: 13000,
    size: '2m',
    type: 'useless',
    image: 'https://i.pinimg.com/736x/46/e0/89/46e0890b64ad9836376cccaf784cbec1.jpg'

    },
]

// `<div class="card">
//         <div class="cir">
//             <img src="https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig" alt="" class="imageeg">
//             <h1>Стол их клёна</h1>
//             <p>красивый стол из клёна</p>
//             <p class="cost">24000</p>
//             <button>купить</button>
//         </div>
//     </div>`

let market = document.getElementById('market')

for(let i= 0; i < a.length; i++){
    let object =a[i]
    market.innerHTML = market.innerHTML + `
    <div class="card">
    <a href="/product.html?parametr=${object.name}">
    <div class="cir">
            <img src="${object.image}" alt="" class="imageeg">
            <h1>${object.name}</h1>
            <p>${object.material}</p>
            <p class="cost">${object.price}</p>
            </a>
            <button>купить</button>
        </div>
    </div>
    `
}
