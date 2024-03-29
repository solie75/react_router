import React from 'react';

const Td = ({item}) => {

    return (
        
        <tr>
            <td><input type={"checkbox"} /></td>
            <td>{item.id}</td>
            <td>{item.productName}</td>
            <td>{item.productCode}</td>
            <td>{item.shoppingMallCode}</td>
            <td>{item.Category}</td>
            <td>{item.BrandName}</td>
            <td>{item.MSRP}</td>
            <td>{item.price}</td>
            <td>{item.stock}</td>
            <td>{item.writer}</td>
            <td>{item.postingDate}</td>
            <td>{item.LastModifier}</td>
            <td>{item.ModifiedDate}</td>
            <td>{item.views}</td>
        </tr>
        
    );
};

export default Td;