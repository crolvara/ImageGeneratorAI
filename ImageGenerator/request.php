<?php

require __DIR__ . '/vendor/autoload.php';

use Orhanerday\OpenAi\OpenAi;

$open_ai = new OpenAi('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');

// get "prompt" param that we send from JS file
// test it using "POST" request
$prompt = $_POST['prompt'];

$complete = $open_ai->image([
    "prompt" => $prompt,
    "n" => 5, // number of images
    "size" => "256x256", // image dimension
    "response_format" => "b64_json" // use "url" for less credit usage
]);

echo $complete;

?>
