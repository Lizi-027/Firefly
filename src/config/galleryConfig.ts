import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		// 支持jpg/png/webp/avif/gif格式
		// id: 相册唯一标识符（用于目录命名和URL路径），比如设置：id: "firefly-2026", 对应 public/gallery/firefly-2026/目录
		// cover: 手动指定封面图（可选，不填会把cover.*文件作为封面图，如果没有cover.*文件，则使用第一张图片作为封面图）
		// name: 相册名称
		// description: 相册描述
		// location: 相册拍摄地点
		// date: 相册日期，格式为 YYYY-MM-DD，用于排序和显示
		// tags: 相册标签，用于分类和过滤
		// password: 访问密码，设置后需要输入密码才能查看相册内容（可选）
		// passwordHint: 密码提示，设置后在输入密码错误时显示（可选，需配合password使用）
		// pinned: 设为 true 时在首页文章列表上方展示该相册（可选）
		// pinnedOrder: 首页置顶排序，数字越小越靠前（可选，默认按下方配置顺序）
		// 每添加一个数组项就相当于添加了一个相册，记得在 public/gallery/ 目录下创建对应的子目录并放入图片
		{
			id: "firefly-2026",
			name: "流萤-测试",
			description: "相册测试",
			location: "original",
			date: "2026-10-20",
			tags: ["测试"],
		},
		{
			id: "gallery of chun",
			name: "小春的相册",
			description: "只要是色色的东西，我统统会没收！",
			location: "ITE",
			date: "2026-10-20",
			tags: ["小春的相册"],
			pinned: true,
			password: "123456",
			passwordHint: "可以去up最新或者次新的视频评论区置顶找到密码哦🧐",
		},
		{
			id: "secretbase gallery of chun",
			name: "小春的秘密相册",
			description: "死刑！",
			location: "ITE",
			date: "2026-10-20",
			tags: ["小春的秘密相册"],
			password: "123456",
			passwordHint: "示例密码123456",
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,

	// 首页置顶相册区块配置
	homeSection: {
		// 是否在首页展示置顶相册，设为 false 可整体关闭
		enable: true,
		// 区块标题，不填则使用 i18n 的「相册」
		// title: "精选相册",
		// 最多展示的置顶相册数量，默认 3
		limit: 3,
	},
};
