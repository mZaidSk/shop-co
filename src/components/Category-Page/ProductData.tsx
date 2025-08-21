export interface products {
    id: number;
    title: string;
    priceBeforeDis: number;
    priceAfterDis: number;
    disPercent: number;
    rating: number;
    image: string;
}

export const products = [
    {
        id: 1,
        title: "Gradient Graphic T-Shirt",
        priceBeforeDis: 145,
        priceAfterDis: "",
        disPercent: "",
        rating: 5,
        image: "src/assets/images/categoryimg/Frame33.png",
    },
    {
        id: 2,
        title: "Polo With Tipping Details",
        priceBeforeDis: 180,
        rating: 4.5,
        priceAfterDis: "",
        disPercent: "",
        image: "src/assets/images/categoryimg/Frame34.png",
    },
    {
        id: 3,
        title: "Black Striped T-Shirt",
        priceBeforeDis: 100,
        priceAfterDis: 120,
        disPercent: 30,
        rating: 5.0,
        image: "src/assets/images/categoryimg/Frame38.png",
    },
    {
        id: 4,
        title: "Skinny Fit Jeans",
        priceBeforeDis: 260,
        priceAfterDis: 240,
        disPercent: 20,
        rating: 3.5,
        image: "src/assets/images/categoryimg/Frame71.png",
    },
    {
        id: 5,
        title: "Checkered Shirt",
        priceBeforeDis: 180,
        priceAfterDis: "",
        disPercent: "",
        rating: 4.5,
        image: "src/assets/images/categoryimg/Frame72.png",
    },
    {
        id: 6,
        title: "Sleeve Striped T-Shirt",
        priceBeforeDis: 160,
        priceAfterDis: 130,
        disPercent: 30,
        rating: 4.5,
        image: "src/assets/images/categoryimg/Frame73.png",
    },
    {
        id: 7,
        title: "Vertical Striped Shirt",
        priceBeforeDis: 232,
        priceAfterDis: 212,
        disPercent: 20,
        rating: 5,
        image: "src/assets/images/categoryimg/Frame32.png",
    },
    {
        id: 8,
        title: "Courage Graphic T-Shirt",
        priceBeforeDis: 145,
        priceAfterDis: "",
        disPercent: "",
        rating: 4,
        image: "src/assets/images/categoryimg/Frame70.png",
    },
    {
        id: 9,
        title: "Loose Fit Bermuda Shorts",
        priceBeforeDis: 80,
        priceAfterDis: "",
        disPercent: "",
        rating: 3,
        image: "src/assets/images/categoryimg/Frame71(1).png",
    },
];
