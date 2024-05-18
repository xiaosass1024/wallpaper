<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight() + 'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px'}">
				<view class="title">{{title}}</view>
				<navigator url="/pages/search/search" class="search">
					<uni-icons class="icon" type="search" size="18" color="#888"></uni-icons>
					<text class="text">搜索</text>
				</navigator>
			</view>
		</view>
		<view class="fill" :style="{height:getNavBarHeight()+'px'}">
			
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue';
	import {getStatusBarHeight, getTitleBarHeight, getNavBarHeight} from "@/utils/system.js"
	
	// let SYSTEM_INFO = uni.getSystemInfoSync();
	// let statusBarHeight = SYSTEM_INFO.statusBarHeight
	// let {top, height} = uni.getMenuButtonBoundingClientRect();
	// let titleBarHeight = height + (top - statusBarHeight)*2
	// console.log(titleBarHeight);
	defineProps({
		title:{
			type:String,
			default:"壁纸"
		}
	})
</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		linear-gradient(to bottom, rgba(0,0,0,0), #fff 400rpx ),
		linear-gradient(to right, #A6B3FF 20% ,#88D8B0);
		.statusBar{}
		.titleBar{
			display: flex;
			align-items: center;
			padding:0 30rpx;
			
			height:100rpx;
			.title{
				font-size: 22px;
				font-weight: 700;
				color: #000;
			}
			.search{
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background:rgba(255,255,255,0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color:#999;
				font-size: 28rpx;
				display: flex;
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
				}
			}
		}
	}
	.fill{
		
	}
}
</style>