import React from 'react'

class TestComponent extends React.Component {
	render() {
		return (
			<div className='TestComponent'>
				Test component.
				<style jsx global>{`
					.TestComponent{
						color: #f00;
					}
				`}</style>
			</div>
		)
	}
}

export default TestComponent
