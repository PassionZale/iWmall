import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: require('./components/home')
    },
    {
        path: '/category',
        name: 'category',
        component: require('./components/category')
    }, 
    // {
    //     path: '/:hashid/commodity',
    //     name: 'commodity',
    //     component: require('./components/Commodity/CommodityDetail.vue')
    // }, {
    //     path: '/cart',
    //     name: 'cart',
    //     component: require('./components/Cart.vue')
    // }, {
    //     path: '/usercenter',
    //     name: 'usercenter',
    //     component: require('./components/UserCenter.vue')
    // }, {
    //     path: '/attr',
    //     name: 'attribute',
    //     component: require('./components/Attribute/Attribute.vue'),
    //     children: [
    //         {
    //             path: '/:hashid/topic',
    //             name: 'aTopic',
    //             component: require('./components/Attribute/Topic.vue')
    //         }, {
    //             path: '/:hashid/plate',
    //             name: 'aPlate',
    //             component: require('./components/Attribute/Plate.vue')
    //         }, {
    //             path: '/:hashid/category',
    //             name: 'aCategory',
    //             component: require('./components/Attribute/Category.vue')
    //         }
    //     ]
    // }, {
    //     path: '/address',
    //     name: 'address',
    //     component: require('./components/Address/AddressList.vue')
    // }, {
    //     path: '/add-address',
    //     name: 'add-address',
    //     component: require('./components/Address/AddressAdd.vue')
    // }, {
    //     path: '/:hashid/edit-address',
    //     name: 'edit-address',
    //     component: require('./components/Address/AddressEdit.vue')
    // }, {
    //     path: '/:hashid/choose-address',
    //     name: 'choose-address',
    //     component: require('./components/Address/AddressChoose.vue')
    // }, {
    //     path: '/ordersettle',
    //     name: 'order-settle',
    //     component: require('./components/Order/OrderSettle.vue')
    // }, {
    //     path: '/:type/orderlist',
    //     name: 'order-list',
    //     component: require('./components/Order/OrderList.vue')
    // }, {
    //     path:
    //         '/:hashid/orderdetail',
    //     name: 'order-detail',
    //     component: require('./components/Order/OrderDetail.vue')
    // }, {
    //     path:
    //         '/:hashid/orderpay',
    //     name: 'orderpay',
    //     component: require('./components/Order/OrderPay.vue')
    // }, {
    //     path:
    //         '/suggestion',
    //     name: "suggestion",
    //     component: require('./components/Suggestion/Suggestion.vue')
    // }
]

export const AppRouter = new VueRouter({ 
    base: '/',
    mode: 'hash',
    linkActiveClass: 'active',
    routes
});

