import React from "react";
import "./Card.css";

const Card=()=>{
    return(
        <div className="card-container">
            <header className="header-card">Javascript</header>
            <h3 className="sub-header-card">Howto create a Composite Function</h3>
            <section className="content-card">
                Lorem ipsum dolor sit amet, consectetur adipisicing 
                Odio enim, corrupti sed voluptas fugit veritatis quos   
                runt eos officia, mollitia labore enim alias.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis dolorem ipsam deserunt ad consequatur minima 
                ratione a explicabo! Ab, dignissimos minima eaque velit 
                delectus sequi temporibus enim vero aut explicabo! 
                Exercitationem eum officia enim voluptatem et ex ea!
            </section>
            <footer className="footer-card">
                <div className="author-wrapper">By<span>HERMANN</span></div>
                <div className="date-wrapper">Date:<span >17-05-19</span></div>
            </footer>
        </div>
    )
}
export default Card;