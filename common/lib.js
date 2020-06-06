const NetWork = {
	isConnect:false,
	On() {
		uni.getNetworkType({
			success:(res)=> {
				if(res.networkType !== 'none') {
					this.isConnect = true;
					console.log('网络已连接')
					return;
				}
				uni.showToast({
					title: '请先连接网络',
					icon: 'none'
				})
			}
		})
		uni.onNetworkStatusChange((res)=>{
			this.isConnect = res.isConnected;
			if(!res.isConnected) {
				uni.showToast({
					title: '目前处于断网状态',
					icon: 'none'
				})
			}
		})
	}
}
const Updata = function() {
	// #ifdef APP-PLUS  
	plus.runtime.getProperty(plus.runtime.appid, function(widgetInfo) {  
	    uni.request({  
	        url: 'http://www.example.com/update/',  
	        data: {  
	            version: widgetInfo.version,  
	            name: widgetInfo.name  
	        },  
	        success: (result) => {  
	            var data = result.data;  
	            if (data.update && data.wgtUrl) {  
	                uni.downloadFile({  
	                    url: data.wgtUrl,  
	                    success: (downloadResult) => {  
	                        if (downloadResult.statusCode === 200) {  
	                            plus.runtime.install(downloadResult.tempFilePath, {  
	                                force: false  
	                            }, function() {  
	                                console.log('install success...');  
	                                plus.runtime.restart();  
	                            }, function(e) {  
	                                console.error('install fail...');  
	                            });  
	                        }  
	                    }  
	                });  
	            }  
	        }  
	    });  
	});  
	// #endif
}
import config from './config.js'
export default {
	Updata,
	NetWork
}