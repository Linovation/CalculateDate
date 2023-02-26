import React, { useState } from 'react';
import { Container, Typography, TextField, Checkbox, FormControlLabel, Button, Grid } from '@material-ui/core';
import { DateRange as DateRangeIcon } from '@material-ui/icons';
import { differenceInDays, parseISO } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";

function CountdownTimer() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState(new Date().toISOString().substr(0, 10));
    const [includeFirstDay, setIncludeFirstDay] = useState(false);
    const [result, setResult] = useState('');
    const [days, setDays] = useState('');

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setIncludeFirstDay(event.target.checked);
    };

    const handleCalculateButtonClick = () => {
        const start = parseISO(startDate);
        const end = parseISO(endDate);
        const days = differenceInDays(end, start) + (includeFirstDay ? 1 : 0);
        const weeks = Math.floor(days / 7);
        const remainingDays = days % 7;
        setDays(`${days} days`)
        setResult(`${weeks} week${weeks === 1 ? '' : 's'} and ${remainingDays} day${remainingDays === 1 ? '' : 's'}`);

    };

    return (
        <Container maxWidth="sm" spacing={2}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Start Date"
                        type="date"
                        value={startDate}
                        onChange={handleStartDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="End Date"
                        type="date"
                        value={endDate}
                        onChange={handleEndDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        margin="normal"
                    />
                </Grid>
            </Grid>
            <FormControlLabel
                control={<Checkbox checked={includeFirstDay} onChange={handleCheckboxChange} />}
                label="Include first day"
            />
            <Button
                variant="contained"
                color="primary"
                startIcon={<DateRangeIcon />}
                onClick={handleCalculateButtonClick}
                disabled={!startDate || !endDate}
                fullWidth
                size="large"
                style={{ marginTop: 16 }}
            >
                Calculate the number of days
            </Button>
            {result && (
                <Typography variant="h5" component="h2" align="center" style={{ marginTop: 16 }}>
                    {result}
                </Typography>
            )}
            {days && (
                <Typography variant="h5" component="h2" align="center" style={{ marginTop: 16 }}>
                    {days}
                </Typography>
            )}
        </Container>
    );
}

export default CountdownTimer;
