import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, Rating, Box } from "@mui/material"
import CustomRating from "../CustomRating/CustomRating"

export default function Comment({comment}) {

    return (
        <ListItem key={""} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="avatar" src={""} />
            </ListItemAvatar>

            <ListItemText
                primary={
                    <Typography >
                        {comment.authorName 
                        ? comment.authorName
                        : "Anonymous Author"
                        }
                        
                    </Typography>
                }
                secondary={
                    <>
                        <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                        >
                            {comment.comment}
                        </Typography>
                        <Box>
                            <Rating name="read-only" value={comment.rating} readOnly />
                        </Box>
                        <Divider />
                    </>
                }
            />

            
        </ListItem>
    )

}