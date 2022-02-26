import React, { Component } from "react";
import Winwheel from "winwheeljs/lib/Winwheel";

class Wheel extends Component {
    constructor() {
        super();
        this.state = {
            theWheel: null,
            s1: '',
            s2: '',
            s3: '',
            s4: '',
            s5: '',
            s6: '',
        },
        this.addSegment = this.addSegment.bind(this);
        this.deleteSegment = this.deleteSegment.bind(this);
        this.handleSpinWheel = this.handleSpinWheel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.changeText1 = this.changeText1.bind(this);
        this.changeText2 = this.changeText2.bind(this);
        this.changeText3 = this.changeText3.bind(this);
        this.changeText4 = this.changeText4.bind(this);
        this.changeText5 = this.changeText5.bind(this);
        this.changeText6 = this.changeText6.bind(this);
    }


    componentDidMount() {
        let audio = new Audio("tick.mp3");

        let theWheel = new Winwheel({
            canvasId: "myCanvas",
            lineWidth: 3,
            innerRadius: 35,
            numSegments: 6,
            segments: [
                { fillStyle: "#eae56f", text: "Prize #1" },
                { fillStyle: "#89f26e", text: "Prize #2" },
                { fillStyle: "#4da6ff", text: "Prize #3" },
                { fillStyle: "#8282ee", text: "Prize #4" },
                { fillStyle: "#e7706f", text: "Prize #5" },
                { fillStyle: "#ffa64d", text: "Prize #6" },
            ],
            pins: {
                number      : 18,
                outerRadius : 5,
                margin      : 10,
                fillStyle   : '#ffff00',
                strokeStyle : '#b30000',
                lineWidth : 2,
            },
            animation: {
                type: "spinToStop",
                duration: 10,
                spins: 5,
                callbackSound : function playSound() {
                    // Stop and rewind the sound (stops it if already playing).
                    audio.pause();
                    audio.currentTime = 0;
                    // Play the sound.
                    audio.play();
                },
                soundTrigger  : 'pin',
                callbackFinished : function alertPrize() {
                    let winningSegment = theWheel.getIndicatedSegment();
                    alert(winningSegment.text + " has been chosen!");
                },
            },
        });

        this.setState({
            theWheel: theWheel,
        })
    }

    addSegment() {
        this.state.theWheel.addSegment( {
            'text' : `Prize #${this.state.theWheel.numSegments + 1}`,
            'fillStyle' : `#${Math.floor(Math.random()*16777215).toString(16)}`
        }, 1);

        this.state.theWheel.draw();
    }

    deleteSegment() {
        this.state.theWheel.deleteSegment();
        this.state.theWheel.draw();
        let segmentList = document.getElementById('segmentList');
        segmentList.removeChild(segmentList.lastElementChild);
    }

    handleSpinWheel() {
        this.state.theWheel.startAnimation()
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    changeText1() {
        this.state.theWheel.segments[1].text = this.state.s1
        this.state.theWheel.draw();
    }

    changeText2() {
        this.state.theWheel.segments[2].text = this.state.s2
        this.state.theWheel.draw();
    }

    changeText3() {
        this.state.theWheel.segments[3].text = this.state.s3
        this.state.theWheel.draw();
    }

    changeText4() {
        this.state.theWheel.segments[4].text = this.state.s4
        this.state.theWheel.draw();
    }

    changeText5() {
        this.state.theWheel.segments[5].text = this.state.s5
        this.state.theWheel.draw();
    }

    changeText6() {
        this.state.theWheel.segments[6].text = this.state.s6
        this.state.theWheel.draw();
    }



  

  render() {
    //   let theWheel = this.state.theWheel
    //   let segments = this.state.theWheel.segments || []

    return (
        <div>
            <label>Segments: </label>
            <ol id='segmentList'>
                <li><input name="s1" onChange={this.handleChange} value={this.state.s1} style={{backgroundColor: "#eae56f"}} />
                <button onClick={this.changeText1}>Update</button>
                </li>
                <li><input name="s2" onChange={this.handleChange} value={this.state.s2} style={{backgroundColor: "#89f26e"}} />
                <button onClick={this.changeText2}>Update</button>
                </li>
                <li><input name="s3" onChange={this.handleChange} value={this.state.s3} style={{backgroundColor: "#4da6ff"}} />
                <button onClick={this.changeText3}>Update</button>
                </li>
                <li><input name="s4" onChange={this.handleChange} value={this.state.s4} style={{backgroundColor: "#8282ee"}} />
                <button onClick={this.changeText4}>Update</button>
                </li>
                <li><input name="s5" onChange={this.handleChange} value={this.state.s5} style={{backgroundColor: "#e7706f"}} />
                <button onClick={this.changeText5}>Update</button>
                </li>
                <li><input name="s6" onChange={this.handleChange} value={this.state.s6} style={{backgroundColor: "#ffa64d"}} />
                <button onClick={this.changeText6}>Update</button>
                </li>
                
            </ol>

            <div id="canvasContainer">
                <canvas id="myCanvas" width="500" height="500"></canvas>
                <img id="prizePointer" src="basic_pointer.png" alt="V" />
                <div id="standleg"></div>
                <div id="stand"></div>
            </div>

            {/* <button onClick={this.addSegment}>Add Segment</button> */}
            <button onClick={this.deleteSegment}>Delete Segment</button>
            <button onClick={this.handleSpinWheel}>Spin the Wheel</button>
        </div>
    )
  }
}

export default Wheel;