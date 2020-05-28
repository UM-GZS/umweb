<template>
	<view class="body">
		<uni-collapse>
			<block v-for="(item,index) in list" :key="index">
				<uni-collapse-item :title="item.title" :show-animation="true">
					<text class="content">{{item.content}}</text>
				</uni-collapse-item>
			</block>
		</uni-collapse>
		<button class="suerset-button" type="primary">意见反馈</button>
	</view>
</template>

<script>
	import uniCollapse from '../../components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '../../components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		data() {
			return {
				list: [{
						title: "客服什么时候上线？",
						content: "3243"
					},
					{
						title: "忘记账号/昵称/密码怎么办？",
						content: "dsfdsf"
					},
					{
						title: "怎么搜索/查找/关注/取消用户？",
						content: "565465"
					}
				]
			}
		},
		methods: {

		},
		components: {
			uniCollapse,
			uniCollapseItem
		}
	}
</script>

<style>
	.body {
		padding: 0upx 20upx;
	}

	.suerset-button {
		width: 100%;
		margin: 20upx 0upx;
		background: #FFE933 !important;
		border: 0upx !important;
		color: #333333 !important;
	}

	.content {
		padding: 15px;
		font-size: 14px;
		line-height: 20px;
		background-color: #f9f9f9;
		color: #666;
	}
</style>
