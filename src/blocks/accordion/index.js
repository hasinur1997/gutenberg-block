/**
 * Accordion Block
 */

/**
 * WordPress dependencies
 */

import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import Accordion from '../../components/accordion'

/**
 * Block name
 * 
 * @type {string}
 */
export const name = 'gutenberg-block-components/accordion'

/**
 * Block settings
 * 
 * @type {Object}
 */
export const settings = {
    /**
     * Block title
     * 
     * @type {string}
     */
    title: __( 'Accordion', 'gbc' ),

    /**
     * Block icon
     * 
     * @type {string}
     */
    icon: 'format-image',

    /**
     * Block description
     * 
     * @type {string}
     */
    description: __( 'Accordion Block', 'gbc' ),

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
        accordion: {
            type: 'array',
            default: []
        },
        accordionTitleTag: {
            type: 'string',
            default: 'h3'
        }
    },

    /**
     * Create editor block
     * 
     * @param {Object} props Edit props
     * 
     * @return {*} 
     */
    edit( props ) {
        return <Accordion {...props}/>
    },

    /**
     * Save
     * 
     * @param {Object} props Save props
     * 
     * @return {*} 
     */
    save( props ) {
        return <Accordion.Content { ...props } />
    }
}
