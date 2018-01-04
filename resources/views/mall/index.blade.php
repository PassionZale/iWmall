<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>iMall</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no">
    <meta name="app-mobile-web-app-capable" content="yes">
    <meta id="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="Zhang Lei">
    <meta name="description" content="微信商城：iMall,基于Laravel5.2和vue.js">
    <meta name="keywords" content="微信商城,laravel5.2,vue.js,vuex,vue-router,vue-resource">
    <!-- Favicon -->
    <link rel="icon" href="{{asset('favicon.png')}}" mce_href="{{asset('favicon.png')}}" type="image/png">
    <link rel="shortcut icon" href="{{asset('favicon.ico')}}" mce_href="{{asset('favicon.ico')}}" type=”image/x-icon”>

    <!--[if lte IE 9]>
    <script src="//cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
    <![endif]-->

    <!-- Styles -->
    <link href="{{asset('css/normalize.css')}}" rel="stylesheet">
    <link href="{{asset('js/lib/mint-ui/mint-ui.css')}}" rel="stylesheet">
    <link href="{{asset('js/lib/swiper/swiper.min.css')}}" rel="stylesheet">
    <link href="{{asset('css/mall.css')}}" rel="stylesheet">
    
</head>
<body>
<!-- JavaScripts -->
<script src="{{ asset('js/lib/jquery/jquery-2.1.1.min.js') }}"></script>
<script src="{{ asset('js/lib/distpicker/distpicker.min.js') }}"></script>
<script src="{{ asset('js/lib/swiper/swiper.min.js') }}"></script>
<script src="{{ asset('js/mall/app.js') }}"></script>
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<!-- wx jssdk config -->
<script>
    <?php if($config){ ?>
        wx.config(<?php echo $config; ?>);
    <?php }?>
</script>
<!-- wx jssdk config end -->
</body>
</html>
