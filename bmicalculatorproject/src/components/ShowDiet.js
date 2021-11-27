import React from 'react'

function ShowDiet({items}) {
    return (
        <div>
            <article className="diet-list" key={items.id}>
                <h3 >YOUR DIET LIST</h3>
                <h3>Breakfast</h3>    
                <p>{items.breakfast}</p>
                <h3>Lunch</h3>  
                <p>{items.lunch}</p>
                <h3>Dinner</h3>  
                <p>{items.dinner}</p>
            </article>
        </div>
    )
}
export default ShowDiet
