
import React, { Component } from 'react';
const SnackBar = (e) => {
    alert(e)
    return (
        <div class="w3-panel w3-yellow">
            <h3>Warning!</h3>
            <p>Yellow often indicates a warning that might need attention.</p>
        </div>)
}

export default SnackBar;
