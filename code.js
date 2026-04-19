let a = [
    
        {
    name: 'Стол обеденный',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

    },
     {
    name: 'Стол обеденный',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

    },
     {
    name: 'Стол обеденный',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

    },
     {
    name: 'Стол обеденный',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

    },
     {
    name: 'Стол обеденный',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

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
        <div class="cir">
            <img src="${object.image}" alt="" class="imageeg">
            <h1>${object.name}</h1>
            <p>${object.material}</p>
            <p class="cost">${object.price}</p>
            <button>купить</button>
        </div>
    </div>
    `
}
