import { Button, Box, TextField, Typography } from "@mui/material";

export default function TaskForm(): JSX.Element {
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
                    sx={{position: "relative",
                         left: "25%",
                         width: "50%",
                         marginRight: "50%",
                         marginBottom: "10px"
                    }}
                />
                <Button sx={{position: "absolute", left: "25%", top: "85%", width: "50%", border: 1}}>
                    Submit
                </Button>
            </Box>
        </>
    );
}
