const fs = require('fs');
const path = require('path');

function getDirectoryStructure(dirPath, prefix = '', maxDepth = 10, currentDepth = 0) {
  if (currentDepth >= maxDepth) return '';
  
  let result = '';
  
  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true });
    
    // Filter out unwanted directories and files
    const filteredItems = items.filter(item => {
      const name = item.name;
      
      // Skip common build/dependency folders
      if (name === '.next' || 
          name === 'node_modules' || 
          name === '.git' || 
          name === 'dist' || 
          name === 'build' ||
          name === '.vercel' ||
          name === '.env.local' ||
          name === '.env' ||
          name.startsWith('.DS_Store')) {
        return false;
      }
      
      return true;
    });

    // Sort: directories first, then files
    filteredItems.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });

    filteredItems.forEach((item, index) => {
      const isLast = index === filteredItems.length - 1;
      const currentPrefix = isLast ? '└── ' : '├── ';
      const nextPrefix = isLast ? '    ' : '│   ';
      
      result += `${prefix}${currentPrefix}${item.name}`;
      
      if (item.isDirectory()) {
        result += '/\n';
        const subDirPath = path.join(dirPath, item.name);
        result += getDirectoryStructure(subDirPath, prefix + nextPrefix, maxDepth, currentDepth + 1);
      } else {
        result += '\n';
      }
    });
  } catch (error) {
    result += `${prefix}[Error reading directory: ${error.message}]\n`;
  }
  
  return result;
}

function main() {
  const projectRoot = process.cwd();
  const projectName = path.basename(projectRoot);
  
  console.log(`📁 Project Structure: ${projectName}`);
  console.log('=' .repeat(50));
  console.log(projectName + '/');
  console.log(getDirectoryStructure(projectRoot));
  
  // Also save to a file
  const output = `Project Structure: ${projectName}\n${'='.repeat(50)}\n${projectName}/\n${getDirectoryStructure(projectRoot)}`;
  
  fs.writeFileSync('project-structure.txt', output);
  console.log('\n📄 Structure also saved to: project-structure.txt');
}

// Run the script
main();