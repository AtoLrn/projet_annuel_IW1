CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `email` varchar(998) NOT NULL,
  `status` enum('admin','user', 'chief') NOT NULL DEFAULT 'user',
  `isVerified` BOOLEAN NOT NULL DEFAULT FALSE,
  `password` varchar(255) NOT NULL,
  `mailToken` varchar(255) NOT NULL,

  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `session` (
  `token` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `expiration` datetime NOT NULL ,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  PRIMARY KEY (`token`)
);

CREATE TABLE `category` (
  `id`  int(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL ,
  PRIMARY KEY (`id`)
);

CREATE TABLE `ingredient` (
  `id`  int(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL ,
  PRIMARY KEY (`id`)
);



CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `categoryId` INT(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `articleId` INT(11) NOT NULL,
  `content` TEXT NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  FOREIGN KEY (`articleId`) REFERENCES `article` (`id`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `like` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `articleId` INT(11) NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  FOREIGN KEY (`articleId`) REFERENCES `article` (`id`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `ingredient_article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ingredientId` int(11) NOT NULL,
  `articleId` INT(11) NOT NULL,
  `quantity` VARCHAR(255) NOT NULL,
  FOREIGN KEY (`ingredientId`) REFERENCES `ingredient` (`id`),
  FOREIGN KEY (`articleId`) REFERENCES `article` (`id`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articleId` INT(11) NOT NULL,
  `path` VARCHAR(2048) NOT NULL,
  FOREIGN KEY (`articleId`) REFERENCES `article` (`id`),
  PRIMARY KEY (`id`)
);

CREATE TABLE `subscription` (
  `idSubscribtion` INT(11) NOT NULL,
  `idTargetSubscribtion` INT(11) NOT NULL,
  FOREIGN KEY (`idSubscribtion`) REFERENCES `user` (`id`),
  FOREIGN KEY (`idTargetSubscribtion`) REFERENCES `user` (`id`),
  PRIMARY KEY (`idSubscribtion`, `idTargetSubscribtion`)
);

CREATE TABLE `page` (
  `id` INT(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` VARCHAR(2048) NOT NULL,
  `content` TEXT NOT NULL,
  FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  PRIMARY KEY (`id`)
);
