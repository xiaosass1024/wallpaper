<template>
	<view class="homeLayout pageBg">
		<custom-nav-bar title="推荐"></custom-nav-bar>
		<view class="banner">
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="rgb(255,255,255)" circular>
				<swiper-item v-for="item in bannerList" :key="item._id">
					<image :src="item.picurl" mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="1000" circular>
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator :url="'/pages/notice/detail?id='+item._id">
						{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="forward" size="20"></uni-icons>
			</view>
		</view>
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar-filled" size="20" color="$brand-theme-color">
						<uni-dateformat :date="Date.now()" format="d号"></uni-dateformat>	
						</uni-icons>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in randomList" :key="item._id" @click="goPreview(item._id)">
						
						<image :src="item.smallPicurl" mode="aspectFill"></image>
					
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More+</navigator>
				</template>
			</common-title>
			<view class="content">
				<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {apiGetBanner, apiGetDayRandom, aipGetNotice,apiGetClassify} from "@/api/apis.js"
	const bannerList = ref([])
	const randomList = ref([])
	const noticeList = ref([])
	const classifyList = ref([])
	//轮播页面
	const getBanner = async ()=>{
		let res = await apiGetBanner()
		bannerList.value = res.data
		// console.log(res);
	/*let res = await	uni.request({
			url:"https://tea.qingnian8.com/api/bizhi/homeBanner",
			header:{
				"access-key":"yzz226"
			}
		})
		if(res.data.errCode===0){
			bannerList.value = res.data.data
		}
		// console.log(res);
		*/
	}
	
	const getDayRandom = async ()=>{
		let res = await apiGetDayRandom()
		randomList.value = res.data
	}
	
	//获取notice列表
	const getNotice = async ()=>{
		let res = await	aipGetNotice({select:true})
		console.log(res);
		noticeList.value = res.data		
	}
	
	const getClassify = async()=>{
		let res = await apiGetClassify({
			select:true
		});
		classifyList.value = res.data
		// console.log(res);
	}
	
	
	//跳转到预览页面
	const goPreview = (id)=>{
		uni.navigateTo({
			url:"/pages/preview/preview?id="+id
		})
	}
	
	getDayRandom();
	getBanner();
	getNotice();
	getClassify();
</script>

<style lang="scss" scoped>
.homeLayout{
	.banner{
		width:750rpx;
		padding:30rpx 0;
		swiper{
			width:750rpx; 
			height:340rpx;
			&-item{
				width:100%;
				height:100%;
				padding:0 30rpx;
				image{
					width:100%;
					height:100%;
					border-radius: 10rpx;
				}
			}
		}
	}
	.notice{
		width:690rpx;
		height:80rpx;
		line-height: 80rpx; 
		background:#f9f9f9;
		margin:0 auto;
		border-radius: 80rpx;
		display:flex;
		.left{
			width:140rpx;
			display:flex;
			align-items: center;
			justify-content: center;
			:deep(){
				.uni-icons{
					color:$brand-theme-color !important;
				}
			}
			
			.text{
				color: $brand-theme-color;
				font-weight: 600;
				font-size: 28rpx;
			}
		}
		.center{
			flex:1;
			swiper{
				height:100%;
				&-item{
					height:100%;
					font-size:30rpx;
					corlor:#666;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
			}
		}
		.right{
			width: 70rpx;
			display:flex;
			align-items: center;
			justify-content: center;
			:deep(){
				.uni-icons{
					color:$brand-theme-color !important;
				}
			}
			
		}
	}
	.select{
		padding-top: 50rpx;
		:deep(){
			.uni-icons{
				color:$brand-theme-color !important;
			}
		}
		
		.content{
			width: 720rpx;
			margin-left: 30rpx;
			margin-top: 30rpx;
			scroll-view{
				white-space: nowrap;
				.box{
					width:200rpx;
					height:430rpx;
					display: inline-block;
					margin-right: 15rpx;
					image{
						width: 100%;
						height:100%;
						border-radius: 10rpx;
					}
				}
				.box:last-child{margin-right:30rpx};
			}
		}
	}
	.theme{
		padding: 50rpx 0;
		.more{
			font-size: 32rpx;
			color:#888;
		}
		.content{
			margin-top: 30rpx;
			padding:0 30rpx;
			display:grid;
			gap:15rpx;
			grid-template-columns: repeat(3,1fr);
		}
	}
}
</style>
