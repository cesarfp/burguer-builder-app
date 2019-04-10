import React, {Component} from 'react'
import {Route,	Redirect} from "react-router-dom";
import {connect} from 'react-redux'

import ContactData from './ContactData/ContactData';
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
	
	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	}
	
	checkoutContinueHandler = (event) => {
		event.preventDefault();
		this.props.history.replace('/checkout/contact-data');
	}

	render() { 
		let summary = <Redirect to="/" />
		if(this.props.ings){
			summary = (
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
		return summary
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients
	}
}

// const mapDispatchToProps 

export default connect(mapStateToProps)(Checkout)