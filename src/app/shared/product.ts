export interface IProduct {
	id: number,
	name: string,
	type: string,
	description: string,
	image: Array<string>,
	price: number,
	discountrate: number,
	starrating: number,
	sizes: Array<string>,
	makerlogo: string,
}