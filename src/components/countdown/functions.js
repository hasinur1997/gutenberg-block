/**
 * Gets remaining time
 * 
 * @param {number} countdownExpirationDate timer expiration date
 *  
 * @returns {numbers} 
 */
export const getRemainingTime = ( countdownExpirationDate ) => {
    return countdownExpirationDate - Math.floor( Date.now() / 1000 )
}

/**
 * Update remaining time state when called
 * 
 * @param {Object} setRemainingTime Function to update remainingTime state
 * 
 * @param {number} countdownExpirationDate timer expiration date
 * 
 * @return {void} 
 */
export const tick = ( setRemainingTime, countdownExpirationDate ) => {
    setRemainingTime( getRemainingTime( countdownExpirationDate ) )
}