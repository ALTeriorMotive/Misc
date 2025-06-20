// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function newColor() {
    document.getElementById('hello_world').style.color = 'blue';
}

function oldColor() {
    document.getElementById('hello_world').style.color = 'darkolivegreen';
}

function videoEnlarge() {
    document.getElementById('video').style.width = '60%';
    document.getElementById('video').style.margin = '0 20%';
}

function videoShrink() {
    document.getElementById('video').style.width = '30%';
    document.getElementById('video').style.margin = '0 35%';
}