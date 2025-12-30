const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src/app');

/**
 * Check if components use TranslateModule and translate pipe correctly
 */

/**
 * Recursively find all component files
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
 * Check if component uses translate pipe in template
 */
function usesTranslatePipe(componentPath) {
  const htmlPath = componentPath.replace('.component.ts', '.component.html');
  if (!fs.existsSync(htmlPath)) {
    return false;
  }
  
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  return htmlContent.includes('| translate');
}

/**
 * Check if component imports TranslateModule
 */
function hasTranslateModule(componentPath) {
  const content = fs.readFileSync(componentPath, 'utf8');
  
  // Check for TranslateModule import
  if (content.includes('TranslateModule')) {
    return true;
  }
  
  // Check for TranslateService (might use service directly)
  if (content.includes('TranslateService')) {
    return true;
  }
  
  return false;
}

/**
 * Check component
 */
function checkComponent(filePath) {
  const usesPipe = usesTranslatePipe(filePath);
  const hasModule = hasTranslateModule(filePath);
  
  if (usesPipe && !hasModule) {
    return {
      file: filePath,
      issue: 'missing-translate-module',
      usesPipe,
      hasModule
    };
  }
  
  return null;
}

/**
 * Main function
 */
function checkAllComponents() {
  console.log('🔍 Checking TranslateModule usage in components\n');
  
  const files = findComponentFiles(SRC_DIR);
  console.log(`📁 Found ${files.length} component files\n`);
  
  const issues = [];
  
  for (const file of files) {
    try {
      const issue = checkComponent(file);
      if (issue) {
        issues.push(issue);
        console.log(`⚠️  ${path.relative(SRC_DIR, file)}`);
        console.log(`   - Uses translate pipe but missing TranslateModule`);
      }
    } catch (error) {
      console.error(`❌ Error checking ${file}:`, error.message);
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   ⚠️  Issues found: ${issues.length}`);
  
  if (issues.length > 0) {
    console.log(`\n💡 Fix: Add TranslateModule to imports array in component`);
  } else {
    console.log(`\n✅ All components using translate pipe have TranslateModule`);
  }
  
  // Save report
  const reportFile = path.join(__dirname, '../TRANSLATE_USAGE_REPORT.json');
  fs.writeFileSync(reportFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    total: files.length,
    issues: issues.length,
    files: issues.map(i => path.relative(SRC_DIR, i.file))
  }, null, 2), 'utf8');
  
  console.log(`\n✅ Report saved to: ${reportFile}`);
}

// Run
try {
  checkAllComponents();
} catch (error) {
  console.error('❌ Error:', error);
  process.exit(1);
}


