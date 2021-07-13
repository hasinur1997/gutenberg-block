/**
 * Test Map Block
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import Map from '../../components/map'

/**
 * Block name
 * 
 * @type string
 */
export const name = 'gutenberg-block-components/map'

/**
 * Block Settings
 * 
 * @type {Object}
 */
export const settings = {
    /**
     * Block title
     * 
     * @type {string}
     */
    title: __( 'Map', 'gbc' ),

    /**
     * Block icon
     * 
     * @type {string}
     */
    icon: 'location-alt',

    /**
     * Block description
     * 
     * @type {string}
     */
    description: __( 'Embed google map by address', 'gbc' ),

    /**
     * Block category
     * 
     * @type {string}
     */
    category: 'common',

    /**
     * Block supports
     * 
     * @type {Object}
     */
    support: {
        align: true
    },

    attributes: {
        mapAlign: {
            type: 'string',
            default: ''
        },

        mapQuery: {
            type: 'string',
            default: ''
        },

        mapHeight: {
            type: 'integer',
            default: 400
        },

        mapApiKey: {
            type: 'string',
            default: ''
        },

        mapZoomLevel: {
            type: 'integer',
            default: 12
        },
    },

    /**
     * Creates editor block.
     * 
     * @param {Object} props
     *  
     * @returns {JSX} 
     */
    edit( props ) {
        return <Map {...props} />
    },
    
    /**
     * Save
     * 
     * @param {Object} props
     *  
     * @returns {JSX} 
     */
    save( props ) {
        return <Map.Content {...props}/>
    }

}