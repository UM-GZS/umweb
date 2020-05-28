<template>
	<view class="body">
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>头像</view>
			<view class="u-f-ac" @tap="changeImg">
				<image :src="userpic" mode="aspectFill" lazy-load></image>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>昵称</view>
			<view class="u-f-ac">
				<input type="text" v-model="username" />
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>性别</view>
			<view class="u-f-ac" @tap="changeOne('sex')">
				<view>{{sex}}</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>生日</view>
			<picker mode="date" :value="age" :start="startDate" :end="endDate" @change="bindDateChange">
				<view class="u-f-ac">
					<view>{{age}}</view>
					<view class="icon iconfont icon-fabiaoanli-" style="margin-left: 20upx;color: #9B9B9B;"></view>
				</view>
			</picker>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>情感</view>
			<view class="u-f-ac" @tap="changeOne('qg')">
				<view>{{qg}}</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>职业</view>
			<view class="u-f-ac" @tap="changeOne('work')">
				<view>{{work}}</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<view class="user-set-info-list u-f-ac u-f-jcsb">
			<view>家乡</view>
			<view class="u-f-ac" @tap="showCity">
				<view>{{pickerText}}</view>
				<view class="icon iconfont icon-fabiaoanli-"></view>
			</view>
		</view>
		<button class="suerset-button" type="primary" @tap="submit">完成</button>
		<mpvue-city-picker ref="mpvueCityPicker" :pickerValueDefault="pickerValueDefault" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	let sex = ['不限', '男', '女'];
	let qg = ['秘密', '单身', '恋爱', '已婚'];
	let work = ['服务员', '教师', '学生', '个体户'];
	export default {
		data() {
			return {
				userpic: "../../static/image/user.jpg",
				username: "kolboy",
				age: "1998-01-10",
				sex: "不限",
				qg: "单身",
				work: "IT",
				pickerText: "广东省",
				pickerValueDefault: [0, 0, 0]
			}
		},
		onBackPress() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
				return true;
			}
		},
		onUnload() {
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel();
			}
		},
		components: {
			mpvueCityPicker
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			onConfirm(e) {
				this.pickerText = e.label;
			},
			showCity() {
				this.$refs.mpvueCityPicker.show()
			},
			bindDateChange(e) {
				this.age = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			changeOne(val) {
				let arr = [];
				switch (val) {
					case 'sex':
						arr = sex;
						break;
					case 'qg':
						arr = qg;
						break;
					case 'work':
						arr = work;
						break;
				}
				uni.showActionSheet({
					itemList: arr,
					success: res => {
						switch (val) {
							case 'sex':
								this.sex = arr[res.tapIndex];
								break;
							case 'qg':
								this.qg = arr[res.tapIndex];
								break;
							case 'work':
								this.work = arr[res.tapIndex];
								break;
						}
					}
				});
			},
			changeImg() {
				uni.chooseImage({
					count: 1,
					sizeType: ['compressed'],
					success: (res) => {
						this.userpic = res.tempFilePaths[0];
						console.log(this.userpic)
					}
				})
			},
			submit() {

			}
		}
	}
</script>

<style>
	.body {
		padding: 0upx 20upx;
	}

	.user-set-info-list {
		padding: 20upx;
		border-bottom: 1upx solid #F4F4F4;
	}

	.user-set-info-list>view:first-child {
		font-size: 30upx;
		font-weight: bold;
		color: #9B9B9B;
	}

	.user-set-info-list>view:last-child>view:last-child {
		color: #9B9B9B;
		margin-left: 20upx;
	}

	.user-set-info-list>view:last-child>image {
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
	}

	.user-set-info-list>view:last-child>input {
		text-align: right;
	}

	.suerset-button {
		width: 100%;
		margin: 20upx 0upx;
		background: #FFE933 !important;
		border: 0upx !important;
		color: #333333 !important;
	}
</style>
