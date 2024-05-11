import { MenuItemType } from '../enum/menu-item.enum';

export interface MenuItem {
	label: string;
	route: string;
	type: MenuItemType;
}
