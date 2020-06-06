
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/news/news","pages/paper/paper","pages/home/home","components/index-list/index-list","components/swiper-header-box/swiper-header-box","components/load-more/load-more","components/no-thing/no-thing","pages/search/search","pages/public/public","pages/topicNav/topicNav","pages/topicDetail/topicDetail","pages/userList/userList","pages/userChat/userChat","pages/detail/detail","pages/userSet/userSet","pages/restpassword/restpassword","pages/restemail/restemail","pages/restinfo/restinfo","pages/resthelp/resthelp","pages/restabout/restabout","pages/login/login","pages/userSpace/userSpace"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"糗事百科","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#ADADAD","selectedColor":"#FFDF34","borderStyle":"black","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index_s.png","text":"糗事"},{"pagePath":"pages/news/news","iconPath":"static/tabbar/news.png","selectedIconPath":"static/tabbar/news_s.png","text":"动态"},{"pagePath":"pages/paper/paper","iconPath":"static/tabbar/paper.png","selectedIconPath":"static/tabbar/paper_s.png","text":"小纸条"},{"pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/home_s.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"umweb","compilerVersion":"2.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"scrollIndicator":"none","bounce":"none","titleNView":{"searchInput":{"align":"center","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC","disabled":true},"buttons":[{"color":"#FFDF34","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/ico.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/ico.ttf","text":""}]}}},{"path":"/pages/news/news","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false,"scrollIndicator":"none","bounce":"none"}},{"path":"/pages/paper/paper","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"小纸条","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/ico.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/ico.ttf","text":""}]}}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/components/index-list/index-list","meta":{},"window":{}},{"path":"/components/swiper-header-box/swiper-header-box","meta":{},"window":{}},{"path":"/components/load-more/load-more","meta":{},"window":{}},{"path":"/components/no-thing/no-thing","meta":{},"window":{}},{"path":"/pages/search/search","meta":{},"window":{"enablePullDownRefresh":true,"scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC"},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/public/public","meta":{},"window":{"titleNView":false}},{"path":"/pages/topicNav/topicNav","meta":{},"window":{"navigationBarTitleText":"话题分类","bounce":"none"}},{"path":"/pages/topicDetail/topicDetail","meta":{},"window":{"enablePullDownRefresh":true,"scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/userList/userList","meta":{},"window":{"animationType":"slide-in-left","scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":false,"searchInput":{"align":"left","backgroundColor":"#F7F7F7","borderRadius":"4px","placeholder":"搜索糗事","placeholderColor":"#CCCCCC"},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/userChat/userChat","meta":{},"window":{"navigationBarTitleText":"聊天页","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/ico.ttf","text":""}]}}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"详情页","scrollIndicator":"none","bounce":"none","titleNView":{"buttons":[{"type":"menu"}]}}},{"path":"/pages/userSet/userSet","meta":{},"window":{"navigationBarTitleText":"设置"}},{"path":"/pages/restpassword/restpassword","meta":{},"window":{"navigationBarTitleText":"修改密码","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/restemail/restemail","meta":{},"window":{"navigationBarTitleText":"修改邮箱","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/restinfo/restinfo","meta":{},"window":{"navigationBarTitleText":"修改资料","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/resthelp/resthelp","meta":{},"window":{"navigationBarTitleText":"意见反馈","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/restabout/restabout","meta":{},"window":{"navigationBarTitleText":"关于我们","scrollIndicator":"none","bounce":"none"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarBackgroundColor":"#FFE933","navigationBarTitleText":false,"scrollIndicator":"none","bounce":"none","titleNView":{"autoBackButton":"false","buttons":[{"type":"close","float":"left"}]}}},{"path":"/pages/userSpace/userSpace","meta":{},"window":{"navigationBarTitleText":"个人空间","scrollIndicator":"none","bounce":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
