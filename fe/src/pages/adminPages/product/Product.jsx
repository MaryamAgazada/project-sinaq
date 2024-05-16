import React from 'react'
import { useState,useEffect } from "react";
import { useContext } from "react";
import { MainContext } from "../../../context/MainProvider";
function Product() {
    const [data, setData] = useState([]);
    const { getCountBasket, isExist, DecreaseItem, RemoveBasket, IncreaseItem } =
    useContext(MainContext);
    async function getAllData() {
      fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => setData(data));
    }
    function handleDelete(id) {
        fetch("http://localhost:3000/products" + id, {
      method: 'DELETE',
    })
        .then(response => response.json())
      }
    useEffect(() => {
      getAllData();
    });
  return (
    <div>
     {data.map((x) => (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td onClick={()=>handleDelete(x._id)}>delete</td>
              <td onClick={() => IncreaseItem(x)} className="btn">
                Add basket
              </td>
            </tr>
          </tbody>

        </table>
      ))}
    </div>
  )
}

export default Product
