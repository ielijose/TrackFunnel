<?php

class UserTableSeeder extends Seeder {

	public function run()
	{
		User::create([
			'full_name' => 'Eli José ',
			'email'     => 'ielijose@gmail.com',
			'password'  => '1234',
			'type'      => 'Client'
		]);
	
		User::create([
			'full_name' => 'Rolando Rodas',
			'email'     => 'admin@gmail.com',
			'password'  => '1234',
			'type'      => 'Admin'
		]);
		
		User::create([
		'full_name' => 'Eliete da Costa',
		'email'     => 'superuser@gmail.com',
		'password'  => '1234',
		'type'      => 'Superuser'
		]);
	}
}