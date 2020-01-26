<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RockPaperScissorController extends Controller
{
    public function index() {
        return view('app');
    }

    public function process(Request $request)
    {
        $your_choice     = $request->input('choice', '');

        $options = [ 
            'rock'    => ['scissor', 'rock', 'paper'],
            'paper'   => ['rock', 'paper', 'scissor'],
            'scissor' => ['paper', 'scissor', 'rock'],
        ];

        $results         = ['You Win', 'Draw', 'You Lost'];        
        $computer_choice = $options['rock'][array_rand($options['rock'])];
        
        if (!array_key_exists($your_choice, $options)) {
            return response()->json([
                'success' => FALSE,
                'message' => 'Invalid choice.',
            ], 200);
        }
        
        /**
         * Arrange in proper order; make sure player's choice is in the middle
         */
        $order = $options[$your_choice];

        /**
         * Get computer key
         */
        $computer_key = array_search($computer_choice, $order);

        return response()->json([
            'success'         => TRUE,
            'your_choice'     => $your_choice,
            'computer_choice' => $computer_choice,
            'result'          => $results[$computer_key],
            'time'            => date('Y-m-d h:i:s A'),
        ], 200);
    }
}
