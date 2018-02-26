<?php

namespace App\Http\Controllers\Mall;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use EasyWeChat\Foundation\Application;

class IndexController extends Controller
{
    public function oauth(){
        session('wechat.oauth_user');
        return redirect()->to('mall');
    }

    public function index()
    {
        $app = app('wechat.official_account');
        $config = $app->jssdk->buildConfig(array('onMenuShareQQ', 'onMenuShareWeibo'), $debug = false, $beta = false, $json = true);
        return view('mall.index')->with(['config'=>$config]);
    }
}
