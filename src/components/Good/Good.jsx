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
            <Info />
            <Description />
            <Information />
        </>
    )
}

export default Good;