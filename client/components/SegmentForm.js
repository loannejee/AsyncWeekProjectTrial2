import React from 'react';


class SegmentForm extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            text: '',
            fillStyle: '#f8e9d5',
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
        console.log(event.target.value)
    }

    render() {

        return (
            <form>
                <input name="text" onChange={this.handleChange} value={this.state.text}/>



                {/* <label>Color: </label>
                <input type="color" name="fillStyle" onChange={this.handleChange} value={this.state.fillStyle} /> */}
            
            </form>
        )
    }
}

export default SegmentForm 



