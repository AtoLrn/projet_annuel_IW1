<?php

namespace App\Model;

use App\Core\Sql;

class Theme extends Sql
{
    protected $id = null;
    protected $name = "";
    protected $bgColor = "#FFFFFF";
    protected $phColor = "#E2E2E2";
    protected $textColor = "#04172F";
    protected $btnColor = "#ff5e84";
    protected $btnColorLight = "#e77280";
    protected $shadowColor = "#000000";
    protected $fontFamily = "Open Sans";

    public function __construct()
    {
        parent::__construct();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = ucwords(strtolower(trim(htmlspecialchars($name))));
    }

    public function getBgColor(): ?string
    {
        return $this->bgColor;
    }

    public function setBgColor(?string $bgColor): void
    {
        $this->bgColor = ucwords(strtolower(trim($bgColor)));
    }

    public function getPhColor(): ?string
    {
        return $this->phColor;
    }

    public function setPhColor(?string $phColor): void
    {
        $this->phColor = ucwords(strtolower(trim($phColor)));
    }

    public function getTextColor(): ?string
    {
        return $this->textColor;
    }

    public function setTextColor(?string $textColor): void
    {
        $this->textColor = ucwords(strtolower(trim($textColor)));
    }

    public function getBtnColor(): ?string
    {
        return $this->btnColor;
    }

    public function setBtnColor(?string $btnColor): void
    {
        $this->btnColor = ucwords(strtolower(trim($btnColor)));
    }

    public function getBtnColorLight(): ?string
    {
        return $this->btnColorLight;
    }

    public function setBtnColorLight(?string $btnColorLight): void
    {
        $this->btnColorLight = ucwords(strtolower(trim($btnColorLight)));
    }

    public function getShadowColor(): ?string
    {
        return $this->shadowColor;
    }

    public function setShadowColor(?string $shadowColor): void
    {
        $this->shadowColor = ucwords(strtolower(trim($shadowColor)));
    }

    public function getFontFamily(): ?string
    {
        return $this->fontFamily;
    }

    public function setFontFamily(?string $fontFamily): void
    {
        $this->fontFamily = ucwords(strtolower(trim($fontFamily)));
    }

    public function getThemeForm(?int $id = null): array
    {
        return [
            "config" => [
                "id" => "themeForm",
                "method" => "POST",
                "action" => "/settings" . (!is_null($id) ? "?id=" . $id : "") ,
                "submit" => (!is_null($id) ? "Modifier" : "Ajouter"),
                "class" => "grid col g-4 card p-6 w-em-8 xs-w-per-20",
                "classContInputs" => "row reverse g-6 j-end",
                "classSubmit" => "btn btn-pink my-4 w-per-20"

            ],
            'inputs' => [
                "name" => [
                    "type" => "text",
                    "placeholder" => "Titre ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "titleForm",
                    "error" => "Title incorrect",
                    "unicity" => "true",
                    "errorUnicity" => "Title déjà en bdd",
                    "value" => $this->getName()
                ],
                "fontFamily" => [
                    "type" => "text",
                    "placeholder" => "type de text ...",
                    "required" => true,
                    "class" => "input input-pink",
                    "id" => "fontFamilyForm",
                    "error" => "type de texte incorrect",
                    "value" => $this->getFontFamily()
                ],
                "bgColor" => [
                    "type" => "color",
                    "placeholder" => "couleur de fond ...",
                    "required" => true,
                    "class" => "input input-color",
                    "id" => "bgColorForm",
                    "label" => "couleur de fond",
                    "error" => "couleur de fond incorrect",
                    "value" => $this->getbgColor()
                ],
                "phColor" => [
                    "type" => "color",
                    "placeholder" => "couleur des Placeholders ...",
                    "required" => true,
                    "class" => "input input-color",
                    "id" => "phColorForm",
                    "label" => "couleur des placeholder",
                    "error" => "couleur des placeholder incorrect",
                    "value" => $this->getPhColor()
                ],
                "textColor" => [
                    "type" => "color",
                    "placeholder" => "couleur du texte ...",
                    "required" => true,
                    "class" => "input input-color",
                    "id" => "textColorForm",
                    "label" => "couleur du texte",
                    "error" => "couleur du texte incorrect",
                    "value" => $this->getTextColor()
                ],

                "btnColor" => [
                    "type" => "color",
                    "placeholder" => "couleur des boutons / couleurs vives ...",
                    "required" => true,
                    "class" => "input input-color",
                    "id" => "btnColorForm",
                    "label" => "couleur des boutons",
                    "error" => "couleur des boutons incorrect",
                    "value" => $this->getBtnColor()
                ],

                "btnColorLight" => [
                    "type" => "color",
                    "placeholder" => "couleur des boutons / couleurs allégé ...",
                    "required" => true,
                    "class" => "input input-color",
                    "id" => "btnColorLightForm",
                    "label" => "couleur allégé des boutons",
                    "error" => "couleur allégé des boutons incorrect",
                    "value" => $this->getBtnColorLight()
                ],

                "shadowColor" => [
                    "type" => "color",
                    "placeholder" => "couleur des ombres ...",
                    "required" => true,
                    "class" => "input input-color",
                    "id" => "shodowColorForm",
                    "label" => "couleurs des ombres",
                    "error" => "couleurs des ombres incorrect",
                    "value" => $this->getShadowColor()
                ],


            ]
        ];
    }
}
