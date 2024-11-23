export class Food {
    id: string;
    name: string;
    priceRaw: number; // Price in currency
    time: string; // Delivery time range (e.g., "30-40 min")
    deliveryRaw: number; // Delivery cost
    rating: number; // Rating as a number
    image: string; // Image URL
    restaurantId: string; // The ID of the associated restaurant
    description: string;

    constructor(
        id: string,
        name: string,
        price: number,
        time: string,
        delivery: number,
        rating: number,
        image: string,
        restaurantId: string,
        description: string
    ) {
        this.id = id;
        this.name = name;
        this.priceRaw = price;
        this.time = time;
        this.deliveryRaw = delivery;
        this.rating = rating;
        this.image = image;
        this.restaurantId = restaurantId;
        this.description = description;
    }

    get price(): string {
        return this.priceRaw.toFixed(2);
    }

    get delivery(): string {
        return this.deliveryRaw.toFixed(2);
    }

    static fromJson(json: any): Food {
        return new Food(
            json.id,
            json.name,
            json.price,
            json.time,
            json.delivery,
            json.rating,
            json.image,
            json.restaurantId,
            json.description
        );
    }
}