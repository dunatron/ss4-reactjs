<?php
/**
 * Created by PhpStorm.
 * User: Heath
 * Date: 16/04/16
 * Time: 12:27 AM
 */

use SilverStripe\ORM\DataObject;

class Event extends DataObject {

    private static $has_one = array(
    );

    private static $has_many = array(
    );

    private static $many_many = array(
    );

    private static $summary_fields = array(
        'Title' => 'Title',
    );

    private static $db = array(
        'Title' => 'Varchar(100)',
    );

    private static $searchable_fields = array(
    );
    

}