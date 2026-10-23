// 相册元信息（用户在配置文件中填写）
export type GalleryAlbum = {
	id: string; // URL slug + 目录名，如 "japan-2025"
	name: string; // 相册名称
	description?: string; // 相册描述
	date?: string; // 日期
	location?: string; // 拍摄地点
	tags?: string[]; // 标签（用于首页筛选）
	cover?: string; // 手动指定封面（可选，省略则自动取 cover.* 或第一张）
	password?: string; // 加密密码（非空时启用加密）
	passwordHint?: string; // 密码提示
	pinned?: boolean; // 是否在首页置顶展示
	pinnedOrder?: number; // 首页置顶排序，数字越小越靠前（可选，默认按配置顺序）
};

// 相册配置
export type GalleryConfig = {
	albums: GalleryAlbum[];
	columnWidth?: number; // 瀑布流最小列宽(px)，默认 240，浏览器根据容器宽度自动计算列数
	homeSection?: {
		enable?: boolean; // 是否在首页展示置顶相册区块，默认 true
		title?: string; // 区块标题（可选，默认使用 i18n 的「相册」）
		limit?: number; // 最多展示的置顶相册数量，默认 3
	};
};
