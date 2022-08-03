import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { ClickAwayListener, Paper, Popper, TextField } from '@mui/material';
import moment from 'moment';
import * as React from 'react';
import { DateRange } from 'react-date-range';

export default function BasicDateRangePicker() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [state, setState] = React.useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    return (
        <>
            <TextField
                label='Ngày khởi hành - Kết thúc..'
                value={`${moment(state[0]?.startDate).format('DD-MM-YY')} > ${moment(state[0]?.endDate).format('DD-MM-YY')}`}
                variant="outlined"
                size="small"
                onClick={handleClick}
                sx={{ backgroundColor: "white" }}
                InputProps={{ endAdornment: <CalendarTodayIcon /> }}
                fullWidth
            />
            <Popper
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                placement='bottom-end'
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <Paper>
                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setState([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={state}
                        />
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </>
    );
}
//react-date-range
//date-fns