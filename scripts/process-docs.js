// Import necessary modules
const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourceDir = path.join(__dirname, '..', 'docs');
const destDir = path.join(__dirname, 'docs');

// Create docs directory if it doesn't exist
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
}

// File mapping
const fileMapping = {
    '01_quick_start.md': 'quickstart.md',
    '02_architecture.md': 'architecture.md',
    '03_folder_structure.md': 'folder-structure.md',
    '04_api_reference.md': 'api-reference.md',
    '05_database.md': 'database.md',
    '06_build_release.md': 'build-and-release.md',
    '07_env_and_secrets.md': 'environment-and-secrets.md',
    '08_testing.md': 'testing.md',
    '09_troubleshooting.md': 'troubleshooting.md',
    '10_maintenance_and_contrib.md': 'maintenance.md',
    '11_references.md': 'references.md',
    '12_security_privacy.md': 'security.md',
    '13_performance.md': 'performance.md'
};

// Process and copy each file
Object.entries(fileMapping).forEach(([source, dest]) => {
    const sourcePath = path.join(sourceDir, source);
    const destPath = path.join(destDir, dest);

    if (fs.existsSync(sourcePath)) {
        let content = fs.readFileSync(sourcePath, 'utf8');

        // Add front matter
        content = `---
sidebar_position: ${Object.keys(fileMapping).indexOf(source) + 1}
---

${content}`;

        // Clean up MDX syntax issues
        content = content
            // Fix code blocks
            .replace(/```(\w+)\r?\n/g, "```$1\n")
            // Remove MDX expressions
            .replace(/{[^}]+}/g, '')
            // Fix headers
            .replace(/(#+)([^ \n])/g, '$1 $2')
            // Fix inline code
            .replace(/(?<!`)`(?!`)([^`]+?)(?<!`)`(?!`)/g, ' `$1` ')
            // Fix links
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '[$1]($2)');

        fs.writeFileSync(destPath, content);
        console.log(`Processed: ${source} -> ${dest}`);
    }
});