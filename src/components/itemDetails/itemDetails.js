import React, {useState, useEffect} from 'react';
import './itemDetails.css';

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};

const ItemDetails = ({itemId, getData, children}) => {

    const [item, setItem] = useState([])
    
    useEffect(() => {
        updateItem();
    }, [itemId])


    const updateItem = () => {
        if (!itemId) {
            return;
        }

        getData(itemId)
            .then((item) => {
                setItem(item);
            })
    }

    if (!itemId) {
        return <span className='select-error'>Please select item in the list</span>
    }

    const {name} = item;

    return (
        <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                {
                    React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                }
            </ul>
        </div>
    );
}


export default ItemDetails;