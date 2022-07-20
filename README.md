# 3IW1-2020

## design pattern

- singleton:
    - mail: www/core/mail/Mail.class.php
    - connection: www/core/connection.class.php
    - logger: www/core/logger.class.php

- builder: 
    - QueryBuilder: MysqlBuilder.class.php, PostgreBuilder.php

- observer:
    - send mail notification when a chief publish a recette to user that are subscribed -> Model/Article.class.php et Controller/article.class.php

- Decorator:
    - App\Core\Decorator\UrlDecorator;
    
     

