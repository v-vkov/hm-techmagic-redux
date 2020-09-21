import  React  from 'react';
import { connect } from 'react-redux';
import { sortProducts } from '../../actions/products.action';

import './sorting.css';


function SortBy(props) {

    const sortingOptions = props.productsPage.sortingOptions;
    const sortedBy = props.productsPage.sorted;

    const onSorting = (e) => {
        props.sortProducts(e.target.value);
      }

    return ( <div className="Sorting">
        <div> Sort by:
        <select 
          className="Sorting-select" 
          value={sortedBy}
          onChange={ e => onSorting(e) }>
            {sortingOptions.map((option, index) =>  (
                <option 
                key={index}
                value={option.name}
                >
                {option.label}
                </option>
            ))}       
        </select>
        </div>
        </div>     
    )
}   


const mapStateToProps = (state) => ({...state});

const mapDispatchToProps = dispatch => {
    return {
      sortProducts: sortKey => dispatch(sortProducts(sortKey))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SortBy);