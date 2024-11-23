export class Restaurant {
    id: string;
    name: string;
    rating: string; // Rating (stored as string in the API)
    image: string; // Image URL
    description: string;

    constructor(id: string, name: string, rating: string, image: string, description: string) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.image = image;
        this.description = description;
    }

    static fromJson(json: any): Restaurant {
        return new Restaurant(
            json.id,
            json.name,
            json.rating,
            json.image,
            json.description
        );
    }
}