let a = [
    
        {
    name: 'Стол',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e650f1c078c112fa3ec3993230c/orig'

    },
     {
    name: 'Стол для компьютера',
    material: 'дуб',
    price: 12000,
    size: '2m',
    type: 'useless',
    image: 'https://img.inmyroom.ru/inmyroom/resize/700x700/jpg:85/uploads/photo/file/1a/1aa0/jpg_1000_1aa0f8a6-2865-490b-bbd8-9427da17e087.jpg?sign=7b592b89382238fe67dad38d2c64f7e320cdaab3c9651142571426b47efe9d69'

    },
     {
    name: 'Стол для игр в карты',
    material: 'берёза',
    price: 55000,
    size: '1,5m',
    type: 'useless',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf5FaZCTDbwNboe2-yHyE_QQx34hLEr8aicw&s'

    },
     {
    name: 'туьбочка',
    material: 'Клён',
    price: 24000,
    size: '2m',
    type: 'useless',
    image: 'https://www.unitex.ru/image_cache/1000x1000_sized_-image_products-rm-formula-2343.jpg'

    },
     {
    name: 'парта школьная',
    material: 'дуб',
    price: 13000,
    size: '2m',
    type: 'useless',
    image: 'https://i.pinimg.com/736x/46/e0/89/46e0890b64ad9836376cccaf784cbec1.jpg'

    },
]


let parametr = location.search.replace('?parametr=' '')

let name = document.getElementById('name')
name.innerHTML = parametr