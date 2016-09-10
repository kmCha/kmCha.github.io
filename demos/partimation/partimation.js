(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      // AMD
      define([''], factory)
  } else if (typeof exports === 'object') {
      // Node, CommonJS之类的
      module.exports = factory()
  } else {
      // 浏览器全局变量(root 即 window)
      root.Partimate = factory()
  }
})(this, function () {
  var initialized = false
  var textConfigured = false
  var imageConfigured = false
  var imageConfiguredDone = false
  var animationConfigured = false
  var animationTypes = {}
  var _Partimate = function (selector) {
    this.canvas = document.querySelector(selector)
    if (!this.canvas) throw new Error('no canvas element on the selector')
    this.canvasWidth = this.canvas.width
    this.canvasHeight = this.canvas.height
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
    }
    initialized = true
  }
  // 清空canvas
  _Partimate.prototype.clearCtx = function (option) {
    if (!initialized) throw new Error('please initialize before configuration')
    if (!option) option = {}
    var x = option.x || 0,
        y = option.y || 0,
        width = option.width || this.canvasWidth,
        height = option.height || this.canvasHeight
    this.ctx.clearRect(x, y, width, height)
  }
  // 文本配置
  _Partimate.prototype.textConfig = function (option) {
    if (!initialized) throw new Error('please initialize before configuration')
    if (!option) option = {}
    if (!option.text) throw new Error('text can not be empty')
    var _option = {
      text: option.text,
      font: option.font || '50px sans-serif',
      fontColor: option.fontColor || '#000',
      textX: option.textX || 20,
      textY: option.textY || 100
    }
    var textWidth = this.ctx.measureText(_option.text).width

    if (typeof option.textX === 'function') {
      _option.textX = option.textX(textWidth)
    }
    this.textOpt = _option
    textConfigured = true
  }
  // 图片配置
  _Partimate.prototype.imageConfig = function (option) {
    if (!initialized) throw new Error('please initialize before configuration')
    if (!option) option = {}
    if (!option.imgUrl) throw new Error('imgUrl can not be empty')
    var image = new Image()
    var _self = this
    image.onload = function () {
      var middle
      var _option = {
        image: image,
        sx: option.sx || 0,
        sy: option.sy || 0,
        sWidth: option.sWidth || image.width,
        sHeight: option.sHeight || image.height,
        dx: option.dx || (_self.canvasWidth > image.width ? _self.canvasWidth/2 - image.width/2 : 0),
        dy: option.dy || (_self.canvasHeight > image.height ? _self.canvasHeight/2 - image.height/2 : 0),
        dWidth: option.sWidth || image.width,
        dHeight: option.sHeight || image.height,
        contain: option.contain || false, // 是否平铺
        cover: option.cover || false // 是否包含全图片
      }
      if (_option.contain) {
        _option.dWidth = _self.canvasWidth,
        _option.dHeight = _self.canvasHeight
      }
      if (_option.cover) {
        if (image.width/image.height > _self.canvasWidth/_self.canvasHeight) {
          middle = _option.dWidth
          _option.dWidth = _self.canvasWidth
          _option.dHeight = _self.canvasWidth * _option.dHeight / middle
        } else {
          middle = _option.dHeight
          _option.dHeight = _self.canvasHeight
          _option.dWidth = _self.canvasHeight * _option.dWidth / middle
        }
        _option.dx = _self.canvasWidth > _option.dWidth ? _self.canvasWidth/2 - _option.dWidth/2 : 0
        _option.dy = _self.canvasHeight > _option.dHeight ? _self.canvasHeight/2 - _option.dHeight/2 : 0
      }
      _self.imageOpt = _option
      imageConfiguredDone = true
    }
    image.src = option.imgUrl
    imageConfigured = true
  }
  // 动画配置
  _Partimate.prototype.animationConfig = function (option) {
    if (!initialized) throw new Error('please initialize before configuration')
    if (!option) option = {}
    var _option = {
      dataXOffset: option.dataXOffset || 0, // 获取画布data的x偏移值
      dataYOffset: option.dataYOffset || 0, // 获取画布data的y偏移值
      dataWidth: option.dataWidth || this.canvasWidth, // 获取画布data的宽度
      dataHeight: option.dataHeight || this.canvasHeight, // 获取画布data的高度
      cols: option.cols || option.dataWidth /  || this.canvasWidth,  // 采样列数
      rows: option.rows || option.dataHeight || this.canvasHeight,  // 采样行数
      initialX: option.initialX || this.canvasWidth / 2 + Math.round((Math.random() - 0.5) * 10), // 动画起始x坐标
      initialY: option.initialY || Math.floor(this.canvasHeight / 2) + Math.round((Math.random() - 0.5) * 10), // 动画起始y坐标
      totalFrame: option.totalFrame || 500, // 动画总帧数
      blur: option.blur || 0, // 图像最终虚化值
      animationType: option.animationType || 'easeOutCirc', // 动画曲线类型
      delay: option.delay || 0, // particle动画执行延时，输入参数为该粒子在particles数组里的index
      filter: function () { // 过滤粒子的rgba条件
        return true
      }
    }
    if (typeof _option.delay === 'number' || (typeof _option.delay === 'string' && typeof Number(_option.delay) === 'number')) {  // delay输入为数字，转化为function
      var oDelay = _option.delay
      _option.delay = function() {
        return oDelay
      }
    }
    if (typeof _option.blur === 'number' || (typeof _option.blur === 'string' && typeof Number(_option.blur) === 'number')) {  // blur输入为数字，转化为function
      var oBlur = Number(_option.blur)
      _option.blur = function() {
        return oBlur
      }
    }
    if (typeof option.filter === 'function') {
      _option.filter = option.filter
    }
    this.animationOpt = _option
    animationConfigured = true
  }
  // 绘制静态图
  _Partimate.prototype.draw = function () {
    if (!textConfigured && !imageConfigured) {
      throw new Error('please config text or image before drawing')
    }
    var _self = this
    return new Promise(function promise(resolve, reject) {
      if (imageConfigured) {
        if (!imageConfiguredDone) {
          setTimeout(function () {  // 图片load是异步的，如果图片在load中，则循环检查是否load完毕
            promise(resolve, reject)
          }, 100)
          return
        }
        // 绘制图片
        var imageOpt = _self.imageOpt
        _self.ctx.drawImage(imageOpt.image, imageOpt.sx, imageOpt.sy, imageOpt.sWidth, imageOpt.sHeight, imageOpt.dx, imageOpt.dy, imageOpt.dWidth, imageOpt.dHeight)
      }
      if (textConfigured) {
        // 绘制文本
        _self.ctx.font = _self.textOpt.font
        _self.ctx.fillStyle = _self.textOpt.fontColor
        _self.ctx.fillText(_self.textOpt.text, _self.textOpt.textX, _self.textOpt.textY)
      }
      resolve()
    })
  }
  // 开始粒子动画
  _Partimate.prototype.animate = function () {
    if (!animationConfigured) throw new Error('please config animation using animationConfig() before invoking animate()')
    var _self = this
    var opt = _self.animationOpt
    var frameId, currFrame = 0, numsOfFinished = 0
    var particles = []
    return new Promise(function(resolve, reject) {
      calculate().then(function () {
        return draw()
      }).then(function () {
        resolve() // draw完成之后再resolve animate Promise
      })
    })

    // 提取像素出来到particles数组
    function calculate () {
      return _self.draw().then(function () {
        var imageData = _self.ctx.getImageData(opt.dataXOffset, opt.dataYOffset, opt.dataWidth, opt.dataHeight)
        _self.clearCtx()
        var s_width = Math.round(opt.dataWidth / opt.cols) // 每列宽度
        var s_height = Math.round(opt.dataHeight / opt.rows) // 每行高度
        var pos = 0 // 初始位置
        var r, g, b, a
        var data = imageData.data // 选取指定图片位置的rgba数组
        for (var j = 1; j <= opt.rows; j++) {
          for (var i = 1; i <= opt.cols; i++) {
            pos = ((j * s_height - 1) * opt.dataWidth + (i * s_width - 1)) * 4
            r = data[pos]  // 该particle的r分量
            g = data[pos + 1] // g分量
            b = data[pos + 2] // b分量
            a = data[pos + 3] // a分量
            if (opt.filter(r,g,b,a)) {  // 根据限制rgba分量来选取满足条件的particles
              var particle = {
                dx: opt.dataXOffset + i * s_width + Math.round((Math.random() - 0.5) * opt.blur(r, g, b, a)),  // 目标点x坐标
                dy: opt.dataYOffset + j * s_height + Math.round((Math.random() - 0.5) * opt.blur(r, g, b, a)),  // 目标点y坐标
                ix: opt.initialX, // 起始x坐标
                iy: opt.initialY, // 起始y坐标
                cx: opt.initialX,   // 当前x坐标
                cy: opt.initialY,  // 当前y坐标
                finish: false,  // 动画是否结束
                delay: opt.delay(particles.length), // 执行动画延迟，0~总动画长度
                fillStyle: 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')' // particle颜色
              }
              particles.push(particle)
            }
          }
        }
      })
    }
    // 执行粒子动画
    function draw () {
      return new Promise(function(resolve, reject) {
        drawRecursively()
        function drawRecursively () {
          _self.clearCtx()
          var len = particles.length
          var curr_particle = null
          for (var i = 0; i < len; i++) {
            curr_particle = particles[i]
            // finish的particle原地不动
            if (curr_particle.finish) {
              curr_particle.cx = curr_particle.cx
              curr_particle.cy = curr_particle.cy
            } else {
              // 没有finish的particle的坐标变换
              curr_particle.cx = animationTypes[opt.animationType](currFrame - curr_particle.delay <= 0 ? 0 : currFrame - curr_particle.delay, curr_particle.ix, curr_particle.dx - curr_particle.ix, opt.totalFrame)
              curr_particle.cy = animationTypes[opt.animationType](currFrame - curr_particle.delay <= 0 ? 0 : currFrame - curr_particle.delay, curr_particle.iy, curr_particle.dy - curr_particle.iy, opt.totalFrame)
              // finish条件
              if (curr_particle.dx === curr_particle.cx && curr_particle.dy === curr_particle.cy) {
                curr_particle.finish = true
                numsOfFinished++
              }
            }
            // 在画布上画particle
            _self.ctx.fillStyle = curr_particle.fillStyle
            _self.ctx.fillRect(curr_particle.cx, curr_particle.cy, 1, 1)
            // 所有particle都finish的时候结束动画
            if (numsOfFinished === len && i === len - 1) {
              cancelAnimationFrame(frameId)
              return resolve()
            }
          }
          // 目前已执行帧数+1
          currFrame++
          frameId = requestAnimationFrame(drawRecursively)
        }
      })
    }
  }
  // 清除text config
  _Partimate.prototype.clearText = function () {
    textConfigured = false
  }
  // image config
  _Partimate.prototype.clearImage = function () {
    imageConfigured = false
    imageConfiguredDone = false
  }
  // 动画种类
  animationTypes = {
    /**
      t: 目前已执行帧数
      b: 初始位置
      c: 目标位置到初始位置的位移
      d: 动画总帧数
    */
  	easeInQuad: function (t, b, c, d) {
  		return c*(t/=d)*t + b;
  	},
  	easeOutQuad: function (t, b, c, d) {
  		return -c *(t/=d)*(t-2) + b;
  	},
  	easeInOutQuad: function (t, b, c, d) {
  		if ((t/=d/2) < 1) return c/2*t*t + b;
  		return -c/2 * ((--t)*(t-2) - 1) + b;
  	},
  	easeInCubic: function (t, b, c, d) {
  		return c*(t/=d)*t*t + b;
  	},
  	easeOutCubic: function (t, b, c, d) {
  		return c*((t=t/d-1)*t*t + 1) + b;
  	},
  	easeInOutCubic: function (t, b, c, d) {
  		if ((t/=d/2) < 1) return c/2*t*t*t + b;
  		return c/2*((t-=2)*t*t + 2) + b;
  	},
  	easeInQuart: function (t, b, c, d) {
  		return c*(t/=d)*t*t*t + b;
  	},
  	easeOutQuart: function (t, b, c, d) {
  		return -c * ((t=t/d-1)*t*t*t - 1) + b;
  	},
  	easeInOutQuart: function (t, b, c, d) {
  		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
  		return -c/2 * ((t-=2)*t*t*t - 2) + b;
  	},
  	easeInQuint: function (t, b, c, d) {
  		return c*(t/=d)*t*t*t*t + b;
  	},
  	easeOutQuint: function (t, b, c, d) {
  		return c*((t=t/d-1)*t*t*t*t + 1) + b;
  	},
  	easeInOutQuint: function (t, b, c, d) {
  		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
  		return c/2*((t-=2)*t*t*t*t + 2) + b;
  	},
    easeInSine: function (t, b, c, d) {
  		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  	},
  	easeOutSine: function (t, b, c, d) {
  		return c * Math.sin(t/d * (Math.PI/2)) + b;
  	},
  	easeInOutSine: function (t, b, c, d) {
  		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  	},
  	easeInExpo: function (t, b, c, d) {
  		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  	},
  	easeOutExpo: function (t, b, c, d) {
  		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  	},
  	easeInOutExpo: function (t, b, c, d) {
  		if (t==0) return b;
  		if (t==d) return b+c;
  		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
  		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  	},
    easeInCirc: function (t, b, c, d) {
  		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  	},
  	easeOutCirc: function (t, b, c, d) {
  		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  	},
  	easeInOutCirc: function (t, b, c, d) {
  		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  	},
  	easeInElastic: function (t, b, c, d) {
  		var s=1.70158;var p=0;var a=c;
  		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  		if (a < Math.abs(c)) { a=c; var s=p/4; }
  		else var s = p/(2*Math.PI) * Math.asin (c/a);
  		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  	},
  	easeOutElastic: function (t, b, c, d) {
  		var s=1.70158;var p=0;var a=c;
  		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
  		if (a < Math.abs(c)) { a=c; var s=p/4; }
  		else var s = p/(2*Math.PI) * Math.asin (c/a);
  		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  	},
  	easeInOutElastic: function (t, b, c, d) {
  		var s=1.70158;var p=0;var a=c;
  		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
  		if (a < Math.abs(c)) { a=c; var s=p/4; }
  		else var s = p/(2*Math.PI) * Math.asin (c/a);
  		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  	},
    easeInBack: function (t, b, c, d, s) {
  		if (s == undefined) s = 1.70158;
  		return c*(t/=d)*t*((s+1)*t - s) + b;
  	},
  	easeOutBack: function (t, b, c, d, s) {
  		if (s == undefined) s = 1.70158;
  		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  	},
  	easeInOutBack: function (t, b, c, d, s) {
  		if (s == undefined) s = 1.70158;
  		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
  		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  	},
  	easeInBounce: function (t, b, c, d) {
  		return c - jQuery.easing.easeOutBounce (d-t, 0, c, d) + b;
  	},
  	easeOutBounce: function (t, b, c, d) {
  		if ((t/=d) < (1/2.75)) {
  			return c*(7.5625*t*t) + b;
  		} else if (t < (2/2.75)) {
  			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  		} else if (t < (2.5/2.75)) {
  			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  		} else {
  			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  		}
  	},
  }

  return _Partimate
})
