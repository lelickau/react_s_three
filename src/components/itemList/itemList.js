import React, {Component} from 'react';
import Spinner from '../spinner';
import './itemList.css';
import gotService from '../../services/gotServise';
export default class ItemList extends Component {

    gotService = new gotService();
    
    state = {
        charList: null,
    }

    componentDidMount() {
        this.gotService.getAllCharacters().then((charList) => {
            this.setState({
                charList
            })
        })
    }

    renderItem(arr) {
        return arr.map((item, i) => {
            return (
                <li 
                    key={i}
                    onClick={() => this.props.onCharSelected(41 + i)}
                    className="list-group-item">
                    {item.name}
                </li>
            )
        }) 
    }

    render() {
        const {charList} = this.state;
        
        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItem(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}