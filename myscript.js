// author HaKDMoDz™
// Global Variable Declaration & Initialization 
var statusOfSwitches = { l1Status: Boolean, l2Status: Boolean, l3Status: Boolean, l4Status: Boolean };
var On = true;
var Off = false;
var statusOne = statusOfSwitches[l1Status];
var statusTwo = statusOfSwitches[l2Status];
var statusThree = statusOfSwitches[l3Status];
var statusFour = statusOfSwitches[l4Status];

function getBuild() {
    $build = document.querySelector('#build-info > var:nth-child(1)').innerHTML = new Date();

}


function resetLights() {
    //first
    $('#lite1').attr('src', 'wallSwitch-134x80-off.jpg');
    statusOfSwitches[0] = false;
    document.querySelector("#firstLabel").textContent = statusOne;
    //second
    $('#lite2').attr('src', 'wallSwitch-134x80-off.jpg');
    statusOfSwitches[1] = false;
    document.querySelector("#secondLabel").textContent = statusTwo;
    //third
    $('#lite3').attr('src', 'wallSwitch-134x80-off.jpg');
    statusOfSwitches[2] = false;
    document.querySelector("#thirdLabel").textContent = statusThree;
    //fourth
    $('#lite4').attr('src', 'wallSwitch-134x80-off.jpg');
    statusOfSwitches[3] = false;
    document.querySelector("#fourthLabel").textContent = statusFour;
    //javascript alert all reset
    //    for alert window notification uncomment next line
    //window.alert("Lights Reset !");
}

function changeLight1() {
    if (statusOfSwitches[0] == false) {
        $('#lite1').click(function() {
            document.querySelector('#lite1').src = "wallSwitch-134x80-off.jpg";
            $('#lite1').attr('src', 'wallSwitch-134x80-on.jpg');
            statusOfSwitches[0] = true;
            console.log(statusOfSwitches[0]);
            document.querySelector("#firstLabel").textContent = statusOfSwitches[0];
        });

    } else {
        $('#lite1').click(function() {
            document.querySelector('#lite1').src = "wallSwitch-134x80-on.jpg";
            $('#lite1').attr('src', 'wallSwitch-134x80-off.jpg');
            statusOfSwitches[0] = false;
            document.querySelector("#firstLabel").textContent = statusOfSwitches[0];
        });
    }
    console.log(statusOfSwitches[0]);

}

function changeLight2() {
    if (statusOfSwitches[1] == false) {
        $('#light2').click(function() {
            document.querySelector("#lite2").src = 'wallSwitch-134x80-off.jpg';
            $('#lite2').attr('src', 'wallSwitch-134x80-on.jpg');
            statusOfSwitches[1] = true;
            document.querySelector('#secondLabel').innerHTML = statusOfSwitches[1];
        });

    } else {
        // switch off
        $('#light2').click(function() {
            document.querySelector("#lite2").src = 'wallSwitch-134x80-on.jpg';
            $('#lite2').attr('src', 'wallSwitch-134x80-off.jpg');
            statusOfSwitches[1] = false;
            document.querySelector('#secondLabel').innerHTML = statusOfSwitches[1];
        });
    }
    console.log(statusOfSwitches[1]);

}

function changeLight3() {
    if (statusOfSwitches[2] == false) {
        $('#light3').click(function() {
            document.querySelector("#lite3").src = 'wallSwitch-134x80-off.jpg';
            $('#lite3').attr('src', 'wallSwitch-134x80-on.jpg');
            statusOfSwitches[2] = true;
            document.querySelector('#thirdLabel').innerHTML = statusOfSwitches[2];
        });

    } else {
        // switch off
        $('#light3').click(function() {
            document.querySelector("#lite3").src = 'wallSwitch-134x80-on.jpg';
            $('#lite3').attr('src', 'wallSwitch-134x80-off.jpg');
            statusOfSwitches[2] = false;
            document.querySelector('#thirdLabel').innerHTML = statusOfSwitches[2];
        });
    }
    console.log(statusOfSwitches[2]);
}

