
export interface FoodItem {
    name: string
    cost: number
    desc: string
    srcImg: string
}

export const lbsOptions: number[] = [ 0,0.2,0.5,0.7,1,1.5,2,2.5,3,4,5,10]


export const foodList: FoodItem[] = [
    {
        "name": "Heirloom tomato", 
        "cost": 5.99,
        "desc": "Grown in San Juan Capistrano, CA",
        "srcImg": "src/WorldPeas Imgs/ed-o-neil-AvvdZlhDowA-unsplash 1.png"
    },
    {
        "name": "Organic ginger", 
        "cost": 12.99,
        "desc": "Grown in Huntington Beach, CA",
        "srcImg": "src/WorldPeas Imgs/noonbrew-ziCb4_EKmak-unsplash.png"
    },
    {
        "name": "Sweet onion", 
        "cost": 2.99,
        "desc": "Grown in Imperial Valley, CA",
        "srcImg": "src/WorldPeas Imgs/k8-0_fkPHulv-M-unsplash 1.png"
    }
]


export interface ToastItem {
        message: string;
        show: boolean;
}

export interface CartItem {
    food: FoodItem
    lbs: number
}

export function round(val: number) {
    return parseFloat((Math.round((val) * 100) / 100).toFixed(2)) 
}