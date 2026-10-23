import type { PostSearchConfig } from "../types/postSearchConfig";

// ============================================================================
// 文章内搜索配置
// Post Search Configuration
// ============================================================================

export const postSearchConfig: PostSearchConfig = {
	// 功能总开关
	enable: true,

	// 触发方式："enter" 回车或点击按钮搜索；"input" 输入即搜索
	trigger: "enter",

	// 命中后是否短暂高亮匹配块
	highlight: true,

	// 右侧位置进度条（仅在搜索到结果后出现）
	progressBar: {
		enable: true,
		// 竖条长度，可用 px / vh / %
		length: "60vh",
		// 竖条宽度（px）
		width: 4,
		// 距文章卡片右边缘的偏移（px），正数向卡片内侧偏移，负数向卡片外侧偏移
		offset: 7,
		// 竖条在视口中的垂直位置
		top: "50%",
		// 竖条颜色
		barColor: "rgba(128, 128, 128, 0.35)",
		// 圆点直径（px）
		dotSize: 10,
		// 普通圆点颜色
		dotColor: "rgba(107, 114, 128, 0.9)",
		// 当前圆点颜色
		activeDotColor: "var(--primary)",
		// 每多少 px 内的结果合并为一个圆点
		bucketSize: 768,
		// 窄屏隐藏竖条
		hideOnMobile: false,
	},
};
