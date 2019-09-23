/*********************************************************************************
 * *******************************   Data   ******************************************
 ************************************************************************************/

const CountCont = (function() {
    // ************************************* private data **************************************
    let Data = {
        turnCounter : 0,
        crosses : 0,
        zeros : 0,
        playing : 0,
    }

    // ************************************* Public data **************************************
    return {
        getData : function () {
            return Data;
        },

        changeTurn : function () {
            Data.turnCounter += 1;
        },

        crossPoint : function () {
            Data.crosses += 1;
        },

        zeroPoint : function () {
            Data.zeros += 1;
        },

        togglePlaying : function () {
            Data.playing += 1;
        }
    }
})();

/*********************************************************************************
 * *******************************   UI    ******************************************
 ************************************************************************************/

const UICont = (function() {

    // ************************************* Query Selectors **************************************
    // ************************************* Private UI **************************************
    const DOM = {
        resetButton : document.querySelector('.reset-button'),
        crossScore : document.querySelector('.score-crosses'),
        zeroesScore : document.querySelector('.score-zeros'),
        eListeners : document.querySelector('.listeners'),
        bottom : document.querySelector('.bottom'),
        middle : document.querySelector('.middle'),
        top : document.querySelector('.upper'),
        upper_left : document.querySelector('.upper-left'),
        upper_middle : document.querySelector('.upper-middle'),
        upper_right : document.querySelector('.upper-right'),
        middle_left : document.querySelector('.middle-left'),
        middle_middle : document.querySelector('.middle-middle'),
        middle_right : document.querySelector('.middle-right'),
        bottom_left : document.querySelector('.bottom-left'),
        bottom_middle : document.querySelector('.bottom-middle'),
        bottom_right : document.querySelector('.bottom-right'),
    }

    // ************************************* setting Score **************************************
    let crossesWon = function (score) {
        DOM.crossScore.textContent = `Dogs: ${score}`;
        
    }

    let zerosWon = function (score) {
        DOM.zeroesScore.textContent = `Cats: ${score}`;
    }

    // ************************************* resetting classes **************************************

    let reset = function () {
        DOM.upper_left.classList.remove('zero');
        DOM.upper_left.classList.remove('cross');
        if (DOM.upper_left.classList.contains('available')) {
            DOM.upper_left.classList.remove('available')
            DOM.upper_left.classList.add('available')
        } else {
            DOM.upper_left.classList.add('available')
        }

        DOM.upper_middle.classList.remove('zero');
        DOM.upper_middle.classList.remove('cross');
        if (DOM.upper_middle.classList.contains('available')) {
            DOM.upper_middle.classList.remove('available')
            DOM.upper_middle.classList.add('available')
        } else {
            DOM.upper_middle.classList.add('available')
        }

        DOM.upper_right.classList.remove('zero');
        DOM.upper_right.classList.remove('cross');
        if (DOM.upper_right.classList.contains('available')) {
            DOM.upper_right.classList.remove('available')
            DOM.upper_right.classList.add('available')
        } else {
            DOM.upper_right.classList.add('available')
        }

        DOM.middle_left.classList.remove('zero');
        DOM.middle_left.classList.remove('cross');
        if (DOM.middle_left.classList.contains('available')) {
            DOM.middle_left.classList.remove('available')
            DOM.middle_left.classList.add('available')
        } else {
            DOM.middle_left.classList.add('available')
        }

        DOM.middle_middle.classList.remove('zero');
        DOM.middle_middle.classList.remove('cross');
        if (DOM.middle_middle.classList.contains('available')) {
            DOM.middle_middle.classList.remove('available')
            DOM.middle_middle.classList.add('available')
        } else {
            DOM.middle_middle.classList.add('available')
        }

        DOM.middle_right.classList.remove('zero');
        DOM.middle_right.classList.remove('cross');
        if (DOM.middle_right.classList.contains('available')) {
            DOM.middle_right.classList.remove('available')
            DOM.middle_right.classList.add('available')
        } else {
            DOM.middle_right.classList.add('available')
        }

        DOM.bottom_left.classList.remove('zero');
        DOM.bottom_left.classList.remove('cross');
        if (DOM.bottom_left.classList.contains('available')) {
            DOM.bottom_left.classList.remove('available')
            DOM.bottom_left.classList.add('available')
        } else {
            DOM.bottom_left.classList.add('available')
        }

        DOM.bottom_middle.classList.remove('zero');
        DOM.bottom_middle.classList.remove('cross');
        if (DOM.bottom_middle.classList.contains('available')) {
            DOM.bottom_middle.classList.remove('available')
            DOM.bottom_middle.classList.add('available')
        } else {
            DOM.bottom_middle.classList.add('available')
        }

        DOM.bottom_right.classList.remove('zero');
        DOM.bottom_right.classList.remove('cross');
        if (DOM.bottom_right.classList.contains('available')) {
            DOM.bottom_right.classList.remove('available')
            DOM.bottom_right.classList.add('available')
        } else {
            DOM.bottom_right.classList.add('available')
        }
    }

    // title.addEventListener('click', function() {
    //     console.log('click');
    // })
    // ************************************* public returning **************************************
    return {
        returnDOM : function () {
            return DOM;
        },

        returnCrosses : function () {
            return crossesWon;
        },

        returnZeroes : function () {
            return zerosWon;
        },
        
        returnReset : function () {
            return reset;
        }
    }
    

})();

