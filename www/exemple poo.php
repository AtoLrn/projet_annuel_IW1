<?php
/*

	Plan maison -> Class House (Pascal Case)
	-> 4 murs
	-> 1 porte
	-> 1 toit
	-> 1 fenetre
	-> 1 fondation

*/

class House {


	//attributs ou propriete
	public $wall = 4;
	public $door = 1;
	public $roof = 1;
	public $window = 1;
	public $fundation = 1;


	//Une fonction dans une class c'est ce que l'on appel 
	//une méthode : method
	public function addRoom(): void
	{
		//$this correspond à l'objet courant, dans notre cas $myHouse
		$this->wall += 3;
		$this->roof++;
		$this->door++;
		$this->window++;
		$this->fundation++;
	}


}

//Création d'une maison basé sur le plan
//Création d'un objet basé sur la class House
//Instance de la class House


$myHouse = new House();
$myHouse->addRoom();
$myHouse->addRoom();


echo "<pre>";
//var_dump($myHouse);
print_r($myHouse);











