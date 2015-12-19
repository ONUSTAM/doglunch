function dispatcher (path, func) {
    dispatcher.path_func = dispatcher.path_func || []
    if (func) return dispatcher.path_func.push([path, func]);
    for(var i = 0, l = dispatcher.path_func.length; i < l; ++i) { // >
        var func = dispatcher.path_func[i];
        var match = path.match(func[0]);
        match && func[1](match);
    };
};
// root(index.html)
dispatcher(config.pagepath.front,function(){
    $(function(){
        //処理
        FrontController();
    });
});

dispatcher("^/hoge/$",function(){
    $(function(){
        //処理
    });
});
dispatcher(location.pathname);
