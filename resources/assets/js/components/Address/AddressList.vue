<template>
    <div id="uc-address-container">
        <div class="uc-address-part">
            <mt-cell title="新增地址" v-link="{name:'add-address'}" class="add-address-btn">
                <img src="/images/common/add.png" width="24" height="24">
            </mt-cell>
        </div>
        <div
            class="uc-address-part"
            v-for="(address, index) in addresses"
            v-link="{name:'edit-address',params:{'hashid':address.id}}"
            :class="address.defaulted == 1 ? 'defaulted-address' : '' "
            :key="index"
        >
            <mt-cell
                    :title="address.name"
                    :label="address.defaulted == 1 ? '默认地址' : '' ">
                <p style="font-size:14px;">{{address.province}}{{address.city}}{{address.district}}{{address.address}}</p>
            </mt-cell>
        </div>
    </div>
</template>

<script>
    import { Cell } from 'mint-ui';
    import { Indicator } from 'mint-ui';
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                addresses:''
            }
        },
        components:{
            Cell
        },
        created(){
            this.fetchAddress();
        },
        methods:{
            fetchAddress:function(){
                let vm = this;
                Indicator.open();
                vm.$http.get('/api/address').then(function(response){
                    if(response.data.code == -1){
                        Indicator.close();
                        Toast({
                          message: response.data.code
                        });
                    }else{
                        vm.$set('addresses',response.data.message);
                        vm.$nextTick(function(){
                            Indicator.close();
                        });
                    }
                });
            }
        }
    }
</script>
