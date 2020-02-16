<template lang="pug">
    .home
        .home__header
            .loaction
                svg.loaction__front-logo(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31")
                    path(fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z")
                span 腾达大厦
                svg.loaction__after-logo(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" )
                    path(fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z")
            .search
                svg.search__logo(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16")
                    path(fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z")
                .search__input  搜索饿了么商家、商品名称
        .home__navigate
            .navigator(v-for="(item, index) in homeList" :key="index")
                img.navigator__logo(:src="item.cover")
                .navigator__name {{item.name}}
        .home__products-list
            .product(v-for="(item, index) in productsList" ::key="index")
                img.product__logo(:src="item.cover")
                .description
                    .description__name {{item.name}}
                    .description__sale
                        .description__sale__rating {{item.rating}}
                        .description__sale__send 月售{{item.sendcost}}单
                    .description__price ￥20起送/配送费约￥5
                .distribution
                    .distribution__point 排序
                    .distribution__company 蜂鸟专送
                    .distribution__dis-time {{item.distance}}km | {{item.order_lead_time}}
        section.star_container
            svg.grey_fill(v-for="num in 5" :key="num")
                use(xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star")

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
const homeVuexConfig = namespace('homeVuexConfig')
@Component
export default class Home extends Vue {
    private searchVal:string = ''
    @homeVuexConfig.Action('getHomeData') getHomeData!: Function
    @homeVuexConfig.State('homeList') homeList!: []
    @homeVuexConfig.Action('getProductsData') getProductsData!: Function
    @homeVuexConfig.State('productsList') productsList!: []
    private mounted () {
        this.getHomeData()
        this.getProductsData()
    }
}
</script>
<style scoped lang="scss">
    .home{
        width: 100%;
        height: 100%;
        overflow: hidden;
        &__header{
            height: 200px;
            background-image: -webkit-gradient(linear,left top,right top,from(#0af),to(#0085ff));
            .loaction{
                padding: 20px 28px 0;
                height: 69px;
                display: flex;
                align-items: center;
                font-weight: 700;
                font-size: 34px;
                color: #ffffff;
                &__front-logo{
                    width: 26px;
                    height: 31px;
                }
                &__after-logo{
                    width: 14px;
                    height: 8px;
                }
                span{
                    margin: 0 10px;
                }
            }
            .search{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 694px;
                height: 72px;
                margin: 15px auto;
                background: #ffffff;
                border-radius: 2px;
                color: #999;
                font-size: 28px;
                &__logo{
                    width: 32px;
                    height: 32px;
                    margin-right: 10px;
                }
            }
        }
        &__navigate{
            display: flex;
            flex-wrap: wrap;
            .navigator{
                margin-top: 22px;
                width: 150px;
                height: 128px;
                &__logo{
                    width: 90px;
                    height: 90px;
                }
                &__name{
                    margin-top: 10px;
                    font-size: 24px;
                    color: #666;
                }
            }
        }
        &__products-list{
            .product{
                display: flex;
                padding: 36px 20px;
                align-items: center;
                border-bottom: 1px solid #f1f1f1;
               &__logo{
                   width: 140px;
                   height:140px;
                   margin-right: 20px;
               }
               .description{
                   text-align: left;
                   &__name{
                       font-size: 32px;
                       font-weight: bold;
                       color: #000;
                   }
                   &__sale{
                       margin-top: 26px;
                       display: flex;
                       font-size: 20px;
                       color: #333;
                   }
                   &__price{
                       margin-top: 26px;
                        font-size: 24px;
                        color: #666;
                   }
               }
               .distribution{
                   flex:1;
                   text-align: right;
                   &__point{
                       font-size: 24px;
                       color: #999;
                   }
                   &__company{
                       margin-top: 26px;
                       display:inline-block;
                       border: 1px solid #0097ff;
                       border-radius: 4px;
                       padding: 0 6px;
                       color: #ffffff;
                       font-size: 20px;
                       background-image:  linear-gradient(45deg,#0085ff,#0af);
                   }
                   &__dis-time {
                       margin-top: 26px;
                       font-size: 24px;
                       color: #333;
                   }

               }
            }
        }
        .grey_fill{
            fill: #d1d1d1;
        }
        .orange_fill{
            fill: #ff9a0d;
        }
    }
</style>>
