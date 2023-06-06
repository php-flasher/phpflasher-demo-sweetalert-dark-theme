<p align="center">
    <img src="https://raw.githubusercontent.com/php-flasher/phpflasher-demo-sweetalert-dark-theme/main/art/phpflasher-demo-sweetalert-dark-theme.png" alt="PHPFlasher sweetalert dark theme">
</p>

# PHPFlasher - Sweetalert Dark Theme Integration

This guide will walk you through the process of rendering Sweetalert notifications with dark theme in your PHPFlasher project. Let's dive in!

## Step 1: Install Required Packages
First, ensure you have the necessary packages installed. If not, install them via the following commands:

```bash
composer require php-flasher/flasher-sweetalert-symfony
npm install --save @sweetalert2/theme-dark
```

## Step 2: Update Webpack Configuration

Next, update your `webpack.config.js` file to copy sweetalert dark them to the `public` directory:

```js
Encore
    .copyFiles({
        from: './node_modules/@sweetalert2/theme-dark/',
        to: 'vendor/@sweetalert2/theme-dark/[path][name].[ext]',
    })
```

## Step 3: Update Configuration
The next step is to update the configuration settings in your `flasher.yaml` file and point to the location of the dark theme CSS file in the `public` directory:

```yaml
# config/packages/flasher.yaml:
flasher_sweetalert:
    styles: '/build/vendor/@sweetalert2/theme-dark/dark.min.css'
```

## Step 4: Build and Display Notifications

Now you're all set! Run your build command, then call your notifications as you normally would. 
They should now appear with the elegant dark theme provided by SweetAlert2.

