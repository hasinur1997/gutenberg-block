/**
 * Save component
 * 
 * @param {Object} props
 *  
 * @returns {*} 
 */

const Save = ( { attributes } ) => {
    const { mapQuery, mapApiKey, mapHeight } = attributes
    const mapZoomLevel = 15
    if ( ! mapQuery || ! mapApiKey ) {
        return null
    }

    const mapSrc = isNaN( parseInt( mapZoomLevel ) ) 
                    ? `https://google.com/maps/embed/v1/place?key=${ mapApiKey }&q=${ encodeURI( mapQuery ) }` 
                    : `https://google.com/maps/embed/v1/place?key=${ mapApiKey }&q=${ encodeURI( mapQuery ) }&zoom=${ mapZoomLevel }`

    
    return (
        <div className="gbc-map gbc-active">
            <iframe 
                title="map-location"
                width="100%"
                height={mapHeight}
                allowFullScreen=""
                src={mapSrc} 
                frameBorder="1"
            />
        </div>
    )
}

export default Save