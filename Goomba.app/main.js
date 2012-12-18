//==========================================================\\
//=                SING YOUR HEART OUT                     =\\
//=                      By VGMoose                        =\\
//==========================================================\\

// Important all powerful line \\
Plugins.load( "UIKit" );

// Window Setup \\
var window = new 
UIWindow( UIHardware.fullScreenApplicationContentRect ); 
window.setHidden( false ); 
window.orderFront(); 
window.makeKey();  
window.backgroundColor = ([ 0, 0, 0, 1]); 
var mainView = new UIView();  
mainView.backgroundColor = ([ 0, 0, 0, 1]); 
window.setContentView( mainView );
window.level = 1001       // Makes it better than all your apps

var mario= new UIImageView( new Image("Default.png") );
mario.position = [0, -20]     // This way it overwrites the status bar
mainView.addSubview( mario);

// Recognize Gestures \\

mainView.onMouseUp = function (event) { 
gesturehandlerf(event)
}

mainView.onMouseDown = function (event) { 
gesturehandler(event) 
}

function gesturehandler(event)
{
var mario = new UIImageView( new Image("goomba_open.png") ); 
mario.position = [0, -20]     // This way it overwrites the status bar
mainView.addSubview( mario);
}

function gesturehandlerf(event)
{
var mario = new UIImageView( new Image("Default.png") ); 
mario.position = [0, -20]     // This way it overwrites the status bar
mainView.addSubview( mario);
}