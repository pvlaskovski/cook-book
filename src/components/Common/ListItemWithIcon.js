import { ListItem, ListItemIcon,ListItemText } from "@mui/material"
export default function ListItemWithIcon({
    icon,
    primaryText,
    secondaryText
}) {

    console.log("Render");
    return (
        <ListItem className="userDetailItem">
            <ListItemIcon>
                {/* <FolderIcon /> */}
                {icon}
            </ListItemIcon>

            <ListItemText
                primary={primaryText}
                secondary={secondaryText}
            />
        </ListItem>

    )
}