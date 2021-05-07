import React, {Component} from 'react';
import Spinner from '../spinner';
import './itemList.css';
import PropTypes from 'prop-types';
import gotServise from '../../services/gotServise';
class ItemList extends Component {

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);

            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {
        const {data} = this.props;
        const items = this.renderItems(data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null
        }
    
        static defaultProps = {
            onItemSelected: () => {}
        }
        
        static propTypes = {
            onItemSelected: PropTypes.func
        }
    
        componentDidMount() {
    
            getData()
                .then( (data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const {data} = this.state;

            if (!data) {
                return <Spinner/>
            }
            return <View {...this.props} data={data} />
        }
    }
}

const {getAllCharacters} = new gotServise();
export default withData(ItemList, getAllCharacters);


