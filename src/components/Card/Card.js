import React from "react";
import "./Card.css";

const Card=(props)=>{
    return(
        <div className="card-container">
            <header className="header-card">{props.qna.domain.toUpperCase()}</header>
            <h3 className="sub-header-card">{props.qna.question}</h3>
            <section className="content-card">
               {props.qna.answer}
            </section>
            <footer className="footer-card">
                <div className="author-wrapper">By<span>{props.qna.name.split(' ')[0].toUpperCase()}</span></div>
                <div className="date-wrapper">Date:<span >{props.qna.date.split('T')[0]}</span></div>
            </footer>
        </div>
    )
}
export default Card;