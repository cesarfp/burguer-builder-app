import React, { Component } from 'react'
import CheckoutSummary from "../../components/Orders/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
	state = {
		ingredients:{
			meat:1,
			cheese:1,
			salad:1,
			bacon:1
		} 
	}

	componentDidMount(){
		const query = new URLSearchParams(this.props.location.search)
		const ingredients = {}
		for(let param of query.entries()){
			ingredients[param[0]] = +param[1]
		}

		this.setState({ingredients:ingredients})

	}

	checkoutCancelledHandler = () => {
		//this.props.history.goBack();
		// this.props.history.push('/')

		const queryParams = []
		for(let i in this.state.ingredients){
			queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
		}
		const queryString = queryParams.join('&')

		this.props.history.push({
			pathname:'/',
			search:'?' + queryString
		})
	}
	
	checkoutContinueHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	}

	render() { 
		console.log(this.props)
		return(
			<div>
				<CheckoutSummary 
					ingredients={this.state.ingredients}
					cancelOrder={this.cancelOrderHandler}
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

export default Checkout