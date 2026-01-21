/**
 * Minimal XMLHttpRequest-based fetch replacement.
 * Usage: xhrFetch(url, { method, headers, body }) -> Promise resolving to an object
 * with `ok`, `status`, `statusText`, `text()` and `json()` like fetch.
 */
(function(global){
    function xhrFetch(url, options){
        options = options || {};
        return new Promise(function(resolve, reject){
            try{
                var xhr = new XMLHttpRequest();
                var method = options.method || 'GET';
                xhr.open(method, url, true);
                if(options.headers){
                    for(var k in options.headers){
                        if(Object.prototype.hasOwnProperty.call(options.headers,k))
                            xhr.setRequestHeader(k, options.headers[k]);
                    }
                }
                xhr.onreadystatechange = function(){
                    if(xhr.readyState !== 4) return;
                    var res = {
                        ok: (xhr.status >= 200 && xhr.status < 300),
                        status: xhr.status,
                        statusText: xhr.statusText,
                        text: function(){ return Promise.resolve(xhr.responseText); },
                        json: function(){ try{ return Promise.resolve(JSON.parse(xhr.responseText||'{}')); }catch(e){ return Promise.reject(e); } }
                    };
                    resolve(res);
                };
                xhr.onerror = function(){ reject(new TypeError('Network request failed')); };
                if(options.timeout) xhr.timeout = options.timeout;
                if(options.body){
                    var body = options.body;
                    if(typeof body === 'object' && !(body instanceof FormData)){
                        xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
                        body = JSON.stringify(body);
                    }
                    xhr.send(body);
                } else {
                    xhr.send();
                }
            }catch(err){ reject(err); }
        });
    }
    global.xhrFetch = xhrFetch;
})(window);
