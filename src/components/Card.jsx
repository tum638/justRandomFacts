import React from "react";
import { useState } from "react";

const Card = (props) => {

    return (
        <div className="flip-card">
            <div className={props.flipCardInner}>
                <div className="flip-card-front">
                    <p className="fact">{props.fact[0].factQuestion} ?</p>
                </div>
                <div className="flip-card-back">
                    <p className="answer">{props.fact[0].factAnswer}</p>
                </div>
            </div>
            
            
        </div>
    )
}
export default Card;