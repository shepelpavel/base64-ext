window.onload = function() {
    var code_button = document.getElementById('js-code');
    var decode_button = document.getElementById('js-decode');
    code_button.onclick = function() {
        var text_1 = document.getElementById('text_1');
        var text_2 = document.getElementById('text_2');
        var code = btoa(text_1.value);
        text_2.value = code;
    };
    decode_button.onclick = function() {
        var text_1 = document.getElementById('text_1');
        var text_2 = document.getElementById('text_2');
        var decode = atob(text_1.value);
        text_2.value = decode;
    };
 };
