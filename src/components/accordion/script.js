/**
 * External dependencies
 */
import Accordion from 'accordion-js'

/**
 * Script to be used on front-end.
 */

const accordion = {
    /**
     * Initialize
     * 
     * @param {Object} settings Settings 
     * 
     * @returns {Object} Accordion instance
     */
    init( settings = {} ) {
        if ( ! document.querySelector( '.gbc-accordion.gbc-active' ) ) {
            return
        }

        const config = Object.assign( {
            elementClass: "gbc-accordion__row",
            questionClass: "gbc-accordion__header",
            answerClass: "gbc-accordion__content",
            duration: 2000,
            showItem: false
        }, settings )

        return new Accordion( '.gbc-accordion.gbc-active', config )
    }
}

export default accordion
