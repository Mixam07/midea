import classNames from "classnames";
import s from "./Banner.module.css";

const Banner = ({color, ...props}) => {
    return(
        <div className={classNames(s.banner, s[color])}>
            {color === "blue" && (
            <div className={classNames(s.decoration, s.before)}>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
            </div>
            )}
            {props.children}
            {color === "white" && (
            <div className={classNames(s.decoration, s.after)}>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
                <div className={s.stick}></div>
            </div>
            )}
        </div>
    )
}

export default Banner;