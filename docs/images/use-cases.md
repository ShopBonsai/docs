---
title: Use Cases
description: Learn how product feeds are formatted at Bonsai.
---

# Use Cases

Some partners re-upload images to their CDN as it allows them to control the images on their application, providing better performance when serving images.

## Recommended - Using your CDN

You can use the `image_url` field to get the image URL if you're re-uploading images. You can then download the image and upload it to your CDN. **Please provide an API key when downloading images**, as this would allow us to serve you better. You should also set the image width to `original` to get the original image:

```bash
wget "--header=publisher:<id>" https://sharpener.shopbonsai.ca/i/vhkLAbLI0p.jpg?w=original -O image.jpg
```

## Alternative - Using Bonsai's CDN

If you want to use Bonsai images directly on your application, you can use the provided URLs. However, please note that these URLs, by default, serve images of `600px` width. If you want to use a different
width, you can use the `w` parameter. For example, to get an image of `300px` width, you can use the
following URL:

```bash
https://sharpener.shopbonsai.ca/i/vhkLAbLI0p.jpg?w=300
```
