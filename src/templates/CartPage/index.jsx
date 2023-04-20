import styles from './style.module.css'
import { Header } from '../../components/Header';
import { Title } from "../../components/Title"
import { NavBar } from "../../components/NavBar";
import { ShoppingCartItem } from "../../components/ShoppingCartItem";
import { Footer } from "../../components/Footer";

export const CartPage = () => {

    return (
        <div className={styles["cartpage-container"]}>
            <Title text={'Meu Carrinho'} />
            <div className={styles["main-container-cart"]}>
                <NavBar />
                <div className={styles["card-payment-container"]}>
                    <div className={styles["card-cart-container"]}>
                        <div className={styles["card-cart"]}>
                            <div className={styles['main-purchase-info']}>
                                <div className={styles['purchase-image']} style={{backgroundImage: `url('https://pocosdecaldas.mg.gov.br/wp-content/uploads/2020/05/WhatsApp-Image-2020-04-09-at-09.41.39-2-1024x768.jpeg')`}}></div>
                                <div className={styles['purchase-info']}>
                                    <h1>Barraca do Seu Zé</h1>
                                    <h2>Feira de São Domingos</h2>
                                    <span>Data: 41/13/2027</span>
                                </div>
                            </div>
                            <ShoppingCartItem
                                name={'Abobora'}
                                imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                                unit={8591}
                                price={2.50}
                            />
                            <ShoppingCartItem
                                name={'Abobora'}
                                imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                                unit={8591}
                                price={2}
                            />
                            <ShoppingCartItem
                                name={'Abobora'}
                                imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                                unit={8591}
                                price={9.09}
                            />
                            <ShoppingCartItem
                                name={'Abobora'}
                                imgUrl={'https://naturaldaterra.com.br/media/catalog/product/1/0/100408---2005260000003---mini-abobora-moranga.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover'}
                                unit={8591}
                                price={9.09}
                            />
                        </div>
                    </div>
                    <div className={styles["payment-card"]}>
                        <h1>Resumo do pedido</h1>
                        <div className={styles["total-payment"]}>
                            <span>TOTAL:</span>
                            <h2>R$ 48,00</h2>
                        </div>
                        <button>Pagar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage
