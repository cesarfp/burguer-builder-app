import React, { Component } from 'react'
import Order from '../../components/Orders/Order'

class Orders extends Component {
	state = { 
	}

	render() { 
		return(
			<div>
				<Order />
				<Order />
			</div>
		)
	}
}

export default Orders