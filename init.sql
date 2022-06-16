CREATE TABLE `esgi_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(998) NOT NULL,
  `status` enum('admin','user', 'chief') NOT NULL DEFAULT 'user',
  `isVerified` BOOLEAN NOT NULL DEFAULT FALSE,
  `password` varchar(255) NOT NULL,
  `mailToken` varchar(255) NOT NULL,
  `profilePicture` varchar(2048) DEFAULT NULL,

  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `expiration` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_category` (
  `id`  int(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL ,
  PRIMARY KEY (`id`)
);

INSERT INTO esgi_category (name)  VALUES('antouane');


CREATE TABLE `esgi_ingredient` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `path` varchar(2048) NOT NULL,
   `status` enum('inDemand','enabled','refused','disabled') NOT NULL,
   `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `esgi_ingredient`
    ADD PRIMARY KEY (`id`),
    ADD KEY `fk_ingredient_user` (`userId`);

ALTER TABLE `esgi_ingredient`
    ADD CONSTRAINT `fk_ingredient_user` FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`);

CREATE TABLE `esgi_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `categoryId` INT(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`categoryId`) REFERENCES `esgi_category` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `articleId` INT(11) NOT NULL,
  `content` TEXT NOT NULL,
  `status` enum('inDemand','approved','refused') NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`articleId`) REFERENCES `esgi_article` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_star` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `articleId` INT(11) NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`articleId`) REFERENCES `esgi_article` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_ingredient_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredientId` int(11) NOT NULL,
  `articleId` INT(11) NOT NULL,
  `quantity` VARCHAR(255) NOT NULL,
  FOREIGN KEY (`ingredientId`) REFERENCES `esgi_ingredient` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`articleId`) REFERENCES `esgi_article` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` INT(11) NOT NULL,
  `path` VARCHAR(2048) NOT NULL,
  `main` BOOLEAN DEFAULT FALSE,
  FOREIGN KEY (`articleId`) REFERENCES `esgi_article` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_subscription` (
  `idSubscribtion` INT(11) NOT NULL,
  `idTargetSubscribtion` INT(11) NOT NULL,
  FOREIGN KEY (`idSubscribtion`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  FOREIGN KEY (`idTargetSubscribtion`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`idSubscribtion`, `idTargetSubscribtion`)
);

CREATE TABLE `esgi_page` (
  `id` INT(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` VARCHAR(2048) NOT NULL,
  `content` TEXT NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`) ON DELETE CASCADE,
  PRIMARY KEY (`id`)
);

CREATE TABLE `esgi_certification` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` text CHARACTER SET utf8 COLLATE utf8_latvian_ci NOT NULL,
  `idDocumentPath` varchar(2048) NOT NULL,
  `officialDocumentPath` varchar(2048) NOT NULL,
  `status` enum('inDemand','approved','refused') NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `esgi_certification`
    ADD PRIMARY KEY (`id`),
    ADD KEY `fk_certification_user` (`userId`);

ALTER TABLE `esgi_certification`
    ADD CONSTRAINT `fk_certification_user` FOREIGN KEY (`userId`) REFERENCES `esgi_user` (`id`);

    

CREATE TABLE `esgi_theme` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `fontFamily` varchar(255) NOT NULL,
  `bgColor` char(7) NOT NULL,
  `textColor` char(7) NOT NULL,
  `btnColor` char(7) NOT NULL,
  `btnColorLight` char(7) NOT NULL,
  `phColor` char(7) NOT NULL,
  `shadowColor` char(9) NOT NULL,
  `selected` BOOLEAN NOT NULL DEFAULT FALSE,
  `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);


INSERT INTO esgi_theme (name, fontFamily, bgColor, textColor, btnColor, btnColorLight, phColor, shadowColor, selected) 
   VALUES( 
            "Classic",
            "Open Sans",
            "#ffffff",
            "#04172f",
            "#ff5e84",
            "#e77280",
            "#e2e2e2",
            "#000000",
            1
);
INSERT INTO esgi_theme (name, fontFamily, bgColor, textColor, btnColor, btnColorLight, phColor, shadowColor, selected) 
   VALUES( 
            "Sombre",
            "Poppins",
            "#242424",
            "#ffffff",
            "#0084ff",
            "#81a6fe",
            "#e2e2e2",
            "#ededed",
            0
);


INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'ananas', 'MA', 'ananas@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'peche', 'PE', 'peche@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'kiwi', 'KI', 'kiwi@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'pomme', 'PO', 'pomme@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'fraise', 'FR', 'fraise@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'cerise', 'CE', 'cerise@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'groseille', 'GR', 'groseille@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'mirthille', 'MI', 'mirthille@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'banane', 'BA', 'banane@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'brocolli', 'BR', 'brocolli@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'courgette', 'CO', 'courgette@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'tomate', 'TO', 'tomate@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'antoine', 'LE REIN', 'antoine@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'armand', 'LA D', 'armand@gmail.com', "test1234", "");
INSERT INTO esgi_user (firstname, lastname, email, password, mailToken)  VALUES( 'noe', 'LE BO', 'noe@gmail.com', "test1234", "");


