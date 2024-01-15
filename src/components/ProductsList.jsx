import React from 'react';
import CarDetails from './CarDetails';

const ProductsList = () => {


    const carDetails = [{
        id: 1,
        name: "Charger",
        model: "2022",
        color: "Red",
        typeModel: "Sport",
        isAvailable: true,
    },
    {
        id: 2,
        name: "Honda Civic",
        model: "2024",
        color: "Black",
        typeModel: "Sport",
        isAvailable: true,

    },
    {
        id: 3,
        name: "Camary",
        model: "2019",
        color: "White",
        typeModel: "Sport",
        isAvailable: false,
    },
    {
        id: 4,
        name: "Jeep",
        model: "2021",
        color: "Black",
        typeModel: "Sport",
        isAvailable: true,
    },
    {

        id: 5,
        name: "Porche",
        model: "2021",
        color: "Black",
        typeModel: "Sport",
        isAvailable: true,

    },
    {
        id: 6,
        name: "Tesla",
        model: "2021",
        color: "Black",
        typeModel: "Sport",
        isAvailable: true,
    }];

    const CarAvailable = ({ obj }) => {
        return obj.isAvailable ? <p>{obj.name} is Available</p> : <p>{obj.name} is not Available</p>
    }

    return (
        <div>
           
            <CarDetails details={carDetails} />
            <CarAvailable obj={carDetails} />



        </div>
    )

}
export default ProductsList;
