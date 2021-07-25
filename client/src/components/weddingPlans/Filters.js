import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    // const [categories] = state.categoriesAPI.categories

    // const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.weddingPlansAPI.sort
    const [search, setSearch] = state.weddingPlansAPI.search
    // const [searchAddress, setSearchAddress] = state.weddingPlansAPI.searchAddress


    const handleCategory = e => {
        // setCategory(e.target.value)////////////////////////////////////find this error//////////////////////////////////////////////////////////////////
        setSearch('')
        // setSearchAddress('')
    }

    
    return (
        <div className="filter_menu">
            {/* <div className="row">
                <span>Services: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>All Services</option>
                    {
                        categories.map(category => (
                            <option value={"category=" + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </div> */}

            <input type="text" value={search} placeholder="Search Your Wedding Plans!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            {/* <input type="text" value={searchAddress} placeholder="Search Your Nearest Vendor!!! "
            onChange={e => setSearchAddress(e.target.value.toLowerCase())} /> */}

            <div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best Vendors</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
