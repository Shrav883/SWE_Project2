import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { backendUrl, currency } from '../App';
import './pages.css'; // Import pages.css

const List = ({token}) => {
    const [list, setList] = useState([]);

    const fetchList = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setList(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };

    const removeProduct = async (id) => {
        try{
            const response = await axios.post(backendUrl + '/api/product/remove', {id}, {headers:{token}})

            if (response.data.success) {
                toast.success(response.data.message)
                await fetchList();
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className="list-page-container"> {/* New container for the whole page */}
            <p className="list-page-title">All Products List</p>
            <div className="list-table-container"> {/* New container for the table-like structure */}
                {/*-----------List Table Title --------- */}
                <div className="list-table-header">
                    <b className="list-header-image">Image</b>
                    <b className="list-header-name">Name</b>
                    <b className="list-header-category">Category</b>
                    <b className="list-header-price">Price</b>
                    <b className="list-header-action">Action</b>
                </div>
                {/*---------------Product List---------------- */}
                {list.map((item, index) => (
                    <div key={index} className="list-table-row">
                        <img
                            src={item.image && item.image.length > 0 ? item.image[0] : ''}
                            alt={item.name || 'Product Image'}
                            className="list-item-image"
                        />
                        <p className="list-item-name">{item.name}</p>
                        <p className="list-item-category">{item.category}</p>
                        <p className="list-item-price">
                            {currency}
                            {item.price}
                        </p>
                        <p onClick={()=>removeProduct(item._id)} className="list-item-action">X</p>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
};

export default List;