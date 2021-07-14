/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor'

/**
 * External dependencies
 */
import { isArray } from 'lodash'

/**
 * Save Component
 * 
 * @param {Object} props Props
 * 
 * @return {*} 
 */
const Save = ( { attributes } ) => {
    const { accordion, accordionTitleTag } = attributes

    if ( ! isArray( accordion ) ) {
        return null
    }

    const rows = accordion.map( ( accordionItem, key ) => {
        return ( 
            <div 
                className="gbc-accordion__row"
                key={ `gbc-accordion-row-${key}` }
            >
                <div className="gbc-accordion__header">
                    <RichText.Content
                        tagName={ accordionTitleTag || 'h3' }
                        value={ accordionItem.title }
                        className="gbc-accordion__row-title"                    
                    />
                </div>

                <div className="gbc-accordion__content">
                    <RichText.Content
                        tagName={ 'undefined' !== typeof wp ? 'p' : 'div' }
                        value={ accordionItem.description }
                        className="gbc-accordion__row-content"                    
                    />
                </div>
            </div>
        )
    } )

    return <div className="gbc-accordion gbc-active">{rows}</div>
}

export default Save
