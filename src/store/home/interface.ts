export interface HomeContent {
    name: string,
    cover: string,
    desc: string,
    link: string,
    createdAt: string
}
export interface ShopContent{
    name: string,
    cover: string,
    address: string
}
export interface State {
    homeList: Array<HomeContent>,
    productsList: Array<ShopContent>
}
