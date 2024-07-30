const Started = ({data}) => {
    return (
        <div className="Get-Started">
            <div className="text">
                <p className=" DM-san-16">Customer Satisfaction.</p>
                <h2 className="h2-Text bricolage-h2" >Steps to get started with us.</h2>
            </div>

            <div className="grid">
                {data.map((content, idx) => {
                    return (
                        <div className="container container-started">
                            <i className={content.icon} key={idx} ></i>
                            <div className="innerText innerText-started">
                                <h3 className="DM-san-24 center" key={idx}> {content.text}</h3>
                                <p  key={idx} className="center DM-san-20" >{content.detail}</p>
                            </div>
                        </div>
                )
            })
    
            }
            </div>
        </div>
    )
}

export default Started;