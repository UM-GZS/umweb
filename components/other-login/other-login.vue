<template>
	<view class="other-login u-f-ac">
		<block v-for="(item,index) in providerList" :key="index">
			<view class="u-f-ajc u-f1">
				<view class="icon iconfont u-f-ajc" :class="['icon-'+item.icon,'other-login-'+item.colorNum]" @tap="tologin(item)"></view>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				providerList: []
			};
		},
		created() {
			this.otherLogin();
		},
		methods: {
			tologin(provider) {
				uni.login({
					provider: provider.id,
					// #ifdef MP-ALIPAY
					scopes: 'auth_user', //支付宝小程序需设置授权类型
					// #endif
					success: (res) => {
						console.log('login success:', res);
						// 更新保存在 store 中的登录状态
						this.login(provider.id);
					},
					fail: (err) => {
						console.log('login fail:', err);
					}
				});
			},
			otherLogin() {
				uni.getProvider({
					service: 'oauth',
					success: (result) => {
						console.log(result)
						this.providerList = result.provider.map((value) => {
							let providerName = '';
							let icon = '';
							let colorNum = '';
							switch (value) {
								case 'weixin':
									providerName = '微信登录'
									icon = 'weixin'
									colorNum = '01'
									break;
								case 'qq':
									providerName = 'QQ登录'
									icon = 'qq'
									colorNum = '02'
									break;
								case 'sinaweibo':
									providerName = '新浪微博登录'
									icon = 'weibo'
									colorNum = '03'
									break;
								case 'xiaomi':
									providerName = '小米登陆'
									icon = 'xiaomi'
									colorNum = '04'
									break;
							}
							return {
								name: providerName,
								id: value,
								icon: icon,
								colorNum: colorNum
							}
						});
						console.log(this.providerList)
					},
					fail: (error) => {
						console.log('获取登录通道失败', error);
					}
				});

			}
		}
	}
</script>

<style scoped>
	.other-login {
		padding: 20upx 80upx;
	}

	.other-login>view>view {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		font-size: 35upx;
		color: #FFFFFF;
	}

	.other-login-01 {
		background: #2CAEFC;
	}

	.other-login-02 {
		background: #2BD19B;
	}

	.other-login-03 {
		background: #FC7729;
	}
	.other-login-04 {
		background: #555555;
	}
</style>
