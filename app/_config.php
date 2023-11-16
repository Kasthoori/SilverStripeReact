<?php
use SilverStripe\Security\PasswordValidator;
use SilverStripe\Security\Member;
use SilverStripe\SiteConfig\SiteConfig;

// remove PasswordValidator for Silverstripe 5.0
$validator = PasswordValidator::create();
// Settings are registered via injector configuration - see password.yml in framework
Member::set_password_validator($validator);
SiteConfig::add_extension(SiteConfigExtension::class);


