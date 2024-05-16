import { request } from "../utils/request"



export function apiGetBanner(){
	return request({
		url:"/homeBanner",
		})
	/*
	return uni.request({
		url:"https://tea.qingnian8.com/api/bizhi/homeBanner",
		header:{
			"access-key":"yzz226"
		}
	})
	*/
}

export function apiGetDayRandom(){
	return request({url:"/randomWall"})
	/*
	return uni.request({
		url:"https://tea.qingnian8.com/api/bizhi/randomWall",
		header:{
			"access-key":"yzz226"
		}
	})
	*/
}


export function aipGetNotice(data={}){
	return request({
		url:"/wallNewsList",
		data
		})
}

export function apiGetClassify(data={}){
	return request({
		url:"/classify",
		data
		})
}

export function apiGetClassList(data={}){
	return request({
		url:"/wallList",
		data
		})
}


export function apiGetSetupScore(data={}){
	return request({
		url:"/setupScore",
		data
		})
}