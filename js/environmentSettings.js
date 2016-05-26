var width = window.innerWidth - 100;
var height = window.innerHeight - 100;

var v0        = 1.5;         //verage desired speed [m/s]
var tauAlpha  = 0.5;         // Relaxation time [s]
var V12       = 10;         //Repulsive potential amplitude [m^2 s^-2]
var sigma     = 0.3;         //Potential damping parameter [m]
var amplitude = V12 / sigma; // Pedestrian-pedestrian repulsive force amplitude [m^-1 s^-2]

var pedestrianStopAcceptance = 0.1;    //Acceptance to stop at a destination point
