import React from 'react'
import { render } from 'react-dom'
import Src from './'

function inject() {
	// Inject to any any tag with "data-inject" attribute
	let els = document.querySelectorAll(`[data-inject]`)
	for (let i = els.length; i--;) {
		// Don't inject if it's already been injected
		if (els[i].dataset.processed) continue
		render(<Src />, els[i])
		els[i].dataset.processed = true
	}
}

// Initial injection
inject()

// Expose to window
global.inject = inject