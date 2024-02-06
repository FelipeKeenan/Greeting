import React from "react";

export const Clock = ({ hour, minutes }) => {
return (
    <div className="text-9xl bold">
    {hour}:{minutes}
    </div>
)
}

