/**
 * Countdown component
 */

/**
 * Internal dependencies
 */
import { tick, getRemainingTime } from './functions'
import Save from './save'


/**
 * WordPress dependencies
 */

import { useState, useEffect } from '@wordpress/element'
import { __ } from '@wordpress/i18n'
import { DateTimePicker } from '@wordpress/components' 
import { InspectorControls, RichText } from '@wordpress/block-editor'


const Countdown = ( { attributes, setAttributes } ) => {
    const [ remainingTime, setRemainingTime ] = useState( 
        getRemainingTime( attributes.countdownExpirationDate ) 
    )

    useEffect( () => {
        const tickInterval = setInterval(
            tick,
            1000,
            setRemainingTime,
            attributes.countdownExpirationDate
        )

        if ( 0 >= remainingTime ) {
            clearInterval( tickInterval )
        }

        // Use effect cleanup
        return () => {
            clearTimeout( remainingTime )
        }
    } )

    const seconds = remainingTime % 60
    const minutes = ( ( remainingTime - seconds ) % 3600 ) / 60
    const hours   = ( ( remainingTime - minutes * 60 - seconds ) % 86400 ) / 3600
    const days =
                ( ( remainingTime - hours * 3600 - minutes * 60 - seconds ) % 604800 ) /
                86400;
    const weeks =
        ( remainingTime -
            days * 86400 -
            hours * 3600 -
            minutes * 60 -
            seconds ) / 604800;


    return (
        <div className="gbc-countdown">
            <InspectorControls>
                <DateTimePicker
                    className="gbc-countdown__datetimepicker"
                    currentDate={ attributes.countdownExpirationDate * 1000 }
                    onChange={ ( newDate ) => {
                        setAttributes( { countdownExpirationDate: Math.floor( Date.parse( ) / 1000 ) } )
                    } }
                />
            </InspectorControls>

            <div className="gbc-countdown__heading">
                <span>{ __( 'Weeks', 'gbc' ) }</span>
                <span>{ __( 'Days', 'gbc' ) }</span>
                <span>{ __( 'Hours', 'gbc' ) }</span>
                <span>{ __( 'Minutes', 'gbc' ) }</span>
                <span>{ __( 'Seconds', 'gbc' ) }</span>
            </div>
            <div className="gbc-countdown__timer">
                <span>{ weeks }</span>
                <span>{ days }</span>
                <span>{ hours }</span>
                <span>{ minutes }</span>
                <span>{ seconds }</span>
            </div>
            <RichText
                tagName={ attributes.countdownExpirationMessageTag || 'h2' }
                placeholder={ __( 'Enter countdown expiry message', 'gbc' ) }
                className="gbc-countdown__message-input"
                value={ attributes.countdownExpirationMessageTag }
                onChange={ ( newMessage ) => { 
                    setAttributes( { countdownExpirationMessageTag: newMessage } )
                } }
            />
        </div>
    )
}

Countdown.Content = Save

export default Countdown
