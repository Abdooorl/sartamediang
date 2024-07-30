const Join = () => {
    return (
        <div className="join-section">
            <div className="join-content">
                <div className="inner-flex">
                    <div className="join-text">
                        <p className="DM-san-16 color align-left">Best Experience</p>
                        <h2 className="h2-Text bricolage-h2 align-left">Don’t waste more time to create memories</h2>
                    </div>
                    <div className="button-section">
                        <button className="Button primaryButton DM-san-18">Send a message</button>
                        <p className="color DM-san-18" >Book us</p>  
                    </div>
                </div>
                <img src={require('../media/Contact.png')} className="contact-img" alt = "contact details image" />
            </div>
        </div>
    )
}

export default Join;