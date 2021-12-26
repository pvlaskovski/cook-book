import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Rating, Box, ListItemIcon, Container } from "@mui/material"

import './Comment.css'

export default function Comment({ comment }) {

    return (
        <ListItem alignItems="flex-start" className="commentContainer">
            <ListItemAvatar>
                <Avatar alt="avatar" src={""} />
            </ListItemAvatar>

            <ListItemText
                primary={
                    <Typography
                        component="span"
                        variant="body1"
                        color="textPrimary"
                        className="itemText"
                    >
                        {comment.authorName
                            ? comment.authorName
                            : "Anonymous Author"
                        }
                    </Typography>
                }
                secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                            className="itemText, secondatyText"
                        >
                            {comment.comment}
                        </Typography>
                }
            />

            <Container>
                <Rating name="read-only" value={comment.rating} className="rating" readOnly />
                <Divider />
            </Container>


            {/* <Box>
                <Rating name="read-only" value={comment.rating} readOnly />
            </Box>

            <Divider /> */}

        </ListItem>
    )

}