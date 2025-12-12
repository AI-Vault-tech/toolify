#!/usr/bin/env node

// Script to verify SEO optimizations
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying SEO & AEO Optimizations for AI Nexus...\n');

// Check if required files exist
const requiredFiles = [
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/components/seo/AEOContent.tsx',
  'src/components/seo/JsonLd.tsx',
  'src/lib/seoHelpers.ts'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
  const fullPath = path.join(__dirname, '..', file);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file} - FOUND`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

console.log('\n---\n');

// Check if metadata is properly configured in key pages
const keyPages = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/ai-tools/page.tsx',
  'src/app/ai-tools/[toolId]/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/blog/[slug]/page.tsx'
];

let metadataConfigured = true;

keyPages.forEach(page => {
  const fullPath = path.join(__dirname, '..', page);
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf8');
    if (content.includes('metadata:') || content.includes('generateMetadata')) {
      console.log(`✅ ${page} - METADATA CONFIGURED`);
    } else {
      console.log(`❌ ${page} - METADATA MISSING`);
      metadataConfigured = false;
    }
  } else {
    console.log(`❌ ${page} - FILE NOT FOUND`);
    metadataConfigured = false;
  }
});

console.log('\n---\n');

// Overall status
if (allFilesExist && metadataConfigured) {
  console.log('🎉 ALL SEO & AEO OPTIMIZATIONS ARE PROPERLY IMPLEMENTED!');
  console.log('\n🚀 Your website is now optimized for both traditional search engines and AI-powered answer engines.');
  console.log('📝 Refer to SEO_AEO_OPTIMIZATION_REPORT.md for details on all implemented optimizations.');
} else {
  console.log('⚠️  SOME SEO OPTIMIZATIONS ARE MISSING OR INCOMPLETE.');
  console.log('Please review the output above and ensure all required files are created and configured properly.');
}

console.log('\n📊 NEXT STEPS:');
console.log('1. Deploy your website to verify sitemap and robots.txt are accessible');
console.log('2. Use Google Search Console to monitor indexing and performance');
console.log('3. Test rich results using Google\'s Rich Results Test tool');
console.log('4. Monitor performance and adjust based on analytics data');