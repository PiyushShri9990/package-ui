import * as React from 'react';
import { ReactNode } from 'react';

type PropsType = {
    children: ReactNode;
    onClick ? : () => void;
}

const Button = ({ children, onClick }: PropsType) => {
    return (
        <button
            onClick={onClick}
            style={{
            padding: "5px, 30px",
            fontSize: "1.2em",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "blueviolet",
            color: "black",
            border: "none"
        }}> {children}</button >
    )
}

export { Button };