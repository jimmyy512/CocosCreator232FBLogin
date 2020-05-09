const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello224';

    start() {
        // init logic
        console.log(this.text);
        this.label.string = "start";

        //fb登入初始化
        sdkbox.PluginFacebook.init();

        if (cc.sys.isNative) {
            if (sdkbox.PluginFacebook.isLoggedIn())
                sdkbox.PluginFacebook.logout();
            sdkbox.PluginFacebook.login()
            sdkbox.PluginFacebook.setListener({
                onLogin: (isLogin, msg) => {
                },
                onAPI: (tag, data) => { },
                onSharedSuccess: function (data) { },
                onSharedFailed: function (data) { },
                onSharedCancel: function () { },
                onPermission: function (isLogin, msg) { },
                onGetUserInfo: (
                    (userInfo) => {
                        this.label.string = sdkbox.PluginFacebook.getUserID()
                    }
                )
            });
        }
    }
}
