import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import ConfirmedVendors from './confirmedVendors/ConfirmedVendors'
import UserDashboardConfirmVendors from '../userProfile/ConfirmedVendors'
import WishToBuy from './wishToBuy/WishToBuy'
import UserDashboardWishToBuy from '../userProfile/WishToBuy'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'
import Home from '../home/Home'
import AdminProfile from '../adminProfile/AdminProfile'
import UserProfile from '../userProfile/UserProfileCart'
import VendorManagement from '../adminProfile/VendorManagement'
import Services from '../services/Services'
import Example from '../budgetReport/BudgetReport'
import AdminServices from '../adminProfile/ServicesManagement'
import WeddingPlans from '../weddingPlans/WeddingPlans'
import Shop from '../shop/Shop'
import Galleries from '../galleries/Galleries'
import EmployeeProfile from '../employeeProfile/EmployeeProfile'
import DetailWeddingPlan from '../detailWeddingPlan/DetailWeddingPlan'
import WeddingPlanManagement from '../adminProfile/WeddingPlanManagement'
import ConfirmedCustomers from '../adminProfile/ConfirmedCustomers'
import CustomersWishList from '../adminProfile/CustomersWishList'
import ConfirmedWeddingPlans from '../userProfile/ConfirmedWeddingPlans'
import WishToBuyWeddingPlans from '../userProfile/WishToBuyWeddingPlans'
import CurrentEmployees from '../adminProfile/CurrentEmployees'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [isEmployee] = state.userAPI.isEmployee


    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/vendors" exact component={Products} />
            <Route path="/services" exact component={Services} />



            <Route path="/wedding_plans" exact component={WeddingPlans} />
            <Route path="/detail_wedding_plan/:id" exact component={DetailWeddingPlan} />
            <Route path="/create_weddingPlan" exact component={isAdmin ? WeddingPlanManagement : NotFound} />
            <Route path="/edit_weddingPlan/:id" exact component={isAdmin ? WeddingPlanManagement : NotFound} />



            <Route path="/shops" exact component={Shop} />
            <Route path="/galleries" exact component={Galleries} />
            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/admin_services" exact component={isAdmin ? AdminServices : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? VendorManagement : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? VendorManagement : NotFound} />

            <Route path="/admin_profile" exact component={isAdmin ? AdminProfile : NotFound} />
            <Route path="/vendor_management" exact component={isAdmin ? VendorManagement : NotFound} />
            <Route path="/confirmed_customers" exact component={isAdmin ? ConfirmedCustomers : NotFound} />
            <Route path="/customers_wishlist" exact component={isAdmin ? CustomersWishList : NotFound} />
            <Route path="/current_emp" exact component={isAdmin ? CurrentEmployees : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/user_profile" exact component={isLogged ? UserProfile : NotFound} />
            <Route path="/budget_report" exact component={isLogged ? Example : NotFound} />

            <Route path="/employee_profile" exact component={isEmployee ? EmployeeProfile : NotFound} />


            <Route path="/cart" exact component={Cart} />
            <Route path="/confirmed_vendors" exact component={ConfirmedVendors} />
            <Route path="/user_dashboard_confirmed_vendors" exact component={UserDashboardConfirmVendors} />
            <Route path="/wish_to_buy" exact component={WishToBuy} />
            <Route path="/user_dashboard_wish_to_buy" exact component={UserDashboardWishToBuy} />
            <Route path="/confirmed_wedding_plans" exact component={ConfirmedWeddingPlans} />
            <Route path="/wish_to_buy_wedding_plans" exact component={WishToBuyWeddingPlans} />



            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
