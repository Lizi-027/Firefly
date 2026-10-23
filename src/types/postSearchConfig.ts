// 文章内搜索配置类型
// Post search configuration types

/** 搜索触发方式：回车/按钮，或输入即搜 */
export type PostSearchTriggerMode = "enter" | "input";

/** 右侧位置进度条配置 */
export interface PostSearchProgressBarConfig {
	// 是否显示右侧位置进度条
	enable?: boolean;
	// 竖条长度，支持 px / vh / % 等 CSS 长度，默认 "60vh"
	length?: string;
	// 竖条宽度（px），默认 4
	width?: number;
	// 竖条相对文章卡片右边缘的水平偏移（px），正数向卡片内侧偏移、负数向卡片外侧偏移，默认 6
	offset?: number;
	// 竖条在视口中的垂直位置，默认 "50%"（配合 translateY(-50%) 居中）
	top?: string;
	// 竖条颜色
	barColor?: string;
	// 圆点直径（px），默认 10
	dotSize?: number;
	// 普通圆点颜色
	dotColor?: string;
	// 当前选中圆点颜色
	activeDotColor?: string;
	// 每多少 px 范围内的结果合并为一个圆点，默认 768
	bucketSize?: number;
	// 窄屏（<768px）是否隐藏竖条，默认 true
	hideOnMobile?: boolean;
}

/** 文章内搜索配置 */
export interface PostSearchConfig {
	// 功能总开关
	enable?: boolean;
	// 触发方式，默认 "enter"
	trigger?: PostSearchTriggerMode;
	// 命中后是否短暂高亮，默认 true
	highlight?: boolean;
	// 右侧位置进度条配置
	progressBar?: PostSearchProgressBarConfig;
}
