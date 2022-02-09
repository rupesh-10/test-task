<?php

namespace Database\Seeders;

use App\Models\UserSubject;
use Illuminate\Database\Seeder;

class UserSubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        UserSubject::insert([
            [
                'user_id' => 1,
                'subject_id' => 2,
            ],
            [
                'user_id'=>2,
                'subject_id'=>2
            ]
        ]
         );
    }
}
