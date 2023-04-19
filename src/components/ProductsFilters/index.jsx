import "./style.css";

import StarIcon from "../../imgs/star_icon.png";
import { useState } from "react";
import { useEffect } from "react";
import {
  listAllProductsWithFilters,
  listProducts,
  listWithFilters,
} from "../../utils/fetchs/Costumer/products";

export const ProductsFilters = ({ categories, setListOfProducts }) => {
  const [minPrice, setMinPrice] = useState(0.0);
  const [selectedCategory, setSelectedCategory] = useState("all"); // default is all
  const [stars, setStars] = useState(0);

  useEffect(() => {}, [selectedCategory]);
  useEffect(() => {
    const fetch = async () => {
      if (selectedCategory !== "all") {
        const { data: list } = await listWithFilters(
          selectedCategory,
          stars,
          minPrice
        );
        setListOfProducts(list);
        return null;
      }
      const list = await listAllProductsWithFilters(stars, minPrice);
      setListOfProducts(list);
    };

    fetch().then();
  }, [minPrice, selectedCategory, stars, setListOfProducts]);

  const handleClickInCategory = async (event) => {
    event.preventDefault();
    const { target } = event;
    const { id: categoryId } = target;
    setSelectedCategory(categoryId);
  };

  const handleClickInStars = async (event) => {
    event.preventDefault();
    const { target } = event;
    const { id } = target;
    setStars(id);
  };

  return (
    <div className="products-filters-container">
      <div className="up-container">
        <div className="category-filter">
          <h1 className="filter-title">Categoria</h1>

          <button
            id={"all"}
            key="all"
            className="category-filter-button"
            onClick={handleClickInCategory}
          >
            <h2 id={"all"}>Todos</h2>
          </button>

          {categories.map(({ name, id }) => {
            return (
              <button
                id={id}
                onClick={handleClickInCategory}
                key={name}
                className="category-filter-button"
              >
                <h2 id={id}>{name}</h2>
              </button>
            );
          })}
        </div>
        <div className="rating-filter">
          <h1 className="filter-title">Avaliação</h1>
          <button
            id={0}
            className="rating-filter-button"
            onClick={handleClickInStars}
          >
            <img id={0} src={StarIcon} alt="" />
            <h2 id={0}>0 ou mais</h2>
          </button>
          <button
            id={1}
            className="rating-filter-button"
            onClick={handleClickInStars}
          >
            <img id={1} src={StarIcon} alt="" />
            <h2 id={1}>1 ou mais</h2>
          </button>
          <button
            id={2}
            className="rating-filter-button"
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt="" id={2} />
            <h2 id={2}>2 ou mais</h2>
          </button>
          <button
            id={3}
            className="rating-filter-button"
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt="" id={3} />
            <h2 id={3}>3 ou mais</h2>
          </button>
          <button
            className="rating-filter-button"
            id={4}
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt="" id={4} />
            <h2 id={3}>4 ou mais</h2>
          </button>
          <button
            className="rating-filter-button"
            id={5}
            onClick={handleClickInStars}
          >
            <img src={StarIcon} alt="" id={5} />
            <h2 id={5}>5 apenas</h2>
          </button>
        </div>
      </div>
      <div className="down-container">
        <h1 className="filter-title">Preço</h1>
        <div className="slider-container">
          <input
            className={"less"}
            id="range"
            type="range"
            min="0"
            max="100"
            step="10"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <h1>R$ {minPrice}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsFilters;
