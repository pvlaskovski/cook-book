import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function SelectDropdown({
    label,
    handleChange,
    dropdownItems,
    
}) {
    return (

        <FormControl className="select" >
            <InputLabel id="type">{label}</InputLabel>
            <Select
                label={label}
                // value={type}
                onChange={handleChange}
               
            >
                {
                    dropdownItems.map((item) => (
                        <MenuItem key={item}>{item}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
};

