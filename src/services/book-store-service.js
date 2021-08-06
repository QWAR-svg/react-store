export default class bookstoreservice {

    data = [{
            id: 1,
            title: 'Prudction Ready Microservices',
            author: "Susan J. Fowler",
            price: 100,
            imageCover: "https://m.media-amazon.com/images/I/51Ckulv1P+L.jpg"
        },
        {
            id: 2,
            title: 'Release It!',
            author: "Michael T. Vygard",
            price: 64,
            imageCover: "https://m.media-amazon.com/images/I/51Ckulv1P+L.jpg"

        }
    ]

    getBooks() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        })
    }
}