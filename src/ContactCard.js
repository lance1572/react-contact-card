import React, { useState }from "react";

const ContactCard = (props) => {
    // destructure assign var and func and init 
    const [showAge, setShowAge]  = useState(false);
    return (
        <div className="contact-card">
            <div className="card-details">
                <img src={props.avatar} alt="card avatar" />
                <p>Name:  {props.name}</p>
                <p>Email: {props.email}</p>
                 <button onClick={() => setShowAge(!showAge)}>Show Age</button>
                 {showAge ? <p>Age: {props.age}</p> : null}
            </div>
        </div>
    );
};

export default ContactCard;