import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

export default function SelectDropdown({
    label,
    handleTypeChange,
    dropdownItems,
}) {
    return (

        <FormControl className="select" >
            <InputLabel id="type">{label}</InputLabel>
            <Select
                label={label}
                value={label}
                onChange={handleTypeChange}
            >
                {
                    dropdownItems.map((item) => (
                        <MenuItem value="Soups" key={item}>{item}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
};

