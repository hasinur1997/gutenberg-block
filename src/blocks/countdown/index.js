/**
 * Countdonw Block
 */

/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import Countdown from '../../components/countdown'

/**
 * Block name
 * 
 * @type {string}
 */
export const name = 'gutenberg-block-components/countdown'

/**
 *  Block settings
 * 
 * @type {Object}
 */
export const settings = {
    /**
     * Block title
     * 
     * @type {string}
     */
    title: __( 'Countdwon', 'gbc' ),

    /**
     * Block icon
     * 
     * @type {string}
     */
    icon: 'clock',

    /**
     * Block description 
     * 
     * @type {string}
     */
    description: __( 'Countdown Block', 'gbc' ),

    /**
     * Block category
     * 
     * @type {string}
     */
    category: 'common',

    /**
     * Block attributes
     * 
     * @type {Object}
     */
    attributes: {
        countdownExpirationDate: {
            type: 'number',
            default: 60 * ( 60 + Math.ceil( Date.now() / 60000 ) )
        },

        countdownExpirationMessage: {
            type: 'string',
            default: ''
        },

        countdownExpirationMessageTag: {
            type: 'string',
            default: 'h2'
        }

    },

    /**
     * Creates editor block
     * 
     * @param {Object} props Edit props 
     * 
     * 
     * @return {*}
     */
    edit( props ) {
        return <Countdown {...props} />
    },
    
    /**
     * Save
     * 
     * @param {Object} props Save props.
     *  
     * @returns {*}
     */
    save( props ) {
        return <Countdown.Content {...props} />
    }
}