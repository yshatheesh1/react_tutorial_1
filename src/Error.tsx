import React from "react";
import { useState } from "react"

export const ErrorComponent = (props: any) => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => {
        setShowMore(!showMore);
    }

    return <div>
        {props.errorCode} {'. '} Please try again. <button onClick={handleShowMore}>Show more</button>
        {
            showMore ? <div>showing more</div>  : <div>show less</div>
        }
    </div>
}