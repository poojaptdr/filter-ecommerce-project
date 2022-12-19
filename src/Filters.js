import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'
import {CartState} from './context/Context'

const Filters = () => {

    const {productState: {byStock, byFastDelivery, sort, byRating}, productDispatch} = CartState()

    console.log(byStock, byFastDelivery, sort, byRating)

  return (
    <div className='filters'>
<span className='title'>Filter Products</span>
<span>
    <Form.Check 
        inline
        label='Ascending'
        name='goupe1'
        type='radio'
        id={'inline-1'}

        onChange={()=>
        productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'lowToHigh',
        })
        }
        checked={sort === 'lowToHigh' ? true : false}
    />
</span>
<span>
<Form.Check 
        inline
        label='Decending'
        name='goupe2'
        type='radio'
        id={'inline-2'}

        onChange={()=>
        productDispatch({
            type: 'SORT_BY_PRICE',
            payload: 'highToLow',
        })
        }
        checked={sort === 'highToLow' ? true : false}
    />
</span>
<span>
<Form.Check 
        inline
        label='Include Out of Stock'
        name='goupe3'
        type='checkbox'
        id={'inline-3'}

        onChange={()=>
        productDispatch({
            type: 'FILTER_BY_STOCK',
        })
        }        
        checked={byStock}
    />
</span>
<span>
<Form.Check 
        inline
        label='Fast Delivery'
        name='goupe4'
        type='checkbox'
        id={'inline-4'}

        onChange={()=>
        productDispatch({
            type: 'FILTER_BY_DELIVERY',
        })
        }
        checked={byFastDelivery}
    />
</span>
<span>
    <lable style={{paddingRight: 10}}>Rating:</lable>
    <Rating rating={byRating} onClick={(i)=>productDispatch({
        type: 'FILTER_BY_RATING',
        payload: i+1,
    })
    } 
    style={{cursor: 'pointer'}}/>
</span>
<Button variant='light' onClick={()=>productDispatch({
    type: 'CLEAR_FILTERS'
})}>Clear Filters</Button>
    </div>
  )
}

export default Filters