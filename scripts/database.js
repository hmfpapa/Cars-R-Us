const database = {
    colors: [
        { id: 1, name: "Silver", price: 200 },
        { id: 2, name: "Midnight Blue", price: 300 },
        { id: 3, name: "Firebrick Red", price: 250 },
        { id: 4, name: "Spring Green", price: 350 }
    ],
    interiors: [
        { id: 1, name: "Beige Fabric", price: 150 },
        { id: 2, name: "Charcoal Fabric", price: 200 },
        { id: 3, name: "White Leather", price: 300 },
        { id: 4, name: "Black Leather", price: 400 }
    ],
    technologies: [
        { id: 1, name: "Basic Package", price: 500 },
        { id: 2, name: "Navigation Package", price: 750 },
        { id: 3, name: "Visibility Package", price: 1000 },
        { id: 4, name: "Ultra Package", price: 1250 }
    ],
    wheels: [
        { id: 1, name: "17-inch Pair Radial", price: 800 },
        { id: 2, name: "17-inch Pair Radial Black", price: 1000 },
        { id: 3, name: "18-inch Pair Spoke Silver", price: 1200 },
        { id: 4, name: "18-inch Pair Spoke Black", price: 1600 }
    ],
    orders: [
        {
            id: 1,
            colorId: 1,
            interiorId: 1,
            techId: 1,
            wheelId: 1,
            timestamp: 1614659931693
        }
    ],
    orderBuilder: {}
}

export const getColors = () => {
    return database.colors.map(color => ({ ...color }))
}
export const getInteriors = () => {
    return database.interiors.map(interior => ({ ...interior }))
}
export const getTechnologies = () => {
    return database.technologies.map(technology => ({ ...technology }))
}
export const getWheels = () => {
    return database.wheels.map(wheel => ({ ...wheel }))
}
export const getOrders = () => {
    return database.orders.map(order => ({ ...order }))
}
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}
export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}
export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}
export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.orders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}