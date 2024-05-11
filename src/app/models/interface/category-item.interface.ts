import { CategoryItemType } from '../enum/category-item.enum';

export interface CategoryItem {
	label: string;
	route: string;
	type: CategoryItemType;
}
