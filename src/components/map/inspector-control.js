/**
 * MapInspectorControls component
 */


/**
 * WordPress dependencies
 */

import {
    TextControl,
    Panel,
    PanelBody,
    RangeControl
} from '@wordpress/components'

import { InspectorControls } from '@wordpress/block-editor'

import { __ } from '@wordpress/i18n'

/**
 * MapInspectorControls component
 * 
 * @param {Object} props components props
 */
const MapInspectorControls = ( {
    attributes,
    setAttributes,
    stateHandles
} ) => {
    const {mapQuery, mapHeight, mapApiKey, mapZoomLevel } = attributes
    const { setMapSrc, setShowNoKeyError, setShowingMap } = stateHandles

    /**
     * Update zoom level and change map source.
     * 
     * @param {integer} newMapZoomLevel
     * 
     * @return {void} 
     */
    const onChangeZoom = ( newMapZoomLevel ) => {
        setAttributes({ mapZoomLevel: newMapZoomLevel })

        if ( ! mapApiKey ) {
            setShowNoKeyError(true)
            setAttributes( { showingMap: false } )
            return
        }

        if ( showingMap && mapQuery ) {
            const newMapSrc = isNaN( parseInt( newMapZoomLevel ) ) 
                    ? `https://google.com/maps/embed/v1/place?key=${ mapApiKey }&q=${ encodeURI( mapQuery ) }` 
                    : `https://google.com/maps/embed/v1/place?key=${ mapApiKey }&q=${ encodeURI( mapQuery ) }&zoom=${ newMapZoomLevel }`

            setMapSrc( newMapSrc )
        }
    }

    /**
     * Update API Key
     * 
     * @param {string} newKey New API Key 
     */
    const onChangeApiKey = ( newKey ) => {
        setAttributes( { mapApiKey: newKey } )
        setShowNoKeyError( false )
    }

    const onChangeHeight = ( newHeight ) => {
        setAttributes({mapHeight: newHeight})
    }

    return (
        <InspectorControls>
            <Panel>

                <PanelBody
                    className="settings"
                    title={ __( 'Map Settings', 'gbc' ) }
                >
                    <RangeControl
                        className="settings__hieht-input"
                        label={ __( 'Map Height in pixcel', 'gbc' ) }
                        value={mapHeight}
                        onChange={ onChangeHeight }
                        min={ 50 }
                        max={ 1000 }
                        step={ 20 }
                    />

                    <RangeControl
                        className="settings__zoom-input"
                        label={ __( 'Zoom Level', 'gbc' ) }
                        value={ isNaN( parseInt( mapZoomLevel ) ) ? '' : mapZoomLevel }
                        onChange={ onChangeZoom }
                        min={ 0 }
                        max={ 21 }
                        step={ 1 }
                    />

                    <TextControl
                        className="settings__key-input"
                        label={ __( 'Map API Key', 'gbc' ) }
                        value={mapApiKey}
                        onChange={ onChangeApiKey }
                    />
                </PanelBody>

            </Panel>
        </InspectorControls>
    )
}

export default MapInspectorControls