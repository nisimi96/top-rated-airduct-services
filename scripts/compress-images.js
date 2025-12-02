const path = require('path');

const publicImagesDir = path.join(__dirname, '../public/images');

async function compressImages() {
  try {
    const imagemin = (await import('imagemin')).default;
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;
    const imageminWebp = (await import('imagemin-webp')).default;

    console.log('Starting image compression...\n');

    // Optimize JPEG files
    console.log('📦 Optimizing JPEG files...');
    const optimizedJpeg = await imagemin([`${publicImagesDir}/**/*.{jpg,jpeg}`], {
      destination: publicImagesDir,
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true,
        }),
      ],
    });
    console.log('✅ JPEG optimization completed:', optimizedJpeg.length, 'files\n');

    // Optimize PNG files
    console.log('📦 Optimizing PNG files...');
    const optimizedPng = await imagemin([`${publicImagesDir}/**/*.png`], {
      destination: publicImagesDir,
      plugins: [
        imageminPngquant({
          quality: [0.6, 0.8],
        }),
      ],
    });
    console.log('✅ PNG optimization completed:', optimizedPng.length, 'files\n');

    // Optimize existing WebP files
    console.log('📦 Optimizing WebP files...');
    const optimizedWebp = await imagemin([`${publicImagesDir}/**/*.webp`], {
      destination: publicImagesDir,
      plugins: [
        imageminWebp({
          quality: 75,
        }),
      ],
    });
    console.log('✅ WebP optimization completed:', optimizedWebp.length, 'files\n');

    console.log('✅ All images compressed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Image compression failed:', error.message);
    process.exit(1);
  }
}

compressImages();
