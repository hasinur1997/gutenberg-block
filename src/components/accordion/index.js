/**
 * Accordion component
 */

/**
 * External dependencies
 */

import { isArray, extend } from 'lodash'

/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element'

/**
 * Internal dependencies
 */
import AccordionRow from './accordion-row'

import Save from './save'

import {
    Dashicon,
    Button,
    SelectControl,
    Panel,
    PanelBody
} from '@wordpress/components'

import { InspectorControls } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n'


/**
 * Accordion
 * 
 * @param {Object} props Component props
 * 
 * @return {*} 
 */
const Accordion = ( { attributes, setAttributes } ) => {
    const { accordion, accordionTitleTag } = attributes

    const row = {
        title: '',
        content: ''
    }

    /**
     * Add row.
     * 
     * @return {void}
     */
    const addRow = () => {
        if ( ! isArray( accordion ) ) {
            return
        }

        const updateAccordion = extend( [], accordion )

        updateAccordion.push( row )

        setAttributes( { accordion: updateAccordion } )
    }

    useEffect( () => {
        if ( ! accordion.length ) {
            addRow()
        }
    }, [] )

    return (
        <div className="gbc-accordion">
            { isArray( accordion ) &&
                accordion.map( ( accordionItem, index ) => {
                    return (
                        <AccordionRow
                            attributes={ attributes }
                            setAttributes={ setAttributes }
                            accordionItem={ accordionItem }
                            index={ index }
                            key={ index }
                        />
                    )
                } )
            }

            <Button onClick={addRow}>
                <Dashicon icon="insert" className="gbc-accordion__insert"></Dashicon>
            </Button>

            { accordionTitleTag &&
                <InspectorControls>
                    <Panel>
                        <PanelBody
                            title={ __( 'Title Tag', 'gbc' ) }
                        >
                            <SelectControl
                                label={ __( 'Title Tag', 'gbc' ) }
                                value={ accordionTitleTag }
                                options={ [
                                    { value: 'p', label: __( 'Paragraph', 'gbc' ) },
                                    { value: 'h1', label: 'h1' },
                                    { value: 'h2', label: 'h2' },
                                    { value: 'h3', label: 'h3' },
                                    { value: 'h4', label: 'h4' },
                                    { value: 'h5', label: 'h5' },
                                    { value: 'h6', label: 'h6' },
                                ] }
                                onChange={ ( value ) => {
                                    setAttributes( { accordionTitleTag: value } )
                                } }
                            />
                        </PanelBody>
                    </Panel>
                </InspectorControls>
            }
        </div>
    )
}

Accordion.Row = AccordionRow
Accordion.Content = Save
 
export default Accordion
