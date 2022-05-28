import React from 'react';


const ManageRow = ({ tool,refetch,setItemDeleted }) => {
    const { img, company, quantity, price, available } = tool;
    
    return (

        <tr>
            <th><div class="w-24 rounded">
                <img src={img} alt="item" />
            </div>
            </th>
            <td>{company}</td>
            <td>{quantity}</td>

            <td>{price}</td>
            <td>{available}</td>
          <td>  <label onClick={() =>setItemDeleted(tool)} htmlFor="delete-item" class="btn btn-outline btn-warning">Delete</label></td> 
            
        </tr>


    );
};

export default ManageRow;