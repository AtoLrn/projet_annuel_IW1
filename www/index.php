<?php

class User {

	private $id=null;
	private $firstname;
	private $lastname;
	private $email;
	private $pwd;
	private $createdAt;
	private $updatedAt = null;


	//Appelé à l'instanciation de notre class, à la création d'un objet
	public function __construct($email, $pwd)
	{
		$this->setEmail($email);
		$this->setPwd($pwd);
	}


	//SETTERS
	public function setFirstname( string $firstname ): void
	{
		$firstname = trim($firstname);
		$firstname = strtolower($firstname);
		$firstname = ucwords($firstname);
		$this->firstname = $firstname;
	}
	public function setLastname( string $lastname ): void
	{
		$lastname = trim($lastname);
		$lastname = strtoupper($lastname);
		$this->lastname = $lastname;
	}
	public function setEmail( string $email ): void
	{
		$email = trim($email);
		$email = strtolower($email);
		$this->email = $email;
	}

	public function setPwd( string $pwd) : void
	{
		$pwd = password_hash($pwd, PASSWORD_DEFAULT);
		$this->pwd = $pwd;
	}

	public function setCreatedAt(): void
	{
		$this->createdAt = time();
	}


	public function setUpdatedAt(): void
	{
		$this->updatedAt = time();
	}


	//Getters

	public function getFirstname(): ?string
	{
		return $this->firstname;
	}
	public function getLastname(): ?string
	{
		return $this->lastname;
	}
	public function getEmail(): ?string
	{
		return $this->email;
	}
	public function getPwd(): ?string
	{
		return $this->pwd;
	}
	public function getCreatedAt(): ?int
	{
		return $this->createdAt;
	}
	public function getUpdatedAt(): ?int
	{
		return $this->updatedAt;
	}

}

$user = new User("y.skrzYpczyk@gmail.com ", "Test1234");
/*
$user->firstname = "   yvES ";
$user->lastname = "SkrzYPCzyk";
$user->email = "y.skrzypczyk@gmail.com";
$user->pwd = "Test1234";
// Time -> timestamp -> nb de secondes depuis le 1er jan 1970 -> creation de UNIX
$user->createdAt = time();
*/

$user->setFirstname("   yvES ");
$user->setLastname("SkrzYPCzyk");
$user->setEmail("y.skrzYpczyk@gmail.com ");
//$user->setPwd("Test1234");
$user->setCreatedAt();

//Bonjour Yves SKRZYPCZYK
echo "Bonjour ".$user->getFirstname(). " " . $user->getLastname();


echo "<pre>";
print_r($user);































