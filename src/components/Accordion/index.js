import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Chevron } from "./Chevron";

import "./Accordion.css";

export const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("accordion__icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }

    function getIcon(icon) {
        return require('assets/img/' + icon).default
    }

    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{props.menu.title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={content}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <div className="accordion__text">
                    {props.menu.subMenus.map((subMenu, index) => (
                        <li key={index}>
                            <Link to={subMenu.link}>
                                <img src={getIcon(subMenu.icon)} alt="icon" />
                                <span>{subMenu.title}</span>
                            </Link>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    );
}