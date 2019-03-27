var stack = [];
function push(){


        var value = document.getElementById('txtValue').value;
        stack.push(value);
        document.getElementById('pResult').innerHTML = stack;

}

function pop(){

        var value = document.getElementById('txtValue').value;
        stack.pop();
        document.getElementById('pResult').innerHTML = stack;

}

function shift(){

        var value = document.getElementById('txtValue').value;
        stack.shift(value);
        document.getElementById('pResult').innerHTML = stack;

}
function unshift(){

        var value = document.getElementById('txtValue').value;
        stack.unshift(value);
        document.getElementById('pResult').innerHTML = stack;

}