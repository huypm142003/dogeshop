import { Banner, ProductContainer, Promotion } from './../components';

const Home = () => {
    return ( 
        <>
            <Banner />
            <ProductContainer title="Featured Products" filter="isFeatured" />
            <Promotion />
            <ProductContainer title="Best Seller" filter="isBestSeller" />
        </>
     );
}
 
export default Home;