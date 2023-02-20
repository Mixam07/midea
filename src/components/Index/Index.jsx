import GoodsContainer from "../Goods/GoodsContainer";
import Information from "../Information/Information";
import Promo from "../Promo/Promo";

const Index = (props) => {
    return(
        <>
            <Promo />
            <GoodsContainer />
            <Information />
        </>
    )
}

export default Index;