<?php
namespace App\Core\Interfaces;

interface QueryBuilder
{
    public function select2(string $table, array $columns): QueryBuilder;

    public function insert(string $table, array $columns): QueryBuilder;

    public function update(string $table, array $columns): QueryBuilder;

    public function where(string $column, ?string $value, string $operator = "="): QueryBuilder;

    public function whereOr(string $column, ?string $value, string $operator = "="): QueryBuilder;

    public function leftJoin(string $table, string $fk, string $pk): QueryBuilder;

    public function innerJoin(string $table, string $fk, string $pk): QueryBuilder;

    public function rightJoin(string $table, string $fk, string $pk): QueryBuilder;

    public function groupBy(array $columns): QueryBuilder;

    public function orderBy(string $column, string $direction = "ASC"): QueryBuilder;
    
    public function limit(int $from, int $offset): QueryBuilder;

    public function get(): string;
}