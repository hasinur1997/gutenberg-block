/**
 * Map Component
 */

/**
 * WordPress dependencies
 */
import {
    Placeholder,
    Button,
    TextControl
} from '@wordpress/components'

import { useState } from '@wordpress/element'
import { __ } from '@wordpress/i18n'

/**
 * Internal dependencies
 */
import MapInspectorControls from './inspector-control'
import MapToolbarControls from './toolbar-controls'
import Save from './save'

/**
 * Map Component
 * 
 * @param {Object} props Component props 
 */
const Map = ( { attributes, setAttributes } ) => {
    const { mapQuery, mapHeight, mapApiKey, mapZoomLevel } = attributes

    // Component states.
    const [ showingMap, setShowingMap ] = useState( false )
    const [ mapSrc, setMapSrc ] = useState('')
    const [ showNoKeyError, setShowNoKeyError ] = useState( false )


    /**
     * Change the source of the map
     * 
     * @return {void}
     */
    const updateMap = () => {
        if ( ! mapApiKey ) {
            setShowNoKeyError( true )
            setShowingMap( false )
            return
        }

        if ( mapQuery ) {
            const newMapSrc = isNaN( parseInt( mapZoomLevel ) ) 
                    ? `https://google.com/maps/embed/v1/place?key=${ mapApiKey }&q=${ encodeURI( mapQuery ) }` 
                    : `https://google.com/maps/embed/v1/place?key=${ mapApiKey }&q=${ encodeURI( mapQuery ) }&zoom=${ mapZoomLevel }`

            setMapSrc( newMapSrc )
            setShowingMap( true )
        }
    }

    if ( showingMap ) {
        return (
            <div className="gbc-map">
                <iframe 
                    title="map-location"
                    width="100%"
                    height={mapHeight}
                    allowFullScreen=""
                    src={mapSrc} 
                    frameBorder="1"
                />
                <MapInspectorControls
                    attributes={ attributes }
                    setAttributes={ setAttributes }
                    showingMap={ showingMap }
                    stateHandles={ { setMapSrc, setShowNoKeyError, setShowingMap } }
                />
                <MapToolbarControls stateHandles={ { setShowingMap } }/>
            </div>
        )
    }

    return (
        <div className="gbc-map">
            <Placeholder
                key="map-placeholder"
                icon="location-alt"
                className="placeholder"
                label={ __( 'Google Map', 'gbc' ) }
                instructions={ __( 'Enter a location or address to drop a pin on the Google map' ) }
            >
                { showNoKeyError && (
                    <span className="placeholder__error">
                        { ( 'No API Key supplied' ) }
                    </span>
                ) }

                <TextControl
                    key="map-query-input"
                    className="placeholder__input"
                    value={mapQuery}
                    placeholder={ __( 'Search for a place or address', 'gbc' ) }
                    onChange={ ( newMapQuery ) => setAttributes( { mapQuery: newMapQuery } ) }
                />
                <Button
                    key="map-button"
                    className="placeholder__button"
                    disabled={ ! mapQuery }
                    onClick={updateMap}
                    isPrimary
                >
                    { __( 'Apply', 'gbc' ) }
                </Button>
            </Placeholder>

            <MapInspectorControls
                attributes={ attributes }
                setAttributes={ setAttributes }
                showingMap={ showingMap }
                stateHandles={ { setMapSrc, setShowNoKeyError, setShowingMap } }
            />
        </div>
    )
    
}

Map.Content = Save

export default Map