const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGE_CONFIGS = {
  carousel: {
    mobile: 600,    
    tablet: 1024,   
    desktop: 1920,  
    quality: 80
  },
  background: {
    mobile: 800,
    tablet: 1440,
    desktop: 2560,
    quality: 75
  },
  logo: {
    width: 400,
    quality: 90
  },
  parallax: {
    mobile: 800,
    desktop: 2880,
    quality: 75
  }
};

async function optimizeImage(inputPath, outputDir, config, baseName) {
  const ext = path.extname(baseName);
  const name = path.basename(baseName, ext);

  try {
    if (config.mobile) {
      await sharp(inputPath)
        .resize(config.mobile, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(path.join(outputDir, `${name}-mobile.webp`));
      console.log(`✅ ${name}-mobile.webp created`);
    }

    if (config.tablet) {
      await sharp(inputPath)
        .resize(config.tablet, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(path.join(outputDir, `${name}-tablet.webp`));
      console.log(`✅ ${name}-tablet.webp created`);
    }

    if (config.desktop) {
      await sharp(inputPath)
        .resize(config.desktop, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(path.join(outputDir, `${name}-desktop.webp`));
      console.log(`✅ ${name}-desktop.webp created`);
    }

    if (config.width && !config.mobile) {
      await sharp(inputPath)
        .resize(config.width, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: config.quality })
        .toFile(path.join(outputDir, `${name}-optimized.webp`));
      console.log(`✅ ${name}-optimized.webp created`);
    }

  } catch (error) {
    console.error(`❌ Error processing ${baseName}:`, error.message);
  }
}

async function processDirectory(dirPath, config) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && /\.(webp|jpg|jpeg|png)$/i.test(file)) {
      await optimizeImage(fullPath, dirPath, config, file);
    }
  }
}

async function main() {
  const publicDir = './public/images';

  console.log('Starting image optimization...\n');

  console.log('📁 Processing carousel images...');
  await processDirectory(path.join(publicDir, 'tituloCarru'), IMAGE_CONFIGS.carousel);

  // Procesar imágenes parallax
  console.log('\n📁 Processing parallax images...');
  await processDirectory(path.join(publicDir, 'para'), IMAGE_CONFIGS.parallax);

  console.log('\n✨ Optimization complete!');
  console.log('\n💡 Next steps:');
  console.log('1. Update your code to use Next.js Image component');
  console.log('2. Use the -mobile, -tablet, -desktop variants with srcSet');
  console.log('3. Test on different devices');
}

main();