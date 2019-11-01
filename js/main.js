Library = new Library();

    
    var firSelector = document.getElementById("first-selector");
    var staticElem = document.getElementById('static-elem');
    var repositionElem = document.getElementsByClassName('reposition')[0];
    var easeList = document.querySelectorAll('.ease li');
    var easeListBall = document.querySelectorAll('.ease li div');
    var secSelector = document.getElementById("second-selector");
    var imgSplitBtn = document.querySelector('.imgsplit-btn button');
    var thirdSelector = document.getElementById('third-selector');
    var txtSplitBtn = document.querySelector('.txtsplit-btn button');


    var staticStyle = window.getComputedStyle(staticElem);
    var initTop = staticStyle.getPropertyValue('top');
    var initBot = staticStyle.getPropertyValue('bottom');
    var initLeft = staticStyle.getPropertyValue('left');
    var initRight = staticStyle.getPropertyValue('right');

    var initWd = staticStyle.getPropertyValue('width');
    var initHt = staticStyle.getPropertyValue('height');

    var tweenToBtn = document.querySelector('.tweento');
    var tweenFromBtn = document.querySelector('.tweenfrom');

    
    firSelector.onchange = getFirVal;
    secSelector.onchange = getSecVal;
    thirdSelector.onchange = getThirdVal;

    function getFirVal(){
    
    var value = firSelector.options[firSelector.selectedIndex].value;

    switch(value){

        case 'e' :      
        
        tweenToBtn.addEventListener('click', function(){
        Library.tweenTo('#static-elem', 4 ,{backgroundColor: 'gray', top: '-150px', width: '100px', height: '100px', opacity: 0});
        showReposition();
        });
        tweenFromBtn.addEventListener('click', function(){
        Library.tweenFrom('#static-elem', 4 ,{backgroundColor: 'gray', top: '-150px', width: '100px', height: '100px', opacity: 0});
        showReposition();
        }); 
     
        break;
        
        case 'l' :      
        tweenToBtn.addEventListener('click', function(){
        Library.tweenTo('#static-elem', 4 ,{left: '150px'});
        showReposition();
 
        });
        tweenFromBtn.addEventListener('click', function(){
        Library.tweenFrom('#static-elem', 4 ,{left: '150px'});
        showReposition();
 
        
        }); 
    
        break;
        
        case 'r' :      
        
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{right: '150px'});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{right: '150px'});
            showReposition();

            
        }); 
    
        break;

        case 't' :      
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{top: '150px'});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{top: '150px'});
            showReposition();
            
        }); 
        break;

        case 'o' :      
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{opacity: 0});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{opacity: 0});
            showReposition();

            
        }); 

        break;

        case 'b' :      
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{bottom: '150px'});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{bottom: '150px'});
            showReposition();
            
        }); 

        break;

        case 'bg' :      
        
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{backgroundColor: 'aqua'});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{backgroundColor: 'aqua'});
            showReposition();
            
        }); 

        break;

        
        case 'w' :      
        
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{width: '100px', backgroundColor: 'aqua'});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{width: '100px', backgroundColor: 'aqua'});
            showReposition();
            
        }); 

        break;

        case 'h' :      
        
        tweenToBtn.addEventListener('click', function(){
            Library.tweenTo('#static-elem', 4 ,{height: '100px', backgroundColor: 'aqua'});
            showReposition();

        });
        tweenFromBtn.addEventListener('click', function(){
            Library.tweenFrom('#static-elem', 4 ,{height: '100px', backgroundColor: 'aqua'});
            showReposition();
            
        }); 

        break;

    }
    
    }



    function getSecVal(){

        var sliceNum = secSelector.options[secSelector.selectedIndex].value ;

        switch(sliceNum){

            case '25': 
            
            imgSplitBtn.addEventListener('click', function(){
                Library.sliceImg('.imgsplit-wrap img', 25, 'left'); 
    
            });
            break;

            case '15': 
            
            imgSplitBtn.addEventListener('click', function(){
                Library.sliceImg('.imgsplit-wrap img', 15, 'bottom'); 
    
            });
            break;

            case '50': 
            
            imgSplitBtn.addEventListener('click', function(){
                Library.sliceImg('.imgsplit-wrap img', 50, 'left'); 
    
            });
            break;

            case '75': 
            
            imgSplitBtn.addEventListener('click', function(){
                Library.sliceImg('.imgsplit-wrap img', 75, 'bottom'); 
    
            });
            break;

            case '100': 
            
            imgSplitBtn.addEventListener('click', function(){
                Library.sliceImg('.imgsplit-wrap img', 100, 'left'); 
    
            });
            break;
   
        }

    }


    function getThirdVal(){
        console.log('hey');

        var keyVal = thirdSelector.options[thirdSelector.selectedIndex].value ;

        switch(keyVal){

            case 'al': 
            
            txtSplitBtn.addEventListener('click', function(){
            Library.animateLetters('#para', 0.6, 0.07);
    
            });
            break;

            case 'aw': 
            
            txtSplitBtn.addEventListener('click', function(){
                Library.animateWords('#para1', 0.6, 0.07);
        
            });
            break;

            case 'swa': 
            
            txtSplitBtn.addEventListener('click', function(){
                Library.splitWords('#para2', 'option1');
        
            });
            break;


            case 'swb': 
            
            txtSplitBtn.addEventListener('click', function(){
                Library.splitWords('#para3', 'option2');
        
            });
            break;

            case 'swc': 
            
            txtSplitBtn.addEventListener('click', function(){
                Library.splitWords('#para4', 'option3');
        
            });
            break;
   
        }

    }



    easeList[0].onmouseover = function(){
         Library.ease('#onea', 3, {top: '140px'}, 'easeInExpo'); 
    };
    easeList[0].onmouseout = function(){
        easeListBall[0].style.top = '0px';
    };

    easeList[1].onmouseover = function(){
        Library.ease('#oneb', 3, {top: '140px'}, 'easeOutExpo'); 
    };
    easeList[1].onmouseout = function(){
       easeListBall[1].style.top = '0px';
    };

    easeList[2].onmouseover = function(){
        Library.ease('#onec', 3, {top: '140px'}, 'easeInOutExpo'); 
    };
    easeList[2].onmouseout = function(){
       easeListBall[2].style.top = '0px';
    };

    easeList[3].onmouseover = function(){
        Library.ease('#twoa', 3, {top: '140px'}, 'easeInBack'); 
    };
    easeList[3].onmouseout = function(){
       easeListBall[3].style.top = '0px';
    };

    easeList[4].onmouseover = function(){
        Library.ease('#twob', 3, {top: '140px'}, 'easeOutBack'); 
    };
    easeList[4].onmouseout = function(){
       easeListBall[3].style.top = '0px';
    };

    easeList[5].onmouseover = function(){
        Library.ease('#twoc', 3, {top: '140px'}, 'easeInOutBack'); 
    };
    easeList[5].onmouseout = function(){
       easeListBall[5].style.top = '0px';
    };

    easeList[6].onmouseover = function(){
        Library.ease('#threea', 3, {top: '140px'}, 'easeInBounce'); 
    };
    easeList[6].onmouseout = function(){
       easeListBall[6].style.top = '0px';
    };

    easeList[7].onmouseover = function(){
        Library.ease('#threeb', 3, {top: '140px'}, 'easeOutBounce'); 
    };
    easeList[7].onmouseout = function(){
       easeListBall[7].style.top = '0px';
    };

    easeList[8].onmouseover = function(){
        Library.ease('#threec', 3, {top: '140px'}, 'easeInOutBounce'); 
    };
    easeList[8].onmouseout = function(){
       easeListBall[8].style.top = '0px';
    };

    easeList[9].onmouseover = function(){
        Library.ease('#foura', 3, {top: '140px'}, 'easeInElastic'); 
    };
    easeList[9].onmouseout = function(){
       easeListBall[9].style.top = '0px';
    };

    easeList[10].onmouseover = function(){
        Library.ease('#fourb', 3, {top: '140px'}, 'easeOutElastic'); 
    };
    easeList[10].onmouseout = function(){
       easeListBall[10].style.top = '0px';
    };

    easeList[11].onmouseover = function(){
        Library.ease('#fourc', 3, {top: '140px'}, 'easeInOutElastic'); 
    };
    easeList[11].onmouseout = function(){
       easeListBall[11].style.top = '0px';
    };









    function reposition(){
        staticElem.style.width = initWd + 'px';
        staticElem.style.height = initHt + 'px';
        staticElem.style.top = initTop;
        staticElem.style.bottom = initBot;
        staticElem.style.right = initRight;
        staticElem.style.left = initLeft;
        staticElem.style.backgroundColor = 'transparent';
        staticElem.style.opacity = 1;

    }

    function showReposition(){
        repositionElem.style.display = 'block';
    }










































