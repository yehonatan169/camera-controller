import React from "react";

export default function Header() {
    const firstName = sessionStorage.getItem("userFirstName");

    return (
        <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '1rem',
        backgroundColor: '#161b22',
        color: '#58a6ff',
        fontWeight: 'bold',
        fontSize: '1rem'
        }}>
        {firstName ? `👤 ${firstName}` : ""}
        </div>
    );
}
