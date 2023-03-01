import Information from "../Information/Information";
import Navigation from "../Navigation/Navigation";
import Description from "./Description/Description";
import Info from "./Info/Info";

const Good = (props) => {
    return(
        <>
            <Navigation list={[
                {
                    text: "Главная",
                    href: ""
                },
                {
                    text: "Товары для кухни",
                    href: "search"
                },
                {
                    text: "Кухонные наборы",
                    href: "search"
                }
            ]} />
            <Info getCard={props.getCard} setFavourite={props.setFavourite} id={props.card.id} img={props.card.img}
                cost={props.card.cost} title={props.card.title} isFavourite={props.card.isFavourite} />
            <Description desc={props.card.desc} />
            <Information />
        </>
    )
}

export default Good;