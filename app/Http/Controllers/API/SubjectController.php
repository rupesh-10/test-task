<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\UserSubject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
   public function getUserSubjects(){
       return UserSubject::with(['user','subject'])->get();
   }
}
