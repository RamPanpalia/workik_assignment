import React from 'react'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import '../../css/input.css'
import { Close } from '@mui/icons-material';

const Input = (props) => {
    console.log(props)
    return (
        <div className='currency-box'>
            {props.showClose &&
                <Close className='close-icon'
                    onClick={() => {
                        let newTo = [...props.to]
                        newTo.splice(props.index, 1)
                        props.setData({ ...props.data, to: newTo })
                    }}
                />}
            <FormControl
                size='small'
                fullWidth
            >
                <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.value}
                    label="Age"
                    onChange={props.onChange}
                    size='small'
                >
                    {props.currencies.map((currency, index) => {
                        return (
                            <MenuItem value={currency.symbol} key={index}>{currency.name}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            {props.disabled &&
                <span>
                    {props.rates ? props.rates[props.value] * props.factor : '1'}
                </span>
            }
            {!props.disabled &&
                <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="filled"
                    fullWidth
                    size='small'
                    value={props.factor}
                    type='number'
                    onChange={(e) => { props.setFactor(e.target.value) }}
                />
            }
        </div>
    )
}

export default Input