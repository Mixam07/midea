import s from "./App.module.css";
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Index from '../Index/Index';
import HeaderContainer from "../Header/HeaderContainer";
import AsideContainer from "../Aside/AsideContainer";
import CatalogContainer from "../Popup/Catalog/CatalogContainer";
import GoodContainer from "../Good/GoodContainer";
import MessageContainer from "../Message/MessageContainer";
import SearchContainer from "../Searсh/SearchContainer";

const App = (props) => {
    return(
        <BrowserRouter>
            <HeaderContainer />
            <main className={s.main}>
                <Routes>
                    <Route path="" element={ <Index /> } />
                    <Route path="/good/:goodId" element={ <GoodContainer /> } />
                    <Route path="/search/*" element={ <SearchContainer /> } />
                </Routes>
            </main>
            <Footer />
            <MessageContainer />
            <Routes>
                <Route path="/good/:goodId" element={ <AsideContainer isGoodPage={true} /> } />
                <Route path="*" element={ <AsideContainer /> } />
            </Routes>
            <CatalogContainer isShow={props.typePopup === "catalog"} />
        </BrowserRouter>
    )
}

export default App;