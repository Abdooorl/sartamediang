
const Services = ({data}) => {
     
    return (
        <div className="Services">
            <div className="text ">
                <h2 className="h2-Text bricolage-h2" >Enjoy Our Top Services</h2>
                <p className="subText DM-san-20">We give out the best service around here.</p>
            </div>
            <img src={require('../media/half-moon.png')} className="half-moon" alt = "half moon gradient" />

            <div className="grid">
                {data.map((content, idx) => {
                    return (
                        <div className="container border">
                            <i className={content.icon} key={idx} ></i>
                            <div className="innerText">
                                <h3 className="DM-san-24 " key={idx}> {content.text}</h3>
                                <p  key={idx} className=" DM-san-20">{content.detail}</p>
                            </div>
                        </div>
                )
            })
    
            }
            </div>
        </div>
    )
}

export default Services