Image Finder is a web application for searching, customizing, and managing images. Users can add frames, text, and emojis, and then download or share their customized images. It also integrates with OpenAI to generate images based on user prompts.
Structure

    HTML: Provides the layout and integrates external styles and scripts.
        Header: Contains a logo, search input, and search button.
        Main Form: Displays images and includes buttons for customization and actions.
    CSS (css/style.css): Styles the page.
    JavaScript (js/script.js): Manages interactivity and functionality.
    PHP (generate_image.php): Uses OpenAI to generate images based on user input.

Features

    Image Search: Enter keywords to find images.
    Customization: Add frames, text, and emojis.
    Download/Share: Save or share customized images.
    AI Image Generation: Generate images based on user prompts using OpenAI's API.

PHP Integration

    generate_image.php:
        Uses OpenAI's API to generate images.
        Takes a prompt via POST request, generates an image with specified dimensions, and returns the image data.

Usage

    Search for an Image: Use the input field and search button.
    Customize the Image: Apply frames, text, and emojis as desired.
    Generate an Image: Optionally, submit a prompt to generate an image via OpenAI.
    Download or Share: Save or share your final customized image.

Notes

    FontAwesome: Provides icons.
    Facebook SDK: Enables sharing images on Facebook.
    OpenAI API: Requires a valid API key and handles image generation.

Ensure that you have configured your environment with the necessary dependencies and API keys for full functionality.
