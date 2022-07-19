import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { setProducts } from "../../redux/actions/productsActions";
import ProductItem from "./../ProductItem/ProductItem";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ProductList.scss';
import Sliders from './images/sliders.svg';
import upArrow from './images/arrow-up.svg';
import downArrow from './images/arrow-down.svg';


const ProductList = () => {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const fetchProducts = async () => {
        setIsLoading(true);

        const response = await axios
            .get("https://fakestoreapi.com/products")
            .then(res => {
                setIsLoading(false);
                return res;
            })
            .catch((err) => {
                console.log("Err: ", err);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);


    return (

        <div className="product-list-wrapper">
            {/* show for large device */}
            <div className="show__lg">
                {products.length > 0 && <span>{products.length} Results</span>}

                <select className="sort-product">
                    <option value="latest">Sort By Latest</option>
                    <option value="polularity">Sort By Polularity</option>
                    <option value="low_to_high">Sort By Low to High</option>
                    <option value="high_to_low">Sort By High to Low</option>
                </select>
            </div>

            {/* show for small device */}
            <div className="show__xs">
                <div>
                    <a href="/"><img className="filter-result" src={Sliders} />Filter Results</a>
                    <a href="/">
                        <img className="sort-result" src={upArrow} />
                        <img className="sort-result" src={downArrow} />Sort Results</a>
                </div>

                {products.length > 0 && <div>{products.length} Results</div>}
            </div>

            <section className="aem-Grid aem-Grid--12">
                {isLoading ? <LoadingSpinner /> : <ProductItem products={currentProducts} />}
            </section>

            <div className="pagination-background">
                <Pagination
                    itemsCountPerPage={postsPerPage}
                    activePage={currentPage}
                    totalItemsCount={products.length}
                    onChange={handlePageChange}
                    hideFirstLastPages={true}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>  
        </div>

    );
};

export default ProductList;
