import React, { useContext } from "react";
import APIContext from "./ContextAPI";
import { Link } from "react-router-dom";
import {useParams } from "react-router";

const BookList = () => {
    const { users } = useContext(APIContext)
    const {id} = useParams();
    console.log(id)
    return (
        <>
            {users && users.map((book) => {
                return <>
                    <div className="listing-details row">
                        <div className="listing-box col-8">
                            <div className="img-box">
                                <img className="book-images" src={book.photo}></img>
                            </div>
                            <div className="books-details-box">
                                <a>
                                    <Link to={`/books/${book.id}`}><h3 className="book-name">{book.name}</h3></Link>
                             </a>
                                <p className="author-name">{book.author}</p>
                                <p className="city-name">{book.city.city_name}</p>
                                <p className="posted-by">Posted by :<a><img className="default-img" src="http://images.studentdesk.in/img/icons/large/defaultuser.png"></img>Jill thakkar</a></p>
                                <div><a className="buyBook-btn">Buy Book</a><a className="exchangeBook-btn">Exchange Book</a></div>
                            </div>
                            <div className="price-box col-4">
                                <h4>Price:{book.mrp}<i class="fa-solid fa-indian-rupee-sign"></i>
                                    
                                </h4>
                                <p style={{ marginTop: '30px' }}>Posted on : 1, Dec</p>
                            </div>
                        </div>
                    </div>
                </>
            })}

        </>
    )
};

export default BookList;

