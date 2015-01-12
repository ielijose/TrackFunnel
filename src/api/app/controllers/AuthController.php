<?php

class AuthController extends BaseController {

	

	public function login()
	{
		$rules = array(
			'email'    => 'required|email',
			'password' => 'required' 
		);
		$messages = [
	        'email.required' => 'El correo es obligatorio.',
	        'password.required' => 'La contraseña es obligatoria.',
	    ];

		$validator = Validator::make(Input::all(), $rules, $messages);

		if ($validator->fails()) {
			return Response::json($validator->messages());;
		} else {
			$userdata = array(
				'email' 	=> Input::get('email'),
				'password' 	=> Input::get('password')
			);		

			if ($r = Auth::attempt($userdata)) {
				return ['user'=> Auth::user()];
			} else {
				return array(
					'error' 	=> true,
					'description' => 'User/Pass error.'
					);
			}
		}

	}
	

	public function logout()
	{
		Auth::logout();
	}

}