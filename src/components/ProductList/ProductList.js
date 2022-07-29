import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";
import { orderBy } from "lodash";
import { setProducts } from "../../redux/actions/productsActions";
import ProductItem from "./../ProductItem/ProductItem";
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import './ProductList.scss';
import Sliders from './images/sliders.svg';
import upArrow from './images/arrow-up.svg';
import downArrow from './images/arrow-down.svg';

const CATEGORIES = {
    "men": "men's clothing",
    "women": "women's clothing",
    "jewelery": "jewelery",
    "electronics": "electronics"
};


const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const filterVal = useSelector((state) => state.product.category);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterdata, setFilterdata] = useState(products);
    const postsPerPage = 9;
    const [sortValue, setSortValue] = useState();

    const { category } = useParams();

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

        setFilterdata(response.data);
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        if (products.length) {
            if (category != 'all') {
                let filterCategory = filterVal.length ? filterVal : [CATEGORIES[category]];
                let filterCat = products.filter(item => filterCategory.includes(item.category.toLowerCase()));
                setFilterdata(filterCat);
            } else {
                setFilterdata(products);
            }

            if (sortValue) {

                if (sortValue === "low_to_high") {
                    let sortArray = orderBy(filterdata, ['price'], ["asc"]);
                    setFilterdata(sortArray);
                } else if (sortValue === "high_to_low") {
                    let sortArray = orderBy(filterdata, ['price'], ["desc"]);
                    setFilterdata(sortArray);
                } else {
                    let sortArray = orderBy(filterdata, [(c) => c.rating.rate], ["desc"]);
                    setFilterdata(sortArray);
                }                
            }
        } else {
            fetchProducts();
        }
    }, [products, category, filterVal, sortValue]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    function handleSelectChange(event) {      
        setSortValue(event.target.value);
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProducts = filterdata.slice(indexOfFirstPost, indexOfLastPost);

    return (

        <div className="product-list-wrapper">
            {/* show for large device */}
            <div className="show__lg">
                {filterdata.length > 0 && <span>{filterdata.length} Results</span>}

                <select className="sort-product" value={sortValue} onChange={handleSelectChange}>
                    <option value="rating">Sort By Rating</option>
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

                {currentProducts.length > 0 && <div>{currentProducts.length} Results</div>}
            </div>

            <section className="aem-Grid aem-Grid--12">
                {isLoading ? <LoadingSpinner /> : <ProductItem products={currentProducts} />}
            </section>

            <div className="pagination-background">
                <Pagination
                    itemsCountPerPage={postsPerPage}
                    activePage={currentPage}
                    totalItemsCount={filterdata.length}
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
