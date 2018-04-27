cc.Class({
    extends: cc.Component,

    onLoad() {
        clientEvent.init();
        dataFunc.loadConfigs();

        uiFunc.openUI("uiGameStartPanel", function(panel) {
            panel.getComponent("uiGameStartPanel").init();
        }.bind(this));
    },

    networkExample: function() {
        nano.init({
            host: "127.0.0.1",
            port: 3250,
            path: '/nano',
            reconnect: true
        }, function() {
            console.log("connect success by chenhao");
            nano.request("room.join", {}, function(data) {
                console.log(data);

                nano.on('onMessage', onMessage);
                nano.on("onMembers", onMembers);
                nano.on("onNewUser", onNewUser);
            });
        });

        function onMembers(data) {
            console.log("onMembers");
            console.log(data);
        };

        function onMessage(data) {
            console.log("onMessage");
            console.log(data);
        };

        function onNewUser(data) {
            console.log(("On New User"));
            console.log(data);
        };
    },
    cb (param) {
        console.log("这里是测试cb")
        console.log(param);
    }
});
