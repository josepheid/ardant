import { Box } from "@chakra-ui/react";

export const TransparentOverlay = ({
    backgroundColor = "rgba(0, 0, 0, 0.8)", // Default semi-transparent black
    zIndex = 1,
}) => {
    return (
        <Box
            position="absolute" // Change from fixed to absolute
            top="0"
            left="0"
            right="0"
            bottom="0"
            height="100%"
            width="100%"
            backgroundColor={backgroundColor}
            zIndex={zIndex}
            pointerEvents="none" // Allows clicks to pass through
        />
    );
};
