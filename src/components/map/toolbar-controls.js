/**
 * Map Toolbar Controls component
 */

/**
 * WordPress dependencies
 */

import { Toolbar } from '@wordpress/components'

import { BlockControls } from '@wordpress/block-editor'

import { __ } from '@wordpress/i18n'

/**
 * MapToolbarControls Component
 * 
 * @param {Object} props Component props
 *  
 * @returns {JSX}
 */
const MapToolbarControls = ( { stateHandles } ) => {
    const { setShowingMap } = stateHandles

    /**
     * Toolbar controls
     */
    const toolbarControls = [
        {
            icon: 'edit',
            title: __( 'Edit Location', 'gbc' ),
            onClick: () => setShowingMap( false )
        }
    ]

    return (
        <BlockControls className="toolbar">
            <Toolbar 
                className="toolbar__edit" 
                controls={toolbarControls}
            />
        </BlockControls>
    )
}

export default MapToolbarControls