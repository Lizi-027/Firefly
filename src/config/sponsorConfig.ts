import type { SponsorConfig } from "../types/sponsorConfig";

export const sponsorConfig: SponsorConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "真的吗？真的吗！是要投喂或者帮助栗子吗！",
	

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "感谢小伙伴的支持哦",

	// 打赏用途说明
	usage:
		"您的打赏将用于加快网速和功能开发，帮助栗子继续下去。",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			// 收款码图片路径（需要放在 public 目录下）
			qrCode: "/assets/images/sponsor/alipay.png",
			link: "",
			description: "呜呜~太感谢了",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "/assets/images/sponsor/wechat.png",
			link: "",
			description: "感谢小伙伴的支持",
			enabled: true,
		},
		{
			name: "ICE",
			icon: "simple-icons:kofi",
			qrCode: "",
			link: "  ",
			description: "必要时栗子会去喝杯柠檬水",
			enabled: true,
		},
		{
			name: "Only",
			icon: "simple-icons:afdian",
			qrCode: "",
			link: "  ",
			description: "栗子每隔一段时间会在B站抽小玩具哦",
			enabled: true,
		},
	],

	// 打赏者列表（可选）
	sponsors: [
		// 示例：已实名打赏者
		{
			name: "user3546629409867796",
			avatar:
				"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
			amount: "¥6",
			date: "2026-10-16",
		},

		// 示例：匿名打赏者
		{
			name: "匿名用户",
			// avatar: "",
			amount: "¥6",
			date: "2026-10-01",
		},
	],
};
