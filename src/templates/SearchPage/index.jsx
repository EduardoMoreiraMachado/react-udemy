import styles from './styles.module.css';

import { ShoppingItem } from '../../components/ShoppingItem';
import ProductsFilters from '../../components/ProductsFilters';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { SearchInput } from '../../components/SearchInput';
import { useEffect, useState } from 'react';
import { listByCategory } from '../../services/api/fetchs/costumer/products';
import {
  search,
  searchForProducts,
} from '../../services/api/fetchs/costumer/search';
import { listCategories } from '../../services/api/fetchs/common/category';
import { useLocation } from 'react-router-dom';

export const SearchPage = ({ context, category }) => {
  const location = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user-details'))
  );

  const [listOfProducts, setListOfProducts] = useState([]);
  const [search_key, setSearchKey] = useState(null);
  const [categories, setCateories] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const categories = await listCategories();
      setCateories(categories);
    };

    fetch().then();
  }, []);

  useEffect(() => {
    const { state } = location;
    if (state.context) setSearchKey(state.context);
  }, [location]);

  useEffect(() => {
    if (!category) return;

    const fetch = async () => {
      const { data } = await listByCategory(category.id);

      setListOfProducts(data);
    };

    fetch().then();
  }, [category]);

  useEffect(() => {
    console.log(search_key);

    if (!search_key) return;

    const fetch = async () => {
      const { data } = await search(search_key);
      const { products } = data;
      console.log('search', search_key, 'produtos', products);
      setListOfProducts(products);
    };

    fetch().then();
  }, [search_key]);

  const onValueChange = (event) => {
    const { value: newValue } = event.target;
    setSearchKey(newValue);
  };

  return (
    <>
      <Header user={{ picture_uri: '' }} />
      <div className={styles['text-input-wrapper']}>
        <SearchInput
          onChange={onValueChange}
          value={search_key ? search_key : ''}
        />
      </div>
      <div className={styles['all-container']}>
        <div className={styles['main-content-container']}>
          <div className={styles['result-search']}>
            <p>
              {' '}
              Resultados de:{' '}
              {search_key ? search_key : category ? category.name : ''}
            </p>
            <div className={styles['cards-result']}>
              {listOfProducts.map((product) => {
                return (
                  <ShoppingItem
                    name={product.name}
                    imgUrl={product.image_of_product.map((el) => el.image.uri)}
                    weight='100g'
                    price={product.price}
                    key={product.id}
                  />
                );
              })}
            </div>
          </div>
          <ProductsFilters
            categories={categories}
            setListOfProducts={setListOfProducts}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default SearchPage;