function changeLight4() {
    if (statusOfSwitches[3] == false) {
        $('#light4').click(function() {
            document.querySelector("#lite4").src = 'wallSwitch-134x80-off.jpg';
            $('#lite4').attr('src', 'wallSwitch-134x80-on.jpg');
            statusOfSwitches[3] = true;
            document.querySelector('#fourthLabel').innerHTML = statusOfSwitches[3];
        });
    } else {
        // switch off
        $('#light4').click(function() {
            document.querySelector("#lite4").src = 'wallSwitch-134x80-on.jpg';
            $('#lite4').attr('src', 'wallSwitch-134x80-off.jpg');
            statusOfSwitches[3] = false;
            document.querySelector('#fourthLabel').innerHTML = statusOfSwitches[3];
        });
    }
    console.log(statusOfSwitches[3]);
}


/* black theme css */
function blackTheme() {
    var audio = $("#clickSound")[0];
    playSound();
    $('body').css('background-color', 'black');
    //alert("Black Theme Selected!");
    console.log("Black Selected !");
}
/* white theme css */
function whiteTheme() {
    var audio = $("#clickSound")[0];
    playSound();
    $('body').css('background-color', 'white');
    $('body').css('borderColor', 'white');
    $('controls-container').css('borderColor: white');

    //alert("White Theme Selected!");
    console.log("White Selected !");
}
/* red theme css */
function redTheme() {
    var audio = $("#clickSound")[0];
    playSound();
    $('body').css('background-color', 'red');
    //alert("Red Theme Selected!");
    console.log("Red Selected !");
}
/* lime theme css */
function limeTheme() {
    var audio = $("#clickSound")[0];
    playSound();
    $('body').css('background-color', 'lime');
    //alert("lime Theme Selected!");
    console.log("Lime Selected !");
}
/* default theme css */
function defaultTheme() {
    var audio = $("#clickSound")[0];
    playSound();
    $('body').css('background-color', '#20262e');
    //alert("Black Theme Selected!");
    console.log("Default Gunmetal-grey Selected !");
    var audio3 = $("/consoleThemeRestored.mp3");
    playSound(audio3);
}
//var audio = $("#clickSound")[0];


// audio button click sound event
function playSound2() {
    var audio2 = $("#clickSound2")[0];
    var audio = $("#clickSound2")[0];
    $("#black-theme-button1").mousedown(function() {
        audio2.play();
    });
    $("#white-theme-button2").mousedown(function() {
        audio2.play();
    });
    $("#red-theme-button3").mousedown(function() {
        audio2.play();
    });
    $("#lime-theme-button4").mousedown(function() {
        audio2.play();
    });
}

// audio button click sound event - *UNUSED*
function playSound() {
    // var audio = $("#clickSound")[0];
    var audio = $("#clickSound")[0];
    // 
    $("#light1.lights").mousedown(function() {
        audio.play();
    });

    $("#light2.lights").mousedown(function() {
        audio.play();
    });

    $("#light3.lights").mousedown(function() {
        audio.play();
    });

    $("#light4.lights").mousedown(function() {
        audio.play();
    });
}

function hidePanel() {
    document.getElementById("hide-btn").onclick = function() {
        document.getElementById("lighting-panel").style.display = "none";
        //document.getElementById("hide-btn").hidden;
        document.getElementById("hide-btn").style.display = "none";
        document.getElementById("show-btn").style.display = "block";

    };
}

function showPanel() {
    document.getElementById("show-btn").onclick = function() {
        document.getElementById("lighting-panel").style.display = "block";
        document.getElementById("show-btn").style.display = "none";
        document.getElementById("hide-btn").style.display = "inherit";
    };
}


document.onloadstart(document.getElementById("show-btn").style.display = "none");