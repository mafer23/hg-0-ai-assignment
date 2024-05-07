# Instructions to upload and test in Chrome browser

 <!-- El siguiente código HTML insertará la imagen y establecerá su tamaño -->

![Seleccionado mayo 07 2024 17:26:27](https://github.com/Jacobo0312/hg-0-ai-assignment/assets/39041288/56de5420-7961-4a17-9281-3c314acf22f2)


### Install the chrome extension cli to execute the app extension

```sh
npm install -g chrome-extension-cli
```

### Install node dependencies

```sh
npm install
```

### Execute the app extension

```sh
npm run watch
```

### Then follow these instructions to see your extension:
1. Write **chrome://extensions** in the browser search box
2. Check the **Developer mode** checkbox
3. Click on the **Load unpacked extension** button
4. Select the folder **scrapp-ext/build**
5. You'll see the extension in the page, click in the extension icon in the top right corner of the browser and click the extension to use it

## How to use the app
- Visit a page with paragraph information **[this one](https://www.nytimes.com/2024/04/19/us/politics/rfk-biden-trump-michigan.html)** for example
- Right click inside the extension and inspect, the browser devtool will open
- Click on console tab
- Back on the extension, click the 'obtener url' button
- See the json with the scrapp information in the console of the browser devtool

## Instructions to deploy the extension in Chrome browser

When you're ready to publish to Chrome Web Store, create a minified bundle with `npm run build` and zip it with `npm run pack`.
Or you can zip the `build` folder manually.

## Instructions to modify the code
- Make sure that the command `npm run watch` is running so all the changes are saved automatically
- Look for **public/popup.html** to modify the estructure (like a ordinary html)
- The **src/popup.js** and **src/popup.css** are for logic code and styles respectively (ignore the popup2.js it is a code example)


