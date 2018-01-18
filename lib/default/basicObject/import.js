function imports(){
    var args = arguments;
    var head = document.getElementsByTagName('head')[0];
    for(var i=0; i<args.length; i++) {
        var script = document.createElement('script');
        script.setAttribute("type","text/javascript");
        script.setAttribute("src",args[i]);
        head.appendChild(script);
    }
}