import React from 'react'

const Greeting = () => {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours !== 0 && hours >= 6 && hours <= 12){
        timeOfDay = 'morning'
    }else if(hours >= 13 && hours <= 17){
        timeOfDay = 'afternoon'
    }else{
        timeOfDay = 'evening'
    }

    return (
        <div
            style={{
                color : 'purple',
                fontSize : 22,
                textAlign : 'center',
                marginBottom : 20
            }}
        >
            <p>Good {timeOfDay} &nbsp;
                <i className={
                    timeOfDay === 'morning' ? "fas fa-sun"
                    : timeOfDay === 'evening' ? "fas fa-moon"
                    : "fas fa-cloud-sun"}
                    style={{
                        color : timeOfDay === 'morning' ? "yellow"
                        : timeOfDay === 'evening' ? "#c4c4c4"
                        : "#e39e49"
                    }}
                >
                </i>
            </p>
        </div>
    )
}

export default Greeting

