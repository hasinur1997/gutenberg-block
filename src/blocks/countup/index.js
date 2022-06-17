/**
 * Test Block
 */

/**
 * WordPress dependencies
 */
import {__} from '@wordpress/i18n'

/**
 * Internal dependencies
 */


/**
 * Block name
 */

export const name = 'gutenberg-block-components/countup'

/**
 * Block Settings.
 * 
 * @type {Object}
 */

export const settings = {
    /**
     * Block title.
     * 
     * @type {string}
     */
    title: __( 'Count Up', 'gutenberg-block-components' ),

    /**nu
     * Block icon
     * 
     * @type {string}
     */
    icon: 'backup',

    /**
     * Block category
     * 
     * @type {string}
     */
    category: 'common',

    /**
     * Block description
     * 
     * @type {string}
     */
    description: __(
        'Count Up Block to numbers from start to end',
        'gutenberg-block-components'
    ),

    attributes: {
        countStart: {
            type: 'number',
            default: 0
        },
        
    }
}