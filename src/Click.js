import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

function Click({start}) {
    const [number, setNumber] = useState(start)

    useEffect(function() {
        const a = Number(localStorage.getItem('curnum'))
        if (a) setNumber(a)
    }, [])

    useEffect(function() {
        localStorage.setItem('curnum', number)
    }, [number])

    function handler() {
        setNumber(number+1)
    }

    return (
        <>
            <p>{number} clicks</p>
            <Button onclick={handler} text={"Click Me"}/>
        </>
    )
}

Click.defaultProps = {
    start: 0
}

Click.propStyle = {
    start: PropTypes.number.isRequired
}

export default Click