let b = document.getElementById("test");
b.onclick = (e) => {
    if (parent) {
        var seconds = e.target.getAttribute('data-seconds');
        seconds = parseInt(seconds, 10);
        var data = {
            message: 'seek',
            seconds: seconds
        };
        parent.postMessage(data, '*');
    }
};