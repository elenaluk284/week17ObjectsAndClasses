class Transport {
    constructor(type, brand, price) {
        this.type = type;
        this.brand = brand;
        this.price = price;
    }

    getInfo() {
        return `${this.brand}, ${this.type}`;
    }

    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(brand, doors, price) {
        super('car', brand, price);
        this.doors = doors;
    }

    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(brand, maxSpeed, price) {
        super('bike', brand, price);
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

// Данные о транспорте
const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

// Генерация HTML-контента
const container = document.getElementById('transport-container');

data.forEach(item => {
    let transport;
    if (item.type === 'car') {
        transport = new Car(item.brand, item.doors, item.price);
    } else if (item.type === 'bike') {
        transport = new Bike(item.brand, item.maxSpeed, item.price);
    }

    const transportElement = document.createElement('div');
    transportElement.className = 'transport-item';
    transportElement.innerHTML = `
        <img src="${item.image}" alt="${item.brand}">
        <h3>${transport.getInfo()}</h3>
        <p>Price: $${transport.getPrice().toLocaleString()}</p>
        <p>${item.type === 'car' ? `Doors: ${transport.getDoorsCount()}` : `Max Speed: ${transport.getMaxSpeed()} km/h`}</p>
    `;
    container.appendChild(transportElement);
});
