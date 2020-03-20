import { Gamepads, Buttons, Axes } from 'input-gamepads.js';


const gamepads = new Gamepads();
 

function gamePadInit(){

    setInterval(function () {

        console.log("interval");

            // get inputs
            var button_is_currently_up = gamepads.isUp(Buttons.A);
            var button_is_currently_down = gamepads.isDown(Buttons.X);
            var button_is_currently_up_but_wasnt_last_frame = gamepads.isJustUp(Buttons.B);
            var button_is_currently_down_but_wasnt_last_frame = gamepads.isJustDown(Buttons.Y);
            var axis_value = gamepads.getAxis(Axes.LSTICK_H);
            var axis_crossed_threshold_like_button = gamepads.axisPast(Axes.LSTICK_H, 0.5, 1);
            var the_first_four_axis_values_as_a_4d_vector = gamepads.getAxes(0,4);
            var dpad_as_a_2d_vector = gamepads.getDpad();
            
            // do your code
            
            console.log("button_is_currently_up: ",button_is_currently_up);
            console.log("button_is_currently_down: ",button_is_currently_down);
            console.log("axis_value: ",axis_value);
            console.log("the_first_four_axis_values_as_a_4d_vector: ",the_first_four_axis_values_as_a_4d_vector);

            // update gamepads (clears arrays, polls connections, etc.)
            gamepads.update();
    }, 2000);

}

export default gamePadInit;