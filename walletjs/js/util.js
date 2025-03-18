let Ajax = {
    get: function (url, fn) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    },
     post:async function (url, data, success, error) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            debugger
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 304) {
                    success.call(this, xhr.responseText);
                } else {
                    error.call(this, xhr.responseText)
                }
            }
        };
        debugger
        xhr.send(data);
    }
}