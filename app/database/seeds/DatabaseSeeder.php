<?php

class DatabaseSeeder extends Seeder {

	public function run()
	{
        Eloquent::unguard();

        $this->call('UserTableSeeder');
        $this->call('PhotoTableSeeder');
	}

}

class UserTableSeeder extends Seeder {

    public function run()
    {
        DB::table('users')->delete();

        User::create(array(
            'name' => 'admin',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin')
        ));
    }

}

class PhotoTableSeeder extends Seeder {

    public function run()
    {
        DB::table('photos')->delete();

        Photo::create(array(
            'name' => 'google',
            'user_id' => 1,
            'category' => 'Sacos de Papel',
            'url' => '/images/google.png',
            'product_month' => 0,
            'slideshow' => 0
        ));

        Photo::create(array(
            'name' => 'colgate',
            'user_id' => 1,
            'category' => 'Sacos de Plastico',
            'url' => '/images/colgate.png',
            'product_month' => 1,
            'slideshow' => 0
        ));
        Photo::create(array(
            'name' => 'wallpaper1',
            'user_id' => 1,
            'category' => 'Slideshow',
            'url' => '/images/wallpaper1.png',
            'product_month' => 1,
            'slideshow' => 0
        ));
    }

}
