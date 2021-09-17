import React from 'react'

export default function Notify(props) {
    return (
        <>
        <div class={`alert alert-warning alert-dismissible fade show msg ${props.displayStyle}`} role="alert">
            <strong>{props.type}</strong>: {props.alertTxt}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        </>
    )
}
