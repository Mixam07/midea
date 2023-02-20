import classNames from "classnames";
import { Transition } from "react-transition-group";
import s from "./Canvas.module.css";

const Canvas = (props) => {
    const classGenerator = (state) => {
        if(state === "entering") return "animate__animated animate__fadeIn"
        else if(state === "exiting") return "animate__animated animate__fadeOut"
    }
    
    const onClick = (e) => {
        if(e.target.classList.contains(s.canvas)){
            props.setTypePopup("");
        }
    }
    return(
        <Transition
        in={props.isShow}
        timeout={1000}
        mountOnEnter
        unmountOnExit
        >
            {state => (
                <div ref={props.canvas} onClick={ onClick } className={classNames(s.canvas, classGenerator(state), {[s.showHeader]: props.isShowHeader, [s.center]: props.isCenter})}>
                    <section className={classNames(s.popup, {[s.active]: props.isShow})}>
                        {props.children}
                    </section>
                </div>
            )}
        </Transition>
    )
}

export default Canvas;