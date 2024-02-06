import React from "react";

export const Greeting = ({ hour }) => {
    let greeting = ''

    if (hour >= 6 && hour < 12) {
        greeting = 'Bom dia! 😁';
    } else if (hour >= 12 && hour < 20) {
        greeting = 'Boa tarde! 🤠';
    } else if (hour >= 20) {
        greeting = 'Boa noite! 😴';
    }
    return (
        <div className="text-5xl">{greeting}</div>
    )
}