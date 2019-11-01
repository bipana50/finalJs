class Library {

    constructor() {
    }

    tweenTo(selector, duration, obj) {
        this.selector = selector;
        this.duration = duration;
        this.obj = obj;
        this.timer;
        this.selectedElem = document.querySelectorAll(selector)[0];
        this.computed = getComputedStyle(this.selectedElem);
        this.keys = Object.keys(this.obj);
        this.values = Object.values(this.obj);
    
        this.timer = [];
        //console.log(this.counter);


        this.getExitingValues = function () {

            for (var i = 0; i < this.keys.length; i++) {


                if (this.keys[i] === ('backgroundColor' || 'background-color')) {
                    this.bgColVal = this.computed.getPropertyValue('background-color');

                }


                if (this.keys[i] === 'left') {

                    this.selectedElem.style.position = 'absolute';
                    this.leftVal = this.computed.getPropertyValue('left');
                    this.leftDiff = parseFloat(this.values[i]) - parseFloat(this.leftVal);
                }


                if (this.keys[i] === 'right') {

                    this.selectedElem.style.position = 'absolute';
                    this.rightVal = this.computed.getPropertyValue('right');
                    this.rightDiff = parseFloat(this.values[i]) - parseFloat(this.rightVal);
                }


                if (this.keys[i] === 'top') {

                    this.selectedElem.style.position = 'absolute';
                    this.topVal = this.computed.getPropertyValue('top');
                    this.topDiff = parseFloat(this.values[i]) - parseFloat(this.topVal);
                }


                if (this.keys[i] === 'bottom') {

                    this.selectedElem.style.position = 'absolute';
                    this.bottomVal = this.computed.getPropertyValue('bottom');
                    this.bottomDiff = parseFloat(this.values[i]) - parseFloat(this.bottomVal);
                }


                if (this.keys[i] === 'width') {

                    this.wdVal = this.computed.getPropertyValue('width');
                    this.wdDiff = parseFloat(this.values[i]) - parseFloat(this.wdVal);
                }


                if (this.keys[i] === 'height') {

                    this.htVal = this.computed.getPropertyValue('height');
                    this.htDiff = parseFloat(this.values[i]) - parseFloat(this.htVal);
                }


                if (this.keys[i] === 'opacity') {

                    this.opVal = this.computed.getPropertyValue('opacity');
                    this.opDiff = this.values[i] - this.opVal;
                }


            }


        }

        this.getExitingValues();

        
        this.start = Date.now(); // remember start time


        this.timer = setInterval(function () {

            //console.log(this.counter);
            //debugger;

            // how much time passed from the start?
            this.timePassed = Date.now() - this.start;

            if (this.timePassed >= this.duration * 1000) { //1000 ms
                clearInterval(this.timer); // finish the animation after given seconds
                return;
            }


            for (var i = 0; i < this.keys.length; i++) {


                if (this.keys[i] === ('backgroundColor')) {

                    if (this.timePassed >= (this.duration * 1000) / 2) {
                        this.selectedElem.style.backgroundColor = this.values[i];
                    }

                }


                if (this.keys[i] === 'left') {

                    this.selectedElem.style.left = parseFloat(this.leftVal) + (this.timePassed / ((this.duration * 1000) / this.leftDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'right') {

                    this.selectedElem.style.right = parseFloat(this.rightVal) + (this.timePassed / ((this.duration * 1000) / this.rightDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'top') {

                    this.selectedElem.style.top = parseFloat(this.topVal) + (this.timePassed / ((this.duration * 1000) / this.topDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'bottom') {
                    
                    this.selectedElem.style.bottom = parseFloat(this.bottomVal) + (this.timePassed / ((this.duration * 1000) / this.bottomDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'height') {

                    this.selectedElem.style.height = parseFloat(this.htVal) + (this.timePassed / ((this.duration * 1000) / this.htDiff)) + 'px';

                }


                if (this.keys[i] === 'width') {

                    this.selectedElem.style.width = parseFloat(this.wdVal) + (this.timePassed / ((this.duration * 1000) / this.wdDiff)) + 'px';

                }


                if (this.keys[i] === 'opacity') {

                    this.selectedElem.style.opacity = parseFloat(this.opVal) + (this.timePassed / ((this.duration * 1000) / this.opDiff));

                }


            }



        }.bind(this), 0);



    }

    tweenFrom(selector, duration, obj) {

        this.selector = selector;
        this.duration = duration;
        this.obj = obj;
        this.timer;
        this.selectedElem = document.querySelectorAll(selector)[0];
        this.computed = getComputedStyle(this.selectedElem);
        this.keys = Object.keys(this.obj);
        this.values = Object.values(this.obj);


        this.getExitingValues = function () {

            for (var i = 0; i < this.keys.length; i++) {


                if (this.keys[i] === ('backgroundColor' || 'background-color')) {
                    this.bgColVal = this.computed.getPropertyValue('background-color');
                    this.selectedElem.style.backgroundColor = this.values[i];

                }


                if (this.keys[i] === 'left') {

                    this.selectedElem.style.position = 'absolute';
                    this.leftVal = this.computed.getPropertyValue('left');
                    this.leftDiff = parseFloat(this.values[i]) - parseFloat(this.leftVal);
                }


                if (this.keys[i] === 'right') {

                    this.selectedElem.style.position = 'absolute';
                    this.rightVal = this.computed.getPropertyValue('right');
                    this.rightDiff = parseFloat(this.values[i]) - parseFloat(this.rightVal);
                }


                if (this.keys[i] === 'top') {

                    this.selectedElem.style.position = 'absolute';
                    this.topVal = this.computed.getPropertyValue('top');
                    this.topDiff = parseFloat(this.values[i]) - parseFloat(this.topVal);
                }


                if (this.keys[i] === 'bottom') {

                    this.selectedElem.style.position = 'absolute';
                    this.bottomVal = this.computed.getPropertyValue('bottom');
                    this.bottomDiff = parseFloat(this.values[i]) - parseFloat(this.bottomVal);
                }


                if (this.keys[i] === 'width') {

                    this.wdVal = this.computed.getPropertyValue('width');
                    this.wdDiff = parseFloat(this.values[i]) - parseFloat(this.wdVal);
                }


                if (this.keys[i] === 'height') {

                    this.htVal = this.computed.getPropertyValue('height');
                    this.htDiff = parseFloat(this.values[i]) - parseFloat(this.htVal);
                }


                if (this.keys[i] === 'opacity') {

                    this.opVal = this.computed.getPropertyValue('opacity');
                    this.opDiff = this.values[i] - this.opVal;
                }


            }


        }

        this.getExitingValues();

        
        this.start = Date.now(); // remember start time


        this.timer = setInterval(function () {

            // how much time passed from the start?
            this.timePassed = Date.now() - this.start;

            if (this.timePassed >= this.duration * 1000) { //1000 ms
                clearInterval(this.timer); // finish the animation after given seconds
                return;
            }


            for (var i = 0; i < this.keys.length; i++) {


                if (this.keys[i] === ('backgroundColor')) {

                    if (this.timePassed >= (this.duration * 1000) / 2) {
                        this.selectedElem.style.backgroundColor = this.bgColVal;
                    }

                }


                if (this.keys[i] === 'left') {

                    this.selectedElem.style.left = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.leftDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'right') {

                    this.selectedElem.style.right = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.rightDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'top') {

                    this.selectedElem.style.top = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.topDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'bottom') {
                    
                    this.selectedElem.style.bottom = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.bottomDiff)) + 'px';
                    
                }


                if (this.keys[i] === 'height') {

                    this.selectedElem.style.height = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.htDiff)) + 'px';

                }


                if (this.keys[i] === 'width') {

                    this.selectedElem.style.width = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.wdDiff)) + 'px';

                }


                if (this.keys[i] === 'opacity') {

                    this.selectedElem.style.opacity = parseFloat(this.values[i]) - (this.timePassed / ((this.duration * 1000) / this.opDiff));

                }


            }



        }.bind(this), 0);



    }


    ease(selector, duration, obj, easeFunc){
        this.selector = selector;
        this.duration = duration;
        this.obj = obj;
        this.easeFunc = easeFunc;
        this.keys = Object.keys(this.obj);
        this.values = Object.values(this.obj);
        this.currentStep = 0;
        this.frameRate = 60/1000; // 60 frame per second
        this.selectedElem = document.querySelectorAll(selector)[0];
        this.computed = getComputedStyle(this.selectedElem);


        this.getExitingValues = function () {

            for (var i = 0; i < this.keys.length; i++) {


                if (this.keys[i] === ('backgroundColor' || 'background-color')) {
                    this.bgColVal = this.computed.getPropertyValue('background-color');

                }


                if (this.keys[i] === 'left') {

                    this.selectedElem.style.position = 'absolute';
                    this.leftVal = this.computed.getPropertyValue('left');
                    this.leftDiff = parseFloat(this.values[i]) - parseFloat(this.leftVal);
                    this.newLeft = 0;
                }


                if (this.keys[i] === 'right') {

                    this.selectedElem.style.position = 'absolute';
                    this.rightVal = this.computed.getPropertyValue('right');
                    this.rightDiff = parseFloat(this.values[i]) - parseFloat(this.rightVal);
                }


                if (this.keys[i] === 'top') {

                    this.selectedElem.style.position = 'absolute';
                    this.topVal = this.computed.getPropertyValue('top');
                    this.topDiff = parseFloat(this.values[i]) - parseFloat(this.topVal);
                }


                if (this.keys[i] === 'bottom') {

                    this.selectedElem.style.position = 'absolute';
                    this.bottomVal = this.computed.getPropertyValue('bottom');
                    this.bottomDiff = parseFloat(this.values[i]) - parseFloat(this.bottomVal);
                }


                if (this.keys[i] === 'width') {

                    this.wdVal = this.computed.getPropertyValue('width');
                    this.wdDiff = parseFloat(this.values[i]) - parseFloat(this.wdVal);
                }


                if (this.keys[i] === 'height') {

                    this.htVal = this.computed.getPropertyValue('height');
                    this.htDiff = parseFloat(this.values[i]) - parseFloat(this.htVal);
                }


                if (this.keys[i] === 'opacity') {

                    this.opVal = this.computed.getPropertyValue('opacity');
                    this.opDiff = this.values[i] - this.opVal;
                }


            }


        }

        this.getExitingValues();
        
        // t = currentStep , b = start position , 
        //c = difference between start and end position, d = total animation time

        this.checkEasingFunction = function( currentStep, start, diff, totalTime ){
            
            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeOutBounce = function(t, b, c, d){

                if ((t/=d) < (1/2.75)) {
                    return c*(7.5625*t*t) + b;
                  } else if (t < (2/2.75)) {
                    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
                  } else if (t < (2.5/2.75)) {
                    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
                  } else {
                    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
                }    

            }
            
            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInBounce = function( t, b, c, d){

                return c - this.easeOutBounce(d-t, 0, c, d) + b;
            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInOutBounce = function( t, b, c, d){

                if (t < d/2) return this.easeInBounce(t*2, 0, c, d) * .5 + b;
                return this.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeOutElastic = function( t, b, c, d){

                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  
                if ((t/=d)==1) return b+c;  
                if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInElastic = function( t, b, c, d){

                var s=1.70158;
                var p=0;
                var a=c;
                if (t==0) return b;  
                if ((t/=d)==1) return b+c;  
                if (!p) p=d*.3;
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                return -(a*Math.pow( 2 , 10*(t-=1)) * Math.sin( (t*d-s) * (2*Math.PI)/p )) + b;
            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 


            this.easeInOutElastic = function( t, b, c, d){

                var s=1.70158;var p=0;var a=c;
                if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
                if (a < Math.abs(c)) { a=c; var s=p/4; }
                else var s = p/(2*Math.PI) * Math.asin (c/a);
                if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
                return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeOutBack = function( t, b, c, d){

                var s;
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;

            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInBack = function ( t, b, c, d){

                var s;
                if (s == undefined) s = 1.70158;
                return c*(t/=d)*t*((s+1)*t - s) + b;

            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInOutBack = function( t, b, c, d){

                var s;
                if (s == undefined) s = 1.70158; 
                if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
                return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;

            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeOutExpo = function( t, b, c, d){
                
                return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
            }

            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInExpo = function( t, b, c, d){

                return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
            }
            
            // t = currentStep , b = start position , 
            //c = difference between start and end position, d = total animation time 

            this.easeInOutExpo = function( t, b, c,d){

                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }


            switch(this.easeFunc){

              case 'easeOutBounce' : 
              return this.easeOutBounce(currentStep, start, diff, totalTime); 
              break;

              case 'easeInBounce' : 
              return this.easeInBounce(currentStep, start, diff, totalTime); 
              break;

              case 'easeInOutBounce' : 
              return this.easeInOutBounce(currentStep, start, diff, totalTime); 
              break;

              case 'easeOutElastic' : 
              return this.easeOutElastic(currentStep, start, diff, totalTime); 
              break;

              case 'easeInElastic' : 
              return this.easeInElastic(currentStep, start, diff, totalTime); 
              break;

              case 'easeInOutElastic' :
              return this.easeInOutElastic(currentStep, start, diff, totalTime);
              break;
              
              case 'easeOutBack' :
              return this.easeOutBack(currentStep, start, diff, totalTime);
              break;

              case 'easeInBack' :
              return this.easeInBack(currentStep, start, diff, totalTime);
              break;

              case 'easeInOutBack' :
              return this.easeInOutBack(currentStep, start, diff, totalTime);
              break;

              case 'easeOutExpo' :
              return this.easeOutExpo(currentStep, start, diff, totalTime);
              break;

              case 'easeInExpo' :
              return this.easeInExpo(currentStep, start, diff, totalTime);
              break;

              case 'easeInOutExpo' :
              return this.easeInOutExpo(currentStep, start, diff, totalTime);
              break;      


            }
        }

        this.animate = function(){

            this.currentStep++;
            

            

            for (var i = 0; i < this.keys.length; i++) {


                if (this.keys[i] === 'left') {

                    this.newLeft = this.checkEasingFunction( this.currentStep, parseFloat(this.leftVal), this.leftDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.left = this.newLeft + 'px';

                }


                if (this.keys[i] === 'right') {
                    
                    this.newRight = this.checkEasingFunction( this.currentStep, parseFloat(this.rightVal), this.rightDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.right = this.newRight + 'px';

                }


                if (this.keys[i] === 'top') {
                    this.newTop = this.checkEasingFunction( this.currentStep, parseFloat(this.topVal), this.topDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.top = this.newTop + 'px';

                }


                if (this.keys[i] === 'bottom') {

                    this.newBottom = this.checkEasingFunction( this.currentStep, parseFloat(this.bottomVal), this.bottomDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.bottom = this.newBottom + 'px';
                }


                if (this.keys[i] === 'height') {
                    
                    this.newHeight = this.checkEasingFunction( this.currentStep, parseFloat(this.heightVal), this.heightDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.height = this.newHeight + 'px';

                }


                if (this.keys[i] === 'width') {
                    
                    this.newWidth = this.checkEasingFunction( this.currentStep, parseFloat(this.leftVal), this.leftDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.width = this.newWidth + 'px';

                }


                if (this.keys[i] === 'opacity') {
                    this.newOp = this.checkEasingFunction( this.currentStep, parseFloat(this.opVal), this.opDiff, this.frameRate * (this.duration * 1000) );
                    this.selectedElem.style.opacity = this.newOp ;


                }


            }

            if(this.currentStep >= this.frameRate * (this.duration * 1000)){
                return;
            }

            requestAnimationFrame(this.animate.bind(this));        


        }

        this.animate();




    }

    sliceImg(selector , gridNum , transformOrigin){

        this.selector = selector;
        this.gridNum = gridNum;
        this.transformOrigin = transformOrigin;
        this.selectedElem = document.querySelectorAll(this.selector)[0];
        this.width = this.selectedElem.offsetWidth;
        this.height = this.selectedElem.offsetHeight;
        this.parentElem = this.selectedElem.parentNode;
        this.delay = 0.07;
        this.div = [];
        this.parentElem.style.position = 'absolute';
        this.src = this.selectedElem.getAttribute('src');

        console.log(this.selectedElem, this.width, this.height, this.parentElem);
        console.log(this.src);

        this.create = function(){

            for( var x=0; x < this.gridNum ; x++){
                this.sliceWd = x * this.width / this.gridNum + 'px';
                this.div[x] = document.createElement('div');
                this.parentElem.appendChild(this.div[x]);

                console.log(this.src);

                this.div[x].style.left = this.sliceWd;
                this.div[x].style.top = 0;
                this.div[x].style.width = this.width/this.gridNum + 'px';
                this.div[x].style.height = this.height + 'px';
                this.div[x].style.backgroundImage = 'url("' + this.src + '")';
                this.div[x].style.backgroundPosition= '-' + this.sliceWd;
                this.div[x].style.backgroundSize = this.width + 'px';
                this.div[x].style.transitionDelay = x * this.delay + 's';

                this.div[x].style.position = 'absolute';
                this.div[x].style.zIndex = 1;
                this.div[x].style.backgroundRepeat = 'no-repeat';
                this.div[x].style.transform = 'rotateY(-50deg) scale(0.5)';
                this.div[x].style.transition = 'all 0.6s cubic-bezier(0.445, 0.05, 0.55, 0.95)';
                this.div[x].style.transformOrigin = this.transformOrigin;
                this.div[x].style.opacity = 0;


            }
        }

        this.create();

        this.parentElem.onmouseover = mouseOver.bind(this);

        this.parentElem.onmouseout = mouseOut.bind(this);

        function mouseOver(){
            
            this.selectedElem.style.opacity = 0;
            for( var x = 0; x < this.gridNum; x++){
                this.div[x].style.opacity = 1;
                this.div[x].style.transform = 'rotateY(0deg) translateY(0)';
                this.div[x].style.transitionDelay = x * this.delay + 's';      
            }

        }

        function mouseOut(){
            for( var x = 0; x < this.gridNum; x++){
                this.div[x].style.opacity = 0;
                this.div[x].style.transform = 'rotateY(-50deg) scale(0.5)';
                this.div[x].style.transitionDelay = x * this.delay + 's';
            }

        }

        

    }


    animateLetters(selector, timeInterval, delay){
        this.selector = selector;
        this.timeInterval = timeInterval;
        this.delay = delay;
        this.divElem = [];
        this.selectedElem = document.querySelectorAll(this.selector)[0];
        this.cssStyle = window.getComputedStyle(this.selectedElem);
        this.initFont = this.cssStyle.getPropertyValue('font-size');
        this.selectedElem.style.position = 'relative';
        this.selectedElem.style.perspective = '0px';
        this.selectedElem.style.perspectiveOrigin = 'left';
    

        this.text = this.selectedElem.innerText;
        this.textArr = this.text.split('');
        //.replace(/ /g , '')

        this.selectedElem.innerHTML = '';

        this.setCSS = function(divElem){
            divElem.style.display = 'inline-block';
            divElem.style.transform = 'rotateY(0deg) scale(1)';
            divElem.style.transition = 'all '+ this.timeInterval + 's'+ ' cubic-bezier(0.445, 0.05, 0.55, 0.95)';
            divElem.style.transformOrigin = 'left';
            divElem.style.fontSize = this.initFont;

        }

        for(var i = 0; i < this.textArr.length ; i++){
            this.divElem[i] = document.createElement('div');
            if(this.textArr[i] === ' '){
                this.divElem[i].innerHTML = ' &nbsp ';
            }else{
                this.divElem[i].innerHTML = this.textArr[i].toUpperCase();
            }
            this.selectedElem.appendChild(this.divElem[i]);
            this.setCSS(this.divElem[i]);
            //console.log(this.textArr[i].toUpperCase());
        }

       // console.log(this.selectedElem.childNodes);

        this.selectedElem.onmouseover = mouseOver.bind(this);

        this.selectedElem.onmouseout = mouseOut.bind(this);


        function mouseOver(){
            //this.selectedElem.style.opacity = 0;
            for( var x = 0; x < this.divElem.length ; x++){
                
                this.divElem[x].style.opacity = 1;
                this.divElem[x].style.transform = 'rotateY(50deg) rotateZ(50deg) rotateX(10deg) translateY(0) scale(1.5) skew(20deg , 10deg)';
                this.divElem[x].style.fontSize = parseInt(this.initFont) * 2 + 'px';
                this.divElem[x].style.marginRight = this.initFont;
                this.divElem[x].style.marginTop = this.initFont;
                this.divElem[x].style.marginBottom = this.initFont;
                this.divElem[x].style.transitionDelay = x * this.delay + 's';      
            }

        }

        function mouseOut(){
            for( var x = 0; x < this.divElem.length ; x++){
                
                this.divElem[x].style.opacity = 1;
                this.divElem[x].style.transform = 'rotateY(0deg) scale(1)';
                this.divElem[x].style.fontSize = this.initFont;
                this.divElem[x].style.marginRight = '0px';
                this.divElem[x].style.marginTop = '0px';
                this.divElem[x].style.marginBottom = '0px';
                this.divElem[x].style.transitionDelay = x * this.delay + 's';      
            }
                

        }



        

    }

    animateWords(selector, timeInterval, delay){

        this.selector = selector;
        this.timeInterval = timeInterval;
        this.delay = delay;
        this.divElem = [];
        this.selectedElem = document.querySelectorAll(this.selector)[0];
        this.cssStyle = window.getComputedStyle(this.selectedElem);
        this.initFont = this.cssStyle.getPropertyValue('font-size');
        this.selectedElem.style.position = 'relative';
        this.selectedElem.style.perspective = '200px';
        this.selectedElem.style.perspectiveOrigin = 'bottom';
    

        this.text = this.selectedElem.innerText;
        this.textArr = this.text.match(/\b(\w+)\b/g);
        //.replace(/ /g , '')

        this.selectedElem.innerHTML = '';
        console.log(this.textArr);

        this.setCSS = function(divElem){
            divElem.style.display = 'inline-block';
            divElem.style.marginRight = parseInt(this.initFont) - 0.5 * parseInt(this.initFont) + 'px' ;

            divElem.style.transform = 'rotateY(0deg) scale(1)';
            divElem.style.transition = 'all '+ this.timeInterval + 's'+ ' cubic-bezier(0.445, 0.05, 0.55, 0.95)';
            divElem.style.transformOrigin = 'left';
            divElem.style.fontSize = this.initFont;

        }

        for(var i = 0; i < this.textArr.length ; i++){
            this.divElem[i] = document.createElement('div');
            this.divElem[i].innerHTML = this.textArr[i].toUpperCase();
            
            this.selectedElem.appendChild(this.divElem[i]);
            this.setCSS(this.divElem[i]);
        }


        this.selectedElem.onmouseover = mouseOver.bind(this);

        this.selectedElem.onmouseout = mouseOut.bind(this);


        function mouseOver(){

            for( var x = 0; x < this.divElem.length ; x++){
                
                this.divElem[x].style.opacity = 1;
                this.divElem[x].style.transform = 'rotateY(50deg) rotateZ(50deg) rotateX(10deg) translateY(0) scale(1.5) skew(20deg , 10deg)';
                this.divElem[x].style.fontSize = parseInt(this.initFont) * 2 + 'px';
                this.divElem[x].style.marginRight = this.initFont;
                this.divElem[x].style.marginTop = this.initFont;
                this.divElem[x].style.marginBottom = this.initFont;
                this.divElem[x].style.transitionDelay = x * this.delay + 's';      
            }

        }

        function mouseOut(){
            for( var x = 0; x < this.divElem.length ; x++){
                
                this.divElem[x].style.opacity = 1;
                this.divElem[x].style.transform = 'rotateY(0deg) scale(1)';
                this.divElem[x].style.fontSize = this.initFont;
                this.divElem[x].style.marginRight = '0px';
                this.divElem[x].style.marginTop = '0px';
                this.divElem[x].style.marginBottom = '0px';
                this.divElem[x].style.transitionDelay = x * this.delay + 's';      
            }
                

        }



        

    }


    splitWords(selector, option){

        this.selector = selector;
        this.option = option;
        this.divElem = [];
        this.selectedElem = document.querySelectorAll(this.selector)[0];
        this.cssStyle = window.getComputedStyle(this.selectedElem);
        this.initFont = this.cssStyle.getPropertyValue('font-size');
        this.selectedElem.style.position = 'relative';

        if( this.option === 'option1'){

            this.selectedElem.style.perspective = '100px'; 
        }
        if( this.option === 'option2'){
            this.selectedElem.style.perspective = '0px'; 
        }
        if( this.option === 'option3'){
            this.selectedElem.style.perspective = '100px'; 
        }

        this.selectedElem.style.perspectiveOrigin = 'left';
    

        this.text = this.selectedElem.innerText;
        this.textArr = this.text.match(/\b(\w+)\b/g);
        //.replace(/ /g , '')

        this.selectedElem.innerHTML = '';
        console.log(this.textArr);

        this.setCSS = function(divElem){
            divElem.style.display = 'inline-block';
            divElem.style.marginRight = parseInt(this.initFont) - 0.5 * parseInt(this.initFont) + 'px' ;

            divElem.style.transform = 'rotateY(0deg) scale(1)';
            divElem.style.transition = 'all 0.9s cubic-bezier(0.445, 0.05, 0.55, 0.95)';
            divElem.style.transformOrigin = 'left';
            divElem.style.fontSize = this.initFont;

        }

        for(var i = 0; i < this.textArr.length ; i++){
            this.divElem[i] = document.createElement('div');
            this.divElem[i].innerHTML = this.textArr[i].toUpperCase();
            
            this.selectedElem.appendChild(this.divElem[i]);
            this.setCSS(this.divElem[i]);
        }


        this.selectedElem.onmouseover = mouseOver.bind(this);

        this.selectedElem.onmouseout = mouseOut.bind(this);


        function mouseOver(){

            for( var x = 0; x < this.divElem.length ; x++){
                
                this.divElem[x].style.opacity = 1;
                if( x % 2 === 0){
                    if( this.option === 'option1'){

                        this.divElem[x].style.transform = 'rotateX(180deg) rotateY(180deg) rotateZ(10deg) translateY(-50px) translateZ(10px) skew(20deg , 10deg)';
                    }
                    if( this.option === 'option2'){

                        this.divElem[x].style.transform = 'rotateX(180deg) rotateY(180deg) rotateZ(180deg) translateY(-50px) translateZ(10px) skew(20deg , 10deg)';
                    }
                    if( this.option === 'option3'){

                        this.divElem[x].style.transform = 'rotateX(180deg) rotateY(180deg) rotateZ(180deg) translateY(-50px) translateZ(10px) skew(20deg , 10deg) scaleZ(1)';
                    }   
   

                }else{
                    if( this.option === 'option1'){

                        this.divElem[x].style.transform = 'rotateX(-180deg) rotateY(-180deg) rotateZ(-10deg) translateY(0px) translateZ(-10px) skew(-20deg , -10deg)';
                    }
                    if( this.option === 'option2'){

                        this.divElem[x].style.transform = 'rotateX(-180deg) rotateY(-180deg) rotateZ(-180deg) translateY(0px) translateZ(-10px) skew(-20deg , -10deg)';
                    }
                    if( this.option === 'option3'){

                        this.divElem[x].style.transform = 'rotateX(180deg) rotateY(180deg) rotateZ(180deg) translateY(-50px) translateZ(10px) skew(20deg , 10deg) scaleZ(0.5)';
                    }   

    
                }
                this.divElem[x].style.fontSize = parseInt(this.initFont) * 2 + 'px';
                this.divElem[x].style.marginRight = this.initFont;
                this.divElem[x].style.marginTop = this.initFont;
                this.divElem[x].style.marginBottom = this.initFont;
                this.divElem[x].style.transitionDelay = x * 0.07 + 's';      
            }

        }

        function mouseOut(){
            for( var x = 0; x < this.divElem.length ; x++){
                
                this.divElem[x].style.opacity = 1;
                this.divElem[x].style.transform = 'rotateY(0deg) scale(1)';
                this.divElem[x].style.fontSize = this.initFont;
                this.divElem[x].style.marginRight = parseInt(this.initFont) - 0.5 * parseInt(this.initFont) + 'px';
                this.divElem[x].style.marginTop = '0px';
                this.divElem[x].style.marginBottom = '0px';
                this.divElem[x].style.transitionDelay = x * 0.07 + 's';      
            }
                

        }



        

    }








}