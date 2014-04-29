<?php
/**
 * Created by PhpStorm.
 * User: developer
 * Date: 11/04/14
 * Time: 14:32
 */

class Photo extends Eloquent {

    protected $table = 'photos';

    public function user() {

        return $this->belongsTo('Users');

    }

}