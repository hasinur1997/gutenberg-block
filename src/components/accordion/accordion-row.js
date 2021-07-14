/**
 * Accordion row component
 */

/**
 * External dependencies
 */

import { extend } from 'lodash'

/**
 * WordPress dependencies
 */

import { RichText } from '@wordpress/block-editor'

import { __ } from '@wordpress/i18n'

/**
 * Accordion row component
 * 
 * @param {Object} props Component props
 * 
 * @return {Object} 
 */
const AccordionRow = ( { attributes, setAttributes, accordionItem, index } ) => {

    const { accordion, accordionTitleTag } = attributes

    /**
     * Update row values
     * 
     * @param {*} key
     *  
     * @param {*} value
     * 
     * @return {void} 
     */
    const updateRow = ( key, value ) => {
        const updateAccordion = extend( [], accordion )

        updateAccordion[index][key] = value

        setAttributes( { accordion: updateAccordion } )
    }

    return (
        <div className="gbc-accordion__row">
            <div className="gbc-accordion__header">
                <RichText
                    tagName={ accordionTitleTag || 'h3' }
                    value={ accordionItem.title }
                    onChange={ ( value ) => updateRow( 'title', value ) }
                    placeholder={ __( 'Enter title...', 'gbc' ) }
                    className="gbc-accordion__row-title"
                />
            </div>
            <div className="gbc-accordion__content">
                <RichText
                    tagName={ 'p' }
                    value={ accordionItem.description }
                    onChange={ ( value ) => updateRow( 'description', value ) }
                    placeholder={ __( 'Enter content...', 'gbc' ) }
                    className="gbc-accordion__row-content"
                />
            </div>
        </div>
    )
}

export default AccordionRow
