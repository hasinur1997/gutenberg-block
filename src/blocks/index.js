/**
 * Block Registration
 */

/**
 *  WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks'

/**
 * Internal dependencies
 */
import * as map from './map'

const registerBlocks = () => {
    registerBlockType(map.name, map.settings)
}

// Kick Off all block here
registerBlocks()
