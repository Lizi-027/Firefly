import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/lizi27.jpg",

	// 名字
	name: "27号栗子",

	// 个人签名
	bio: "你好，是栗子哦",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "哔哩哔哩",
			icon: "mynaui:tv-solid",
			url: "https://space.bilibili.com/170199635?spm_id_from=333.1007.0.0",
			showName: true,
		},
		{
			name: "咸鱼",
			icon: "ion:fish",
			url: "https://m.tb.cn/h.jV8j2xY?tk=7GTxTwLufn8 MF937",
			showName: true,
		},
	],
};
