<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');


	public static function boot()
	{
		parent::boot();

		static::creating(function($user)
		{   

			if (Hash::needsRehash($user->password))
			{
				$user->password = \Hash::make($user->password);
			}

		});

		static::deleting(function($user)
		{   
			if(File::exists( public_path() . $user->profile_picture )){
				Croppa::delete($user->profile_picture);               
			}            
		});

		static::updating(function($user)
		{
			if (Hash::needsRehash($user->password))
			{
				$user->password = \Hash::make($user->password);
			}
		});

	}


}
