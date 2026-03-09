// ============================================================
// SARKINMOTA AUTOS — CAR INVENTORY DATA
// ============================================================

import gWagonImg from '../assets/Mercedes-Benz G-Wagon.jpeg';
import escaladeImg from '../assets/Cardillac Escalade Bulletproof.jpeg';
import bmwX5Img from '../assets/BMW X5.jpeg';
import avatarImg from '../assets/Avatar 12 Hybrid.jpeg';
import gleImg from '../assets/Mercedes Benz GLE 63s.jpeg';
import pradoImg from '../assets/Toyota Prado.jpeg';

export const cars = [
    {
        id: 1,
        name: 'Mercedes-Benz G-Wagon',
        model: 'G63 AMG 2023 ',
        price: '₦175,000,000',
        condition: 'Foreign Used',
        conditionKey: 'conditionUsed',
        sold: false,
        image: gWagonImg,
        badge: 'Bulletproof',
    },
    {
        id: 2,
        name: 'Cardillac Escalade Bulletproof',
        model: '2024',
        price: '₦450,000,000',
        condition: 'Foreign Used',
        conditionKey: 'conditionUsed',
        sold: true,
        image: escaladeImg,
        badge: 'Cardillac',
    },
    {
        id: 3,
        name: 'BMW X5',
        model: '2025',
        price: '₦170,000,000',
        condition: 'Brand New',
        conditionKey: 'conditionNew',
        sold: false,
        image: bmwX5Img,
        badge: 'BMW',
    },
    {
        id: 4,
        name: 'Avatar 12 Hybrid',
        model: '2025',
        price: '₦195,000,000',
        condition: 'Foreign Used',
        conditionKey: 'conditionUsed',
        sold: false,
        image: avatarImg,
        badge: 'Avatar',
    },
    {
        id: 5,
        name: 'Mercedes Benz GLE 63s ',
        model: '2025',
        price: '₦95,000,000',
        condition: 'Foreign Used',
        conditionKey: 'conditionUsed',
        sold: true,
        image: gleImg,
        badge: 'AMG',
    },
    {
        id: 6,
        name: 'Toyota Prado',
        model: '2025',
        price: '₦150,000,000',
        condition: 'Brand New',
        conditionKey: 'conditionNew',
        sold: false,
        image: pradoImg,
        badge: 'Prado',
    },
];
