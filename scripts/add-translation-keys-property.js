const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src/app');

/**
 * Add readonly TRANSLATION_KEYS property to components that use it in templates
 */

/**
 * Recursively find all .component.ts files
 */
function findComponentFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      findComponentFiles(filePath, fileList);
    } else if (file.endsWith('.component.ts') && !file.endsWith('.spec.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

/**
 * Check if component uses TRANSLATION_KEYS in template
 */
function usesTranslationKeysInTemplate(componentPath) {
  const htmlPath = componentPath.replace('.component.ts', '.component.html');
  if (!fs.existsSync(htmlPath)) {
    return false;
  }
  
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  return htmlContent.includes('TRANSLATION_KEYS.');
}

/**
 * Check if component already has readonly TRANSLATION_KEYS property
 */
function hasTranslationKeysProperty(content) {
  return /readonly\s+TRANSLATION_KEYS\s*=\s*TRANSLATION_KEYS/.test(content);
}

/**
 * Check if component imports TRANSLATION_KEYS
 */
function hasTranslationKeysImport(content) {
  return content.includes('TRANSLATION_KEYS') || 
         content.includes('@core/constants/translation-keys.constant');
}

/**
 * Add readonly TRANSLATION_KEYS property to component
 */
function addTranslationKeysProperty(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has property
  if (hasTranslationKeysProperty(content)) {
    return null;
  }
  
  // Skip if doesn't use in template
  if (!usesTranslationKeysInTemplate(filePath)) {
    return null;
  }
  
  // Skip if doesn't import
  if (!hasTranslationKeysImport(content)) {
    return null;
  }
  
  // Find the class declaration
  const classMatch = content.match(/export\s+class\s+(\w+)\s*(?:implements\s+[\w\s,]+)?\s*\{/);
  if (!classMatch) {
    return null;
  }
  
  // Find the first property or method after class declaration
  const classStartIndex = classMatch.index + classMatch[0].length;
  const afterClass = content.substring(classStartIndex);
  
  // Find the first property/method (look for @Input, @Output, private, public, or method)
  const firstPropertyMatch = afterClass.match(/(\s+)(@(?:Input|Output|ViewChild|ContentChild)|private|public|protected|readonly|\w+\s*[=:])/);
  
  let insertIndex;
  let indent;
  
  if (firstPropertyMatch) {
    insertIndex = classStartIndex + firstPropertyMatch.index;
    indent = firstPropertyMatch[1];
  } else {
    // If no properties found, insert after opening brace
    insertIndex = classStartIndex;
    indent = '  ';
  }
  
  // Add the property
  const propertyToAdd = `${indent}// Expose TRANSLATION_KEYS to template\n${indent}readonly TRANSLATION_KEYS = TRANSLATION_KEYS;\n`;
  
  content = content.substring(0, insertIndex) + propertyToAdd + content.substring(insertIndex);
  
  fs.writeFileSync(filePath, content, 'utf8');
  return { file: filePath };
}

/**
 * Main function
 */
function addTranslationKeysProperties() {
  console.log('🚀 Adding TRANSLATION_KEYS property to components\n');
  
  const files = findComponentFiles(SRC_DIR);
  console.log(`📁 Found ${files.length} component files\n`);
  
  const updated = [];
  const skipped = [];
  
  for (const file of files) {
    try {
      const result = addTranslationKeysProperty(file);
      if (result) {
        updated.push(result);
        console.log(`✅ ${path.relative(SRC_DIR, file)}`);
      } else {
        skipped.push(file);
      }
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Updated: ${updated.length} files`);
  console.log(`   ⏭️  Skipped: ${skipped.length} files`);
}

// Run
try {
  addTranslationKeysProperties();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}

