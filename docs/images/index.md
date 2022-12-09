---
title: Images
---

# Images

This document describes how to use images received from the Product Feeds or the Products API.

## URL Format

Image URLs are in the following format:

```bash
https://sharpener.shopbonsai.ca/i/<image_id>.<extension>
```

## Image Width

Images are served at `600px` width by default. You can use the `w` parameter to specify a different width. For example, to get an image of `300px` width, you can use the following URL:

```bash
https://sharpener.shopbonsai.ca/i/<image_id>.<extension>?w=300
```

For example:

```bash
https://sharpener.shopbonsai.ca/i/vhkLAbLI0p.jpg?w=300
```

You can also use the `original` keyword to get the original image:

```bash
https://sharpener.shopbonsai.ca/i/vhkLAbLI0p.jpg?w=original
```

## Image Formats

Image formats are either `jpg`, `png`, or `webp`. The image format is determined by the image format
of the original image supplied by the merchant. If the original image is a `jpg`, the image will be
served as a `jpg`.

## Use Cases

Some partners reupload images to their own CDN. This is a good practice, as it allows you to control the images on your site, and also allows you to serve images faster.

### Reuploading Images

If you're reuploading images, you can download the image and upload it to your CDN. **Please make
sure to provide your API key when downloading images**, as this would allow us to serve you better.
You should also set the image width to `original` to get the original image:

```bash
wget "--header=publisher:<id>" https://sharpener.shopbonsai.ca/i/vhkLAbLI0p.jpg?w=original -O image.jpg
```

### Using Bonsai Images Directly on Your Site

If you want to use Bonsai images directly on your site, you can use the provided URLs. However, please
note that these URLs are serving images of `600px` width, by default. If you want to use a different
width, you can use the `w` parameter. For example, to get an image of `300px` width, you can use the
following URL:

```bash
https://sharpener.shopbonsai.ca/i/vhkLAbLI0p.jpg?w=300
```
