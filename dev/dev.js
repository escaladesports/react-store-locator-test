import React from 'react'
import { render } from 'react-dom'
import { Map, Info } from 'react-store-locator'
import Marker from 'react-icons/lib/fa/map-marker'

const dealers = [
	{
		id: 1,
		lat: 50,
		lng: 25.1,
		name: 'First Address',
	},
	{
		id: 2,
		lat: 50,
		lng: 25.2,
		name: 'Second Marker'
	},
	{
		id: 3,
		lat: 50,
		lng: 25.3,
		name: 'Third Marker'
	}
]


class Test extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			dealers: []
		}
		this.onChange = this.onChange.bind(this)
	}
	onChange(dealers){
		this.setState({ dealers })
	}
	render(){
		return (
			<div>
				<Map
					onChange={this.onChange}
					dealers={dealers}
					pin={props => (
						<div
							onClick={() => props.handleDealerClick(props.id)}
							className='marker'
						>
							<Marker size={50} />
							{props.children}
						</div>
					)}
				>
					{(dealer, closeDealer) => (
						<Info show={dealer.show}>
							<div className='info'>
								<div
									className='close'
									onClick={() => closeDealer(dealer.id)}>
									×
								</div>
								<div>{dealer.name}</div><br />
								<div>817 Maxwell Ave.</div>
								<div>Evansville, IN 47711</div>
							</div>
						</Info>
					)}
				</Map>
				<ul>
					{this.state.dealers.map((dealer, key) => (
						<li key={`dealer${key}`}>{dealer.name}</li>
					))}
				</ul>
				<style jsx>{`
					.marker{
						cursor: pointer;
						transform: translateX(-50%);
					}
					.info{
						padding: 10px 15px;
						position: relative;
						color: #fff;
						background: #000;
						font-size: 1.1em;
					}
					.close{
						font-size: 23px;
						position: absolute;
						top: 0px;
						right: 10px;
						cursor: pointer;
					}
				`}</style>
			</div>
		)
	}
}

render(
	<Test />,
	document.querySelector('#container')
)