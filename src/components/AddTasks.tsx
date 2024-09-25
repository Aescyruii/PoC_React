import Button from "@mui/material/Button";
import React from "react";

export default function AddTasks({ handleClick }: {handleClick: () => void}): JSX.Element {
    return (
        <Button
        onClick={handleClick}
        variant="contained"
        sx={{ borderRadius: 28, minWidth: 0, borderWidth: 0, position: "fixed", top: "93%", left: "93%"}}
            >
            +
        </Button>
    );
}
