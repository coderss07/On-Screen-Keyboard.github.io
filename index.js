var output_text = "";
var caps = false;
var shift = false;
const str = ".";

function change_theme(isDark) {
    var current_theme = document.getElementsByTagName('body');
    if(isDark) {
        current_theme[0].style.filter = null;
    }else {
        current_theme[0].style.filter = 'invert(1)';
    }
}

function button_clicked(char1, char2) {
    var character = char1;
    var flag = false;
    if(shift) {
        character = char2;
        flag = true;
        sft_clicked();
    }
    if(caps) {
        if(!flag) { 
            output_text = output_text + character.toUpperCase();
        }else {
            output_text = output_text + character.toLowerCase();
        }
    } else {
        output_text = output_text + character;
    }
    
    var output = document.getElementById("output");
    output.textContent = output_text;
}

function space() {
    output_text = output_text + " ";
    output.textContent = output_text;
}

function back_space() {
    var n = output_text.length;
    if(n != 0) {
        output_text = output_text.substring(0, n - 1);
    }
    output.textContent = output_text;
}

function caps_clicked() {
    var caps_btn = document.getElementById("caps");
    if (caps) {
        caps_btn.style.backgroundColor = null;
        caps = false;
    }
    else {
        caps_btn.style.backgroundColor = 'rgb(190, 186, 186)';
        caps = true;
    }
}

function clear_all() {
    var output = document.getElementById("output");
    output.textContent = "";
    output_text = "";
}

function sft_clicked() {
    var sft_obj = document.getElementsByClassName("shft");
    if(shift) {
        for(let i = 0; i < sft_obj.length; i++) {
            sft_obj[i].style.backgroundColor = null;
        }
        shift = false;
    }else {
        for(let i = 0; i < sft_obj.length; i++) {
            sft_obj[i].style.backgroundColor = 'rgb(190, 186, 186)';
        }
        shift = true;
    }
}