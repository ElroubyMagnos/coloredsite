"use strict";
function Normal() {
    document.documentElement.style.setProperty('--main-color', '#F78CA2');
    document.documentElement.style.setProperty('--main-color2', '#F9DEC9');
    document.documentElement.style.setProperty('--btn-color', '#D80032');
    document.documentElement.style.setProperty('--btn-hover', '#3D0C11');
}
function Pinko() {
    document.documentElement.style.setProperty('--main-color', '#BC7AF9');
    document.documentElement.style.setProperty('--main-color2', '#FFA1F5');
    document.documentElement.style.setProperty('--btn-color', '#F8FF95');
    document.documentElement.style.setProperty('--btn-hover', '#A6FF96');
}
function Blue() {
    document.documentElement.style.setProperty('--main-color', '#176B87');
    document.documentElement.style.setProperty('--main-color2', '#053B50');
    document.documentElement.style.setProperty('--btn-color', '#64CCC5');
    document.documentElement.style.setProperty('--btn-hover', '#EEEEEE');
}
function ShowEditor(panel) {
    panel.style.left = '0';
}
function HideEditor(panel) {
    panel.style.left = '-240px';
}
