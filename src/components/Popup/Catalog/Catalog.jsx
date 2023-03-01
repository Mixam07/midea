import { useEffect, useState } from "react";
import CanvasContainer from "../../common/Canvas/CanvasContainer";
import s from "./Catalog.module.css";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { useRef } from "react";

const Catalog = (props) => {
    const [activeId, setActiveId] = useState(1),
        [isBigWindow, setIsBigWindow] = useState(window.innerWidth > 762),
        list = props.catalog.map((item, i) => (
            <li key={i + 1} className={s.item}>
                <button onClick={ () => { setActiveId(item.id) } } className={classNames(s.btn, {[s.activeBtn]: item.id === activeId})}>{item.title}</button>
            </li>
        )),
        hrefs = props.catalog.map(item => {
            if(activeId === item.id){
                return item.list.map((item, i) => (
                    <li id={i + 1} className={s.elem}>
                        <NavLink to={`/search/${item.href}`} className={({ isActive }) => isActive ? classNames(s.activeHref, s.href) : s.href}>{item.title}</NavLink>
                    </li>
                ))
            }
        }),
        canvas = useRef(null),
        activeItem = props.catalog[activeId - 1],
        numberHrefs =  (activeItem && activeItem.list) ? activeItem.list.length : 0;

    let start = 0, canvasPaddingTop, onMouse = () => {};

    /*
    useEffect(() => {
        if(canvas.current) canvasPaddingTop = window.getComputedStyle(canvas.current, "").paddingTop

        const onMouseDown = (e) => {
            if(e.target.classList.contains(s.line) ||
                e.target.classList.contains(s.span)){
                start = e.clientY
            }
        }
    
        const onMouseMove = (e) => {
            console.log(canvasPaddingTop)
            const offsetY = e.clientY - start;
            canvas.current.style.paddingTop = `${offsetY + canvasPaddingTop.slice(0,-2)}px`;
        }
    
        const onMouseUp = (e) => {
            const indexOffset = 3,
                offsetY = e.clientY - start,
                windowHeight = window.innerHeight,
                heightOffset = windowHeight / indexOffset;
            
            if(offsetY >= heightOffset && window.innerWidth <= 762){
                props.setTypePopup("")
            }
    
            start = 0
        }

        onMouse = (e) => {
            console.log(e)
        }

        props.getCatalog()
    }, [canvas])
    */

    /*
    useEffect(() => {
        props.getCatalog()
        window.addEventListener("resize", () => {
            if(window.innerWidth <= 762 && isBigWindow) setIsBigWindow(false)
            if(window.innerWidth > 762 && !isBigWindow) setIsBigWindow(true)
            if(!canvasPaddingTop || window.getComputedStyle(canvas.current).paddingTop != canvasPaddingTop) canvasPaddingTop = window.getComputedStyle(canvas.current).paddingTop
        })
    }, []);
    */
    
    return(
        <CanvasContainer canvas={canvas} isShow={props.isShow} onMouse={onMouse}>
            <div className={s.line}>
                <span className={s.span}></span>
            </div>
            <div className={s.wrapper}>
                <nav className={s.nav}>
                    <ul className={s.items}>{list}
                        <ul style={{gridRow: isBigWindow ?  `1/${numberHrefs + 1}` : `${activeId + 1}/${activeId + 2}`}} className={s.list}>{hrefs}</ul>
                    </ul>
                </nav>
            </div>
        </CanvasContainer>
    )
}

export default Catalog;