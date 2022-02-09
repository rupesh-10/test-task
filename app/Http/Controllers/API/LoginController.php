<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user();
            return response()->json([
              'status'   => true,
              'message'=>"User Logged in successfully",
              'userData' => ['name'=>$user->name,'email'=>$user->email],
            ]); 
          } else { 
            return response()->json([
              'status' => false,
              'message'   => 'Unauthorized Access'
            ]); 
          } 
      }
    }
?>