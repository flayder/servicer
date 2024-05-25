export interface Navigation {
	path: string
	name: string
	img?: string
}

export interface Select {
	name: string
}

export interface Breadcrumbs {
	label?: string
	route: string
	icon?: string
}

export interface BlackList {
	phone: "",
	telegram: "",
	event: "",
	event_at: "",
	event_description: ""
}