import { Button, Box, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { TaskFormContext } from "../Context";

export default function TaskForm({handleClick}: {handleClick: () => void}): JSX.Element {
    return (
        <>
            <Box sx={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backdropFilter: "brightness(75%) blur(2px)"
            }}
            />
            <Box sx={{
                position: "fixed",
                top: "25%",
                left: "25%",
                bottom: "25%",
                right: "25%",
                border: 1,
                // = border: "1px solid black"
                bgcolor: "white",
            }}
            >
                <Typography sx={{
                    fontSize: 34,
                    textAlign: "center",
                    mb: 5
                }}
                >
                    Add a task card
                </Typography>
                <TextField
                    label="Name"
                    // same with or without variant="outlined"
                    sx={{
                        position: "relative",
                        left: "25%",
                        width: "50%",
                        marginRight: "50%",
                        marginBottom: "10px"
                    }}
                />
                <TextField
                    label="Description"
                    variant="filled"
                    sx={{
                        position: "relative",
                        left: "25%",
                        width: "50%",
                        marginRight: "50%",
                        marginBottom: "10px"
                    }}
                />
                <TextField
                    label="Due time"
                    variant="standard"
                    sx={{position: "relative",
                         left: "25%",
                         width: "50%",
                         marginRight: "50%",
                         marginBottom: "10px"
                    }}
                />
                <Button onClick={handleClick}
                    sx= {{
                        position: "absolute",
                        left: "25%",
                        top: "85%",
                        width: "50%",
                        border: 1
                    }}
                >
                    Submit
                </Button>
            </Box>
        </>
    );
}
