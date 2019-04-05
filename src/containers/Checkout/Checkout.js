import React, {Component} from 'react'
import {Route} from "react-router-dom";
import {connect} from 'react-redux'

import ContactData from './ContactData/ContactData';
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
	
	checkoutCancelledHandler = () => {
		this.props.history.goBack();
		// this.props.history.push('/')

		// const queryParams = []
		// for(let i in this.state.ingredients){
		// 	queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
		// }
		// const queryString = queryParams.join('&')

		// this.props.history.push({
		// 	pathname:'/',
		// 	search:'?' + queryString
		// })
	}
	
	checkoutContinueHandler = (event) => {
		event.preventDefault();
		this.props.history.replace('/checkout/contact-data');
	}

	render() { 
		console.log(this.props)
		return(
			<div>
				<CheckoutSummary 
					ingredients={this.props.ings}
					checkoutCancelled={this.checkoutCancelledHandler}	
					checkoutContinued={this.checkoutContinueHandler}
				/>
				<Route 
					path={this.props.match.url + '/contact-data'} 
					component={ContactData}
				/>
			</div>
			
		)
	}
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients,
	}
}

// const mapDispatchToProps 

export default connect(mapStateToProps)(Checkout)