import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

import './CustomRating.css';

const labels = {
    1: 'Average',
    2: 'Above Average',
    3: 'Good',
    4: 'Very good',
    5: 'Amazing',
};

function CustomRating({
    value,
    updateRatingValue,
}) {
    
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',  
            }}
        >
            <Rating
                id="rating"
                name="hover-feedback"
                value={value}
                onChange={(event, newValue) => {
                    // setValue(newValue);
                    updateRatingValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}

export default CustomRating;