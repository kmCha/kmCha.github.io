var audioContext = null;
var meter = null;
var WIDTH = 800;
var HEIGHT = 640;
var support = false;

var game;
var time = 0; // 游戏时长
var timeSinceLastGame = 0;  // 上次游戏结束时的时间，用于重新开始游戏时重置时间

var MAX_SPEED = 150;    // 前进最大速度
var JUMP_SPEED = 500;   // 跳跃速度