/*********************************************************************************
 * *******************************   Controller    ******************************************
 ************************************************************************************/

const controller = (function (Count, UI) {

    const DOM = UI.returnDOM();
    const data = Count.getData();
    const returnCrosses = UI.returnCrosses();
    const returnZeroes = UI.returnZeroes()
    const reset = UI.returnReset();

// ************************************* checking for tic-tac-toe **************************************
    let checkWin = function () {
        // rows zeroes
        if (DOM.upper_left.classList.contains('cross') && DOM.upper_middle.classList.contains('cross') && DOM.upper_right.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        } else if (DOM.middle_left.classList.contains('cross') && DOM.middle_middle.classList.contains('cross') && DOM.middle_right.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        } else if (DOM.bottom_left.classList.contains('cross') && DOM.bottom_middle.classList.contains('cross') && DOM.bottom_right.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
            reset();

        // columns crosses   
        } else if (DOM.upper_left.classList.contains('cross') && DOM.middle_left.classList.contains('cross') && DOM.bottom_left.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        } else if (DOM.upper_middle.classList.contains('cross') && DOM.middle_middle.classList.contains('cross') && DOM.bottom_middle.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        } else if (DOM.upper_right.classList.contains('cross') && DOM.middle_right.classList.contains('cross') && DOM.bottom_right.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        
        // diagonals crosses
        } else if (DOM.upper_left.classList.contains('cross') && DOM.middle_middle.classList.contains('cross') && DOM.bottom_right.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        } else if (DOM.upper_right.classList.contains('cross') && DOM.middle_middle.classList.contains('cross') && DOM.bottom_left.classList.contains('cross')) {
            Count.crossPoint();
            Count.togglePlaying();
            returnCrosses(data.crosses);
        
        // rows zeroes
        }  else if (DOM.upper_left.classList.contains('zero') && DOM.upper_middle.classList.contains('zero') && DOM.upper_right.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        } else if (DOM.middle_left.classList.contains('zero') && DOM.middle_middle.classList.contains('zero') && DOM.middle_right.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        } else if (DOM.bottom_left.classList.contains('zero') && DOM.bottom_middle.classList.contains('zero') && DOM.bottom_right.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);

        // columns zeroes   
        } else if (DOM.upper_left.classList.contains('zero') && DOM.middle_left.classList.contains('zero') && DOM.bottom_left.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        } else if (DOM.upper_middle.classList.contains('zero') && DOM.middle_middle.classList.contains('zero') && DOM.bottom_middle.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        } else if (DOM.upper_right.classList.contains('zero') && DOM.middle_right.classList.contains('zero') && DOM.bottom_right.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        

        // diagonals zeroes
        } else if (DOM.upper_left.classList.contains('zero') && DOM.middle_middle.classList.contains('zero') && DOM.bottom_right.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        } else if (DOM.upper_right.classList.contains('zero') && DOM.middle_middle.classList.contains('zero') && DOM.bottom_left.classList.contains('zero')) {
            Count.zeroPoint();
            Count.togglePlaying();
            returnZeroes(data.zeros);
        }
    }

    // ************************************* button that resets **************************************
    const resetButton = function () {
        DOM.resetButton.addEventListener('click', function(event) {
            reset();
            if (data.playing % 2 !== 0) {
                Count.togglePlaying();
            }
            if (DOM.crossScore.classList.contains('current')) {
                DOM.crossScore.classList.remove('current')
            } else if (DOM.zeroesScore.classList.contains('current')) {
                DOM.zeroesScore.classList.remove('current')
            } 
            data.turnCounter = 0;
            DOM.crossScore.classList.add('current');
        })
    }

    // ************************************* toggling highlighting **************************************
    let changeSide = function() {
        if (data.turnCounter % 2 !== 0) {
            DOM.zeroesScore.classList.remove('current')
            DOM.crossScore.classList.add('current')
        } else {
            DOM.crossScore.classList.remove('current')
            DOM.zeroesScore.classList.add('current')
        }
    }

    // ************************************* On click calling everything **************************************
    const eventListeners = function () {
        DOM.eListeners.addEventListener('click', function(event) {
            if (data.playing % 2 === 0) {
                if (data.turnCounter % 2 === 0 && event.target.classList.contains('available')) {
                    changeSide();
                    event.target.classList.add('cross');
                    event.target.classList.remove('available');
                    console.log(event.target)
                    console.log(data.playing)
                    Count.changeTurn();
                    checkWin();
                } else if (event.target.classList.contains('available')){
                    changeSide();
                    event.target.classList.add('zero');
                    event.target.classList.remove('available');
                    console.log(event.target)
                    console.log(data.playing)
                    Count.changeTurn();
                    checkWin();
                }   
            }       
        })
    }

    return {
        init: function() {
            eventListeners();
            resetButton();
            DOM.crossScore.classList.add('current');
        }
    }
})(CountCont, UICont)

// ************************************* Initilize and call everything **************************************
controller.init();