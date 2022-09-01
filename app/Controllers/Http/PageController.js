'use strict'

class PageController {
    async home({ view }) {
        return view.render('pages.dashboard')
    }
    
    async orders() {
        
    }
}

module.exports = PageController
