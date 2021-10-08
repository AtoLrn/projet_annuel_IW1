<?php
session_start();

?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php
	//integer string boolean float null
	$firstname = "Yves";
	$firstname = 3;

	$age = 20;

	echo $age; //20
	$age++;
	echo $age; //21
	++$age;
	echo $age; //22
	echo $age++; //22
	echo $age; //23
	echo ++$age; //24
	echo $age; //24
	echo $age+1; //25
	echo $age; //24
	echo $age+=1; //25
	echo $age; //25
	echo $age*=2; //50
	echo $age=$age+1; //51

	$age = 20;
	echo "Dans 1 an, il aura ".($age+1); //

	if(condition){

	}else if(condition){

	}else{

	}

	$age = 20;

	if( $age > 18)
		echo "majeur";
	else {if ($age == 18) echo "tout juste majeur"; else echo "mineur"; } 


	$scope = "admin";

	switch ($scope) {
		case 'admin':
			echo "edit";
		
		case 'author':
			echo "create";

		default:
			echo "read";
			break;
	}


	//condition ternaires 

	if(empty($_POST["email"])){
		echo "Votre email ...";
	}else{
		echo $_POST["email"];
	}

	// instruction (condition)?vrai:faux;
	echo (empty($_POST["email"]))?"Votre email ...":$_POST["email"];

	//null coalescent
	echo $_POST["email"]??"Votre email...";


	if( || &&)


	$age = 20;

	while( $age<100 ){
		$age++;
		//$age = $age + 1;
	}	

	echo $age //100


	$age = 20;
	while( ++$age<100 ){
		$age++;
		//$age = $age + 1;
	}	

	echo $age //101



	$age = 20;
	do{
		echo $age++;

	}while($age<100);


	$age = 2;
	echo $age++ ; // 2
	echo $age; // 3
	$age = 2;
	echo ++$age ; // 3
	echo $age; // 3


	for($cpt = 0; $cpt<10 ; ++$cpt){
		echo $cpt;
	}


	foreach () {
		# code...
	}



	$ceciEstMaVariable

	isOdd(2);
	isOdd();



	function isOdd ( $arg=null ): ?int
	{
		return true;
	}



	if( true === 1){
		echo "OK";
	}



	$phrase = ";;test";

	$phrase = ltrim($phrase, ";");

	echo ;//test




	$firstname = "yves";


	function helloYou() 
	{
		global $firstname;
		echo $firstname; //$firstname is undefined
	}

	helloYou();







	$firstname = "yVEs   ";


	if (checkAndCleanFirstname($firstname)){
		...INSERT INTO ..... $firstname
	}else{
		echo "Erreur, le prenom doit faire plus de 2 caractères";
	}

	function checkAndCleanFirstname(&$firstname): bool
	{
		$firstname = trim($firstname);
		if(strlen($firstname)>2 || strlen($firstname)<100){
			
			$firstname = ucwords(strtolower($firstname));
			
			return true;
		}
		
		return false;
		
	}


	$var1 = 2;
	$var2 = 3;
	$var2 = &$var1;
	$var2 =4;
	echo $var1; //4




	$student = ["Quentin", 12, 4, 2];
	//Quentin a une moyenne de 6/20

	echo $student[0]." a une moyenne de ".(($student[1]+$student[2]+$student[3])/3)."/20";


	

	$student = [0=>"Pierre", 1=>"Michelle", 2=>12];
	//Prénom Nom a une moyenne de 12/20
	echo $student[0]." ".$student[1]." a une moyenne de ".$student[2]."/20";




	$student = [
					"lastname"=>"Pierre", 
					"firstname"=>"Michelle", 
					"average"=>12,
					"Fr"
				];
	//Prénom Nom a une moyenne de 12/20
	echo $student["firstname"]." ".$student["lastname"]." a une moyenne de ".$student["average"]."/20";


	$student = [
					"lastname"=>"Pierre", 
					"firstname"=>["Michelle", "Paulette"], 
					"average"=>12,
					"Fr"
				];


	//4, 5, 10, 6
	$array = [
				[],
				[
					[
						[],
						[
							[
								[
									[],
									[
										[
										]
									]
								]
							],
							[]
						]
					]
				]
			]; 


			$_POST
			$_GET


			$_REQUEST

			$_FILES


			$_SESSION
			$_COOKIE
			
			$_ENV
			$_SERVER


?>


<form method="GET" enctype="">
	<input type="email" name="email" value="<?php echo echo (empty($_POST["email"]))?"Votre email ...":$_POST["email"] ?>">

	<input type="file" name="">

</form>


</body>
</html>