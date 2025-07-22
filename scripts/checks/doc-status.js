#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Colors for output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  reset: '\x1b[0m'
};

function checkDocumentationCurrency() {
  console.log('Checking documentation currency...\n');
  
  const docRefPath = path.join(process.cwd(), 'working_files', 'doc-ref.md');
  
  if (!fs.existsSync(docRefPath)) {
    console.error(`${colors.red}Error: doc-ref.md not found${colors.reset}`);
    return 1;
  }
  
  const docRef = fs.readFileSync(docRefPath, 'utf8');
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  // Parse Document Status Matrix
  const lines = docRef.split('\n');
  let inMatrix = false;
  const staleDocs = [];
  const upcomingReviews = [];
  
  for (const line of lines) {
    if (line.includes('Document Status Matrix')) {
      inMatrix = true;
      continue;
    }
    
    if (inMatrix && line.startsWith('|') && !line.includes('Document') && !line.includes('---')) {
      const parts = line.split('|').map(p => p.trim());
      if (parts.length >= 6) {
        const [, docName, version, status, lastUpdated, nextReview] = parts;
        
        // Check if document is stale
        if (lastUpdated && lastUpdated.match(/\d{4}-\d{2}-\d{2}/)) {
          const docDate = new Date(lastUpdated);
          if (docDate < thirtyDaysAgo) {
            staleDocs.push({
              name: docName,
              date: lastUpdated,
              status: status
            });
          }
        }
        
        // Check upcoming reviews
        if (nextReview && nextReview.match(/\d{4}-\d{2}-\d{2}/)) {
          const reviewDate = new Date(nextReview);
          const sevenDaysFromNow = new Date();
          sevenDaysFromNow.setDate(sevenDaysFromNow.getDate() + 7);
          
          if (reviewDate <= sevenDaysFromNow) {
            upcomingReviews.push({
              name: docName,
              date: nextReview
            });
          }
        }
      }
    }
    
    if (inMatrix && line.trim() === '') {
      inMatrix = false;
    }
  }
  
  // Report findings
  let hasIssues = false;
  
  if (staleDocs.length > 0) {
    hasIssues = true;
    console.log(`${colors.yellow}⚠️  Stale documentation detected (>30 days old):${colors.reset}`);
    staleDocs.forEach(doc => {
      console.log(`   - ${doc.name} (${doc.status}) - Last updated: ${doc.date}`);
    });
    console.log('');
  }
  
  if (upcomingReviews.length > 0) {
    console.log(`${colors.yellow}📅 Upcoming reviews (within 7 days):${colors.reset}`);
    upcomingReviews.forEach(doc => {
      console.log(`   - ${doc.name} - Review due: ${doc.date}`);
    });
    console.log('');
  }
  
  if (!hasIssues && upcomingReviews.length === 0) {
    console.log(`${colors.green}✅ All documentation is current!${colors.reset}`);
  }
  
  return hasIssues ? 1 : 0;
}

function checkWorkingFileCompleteness() {
  console.log('\nChecking working file completeness...\n');
  
  const requiredSections = {
    'todo.md': ['Documentation Tasks', 'Phase', 'Review Queue'],
    'planning.md': ['Documentation Lifecycle', 'Current Documentation State', 'Documentation Versions'],
    'doc-ref.md': ['Document Status Matrix', 'Architecture Documents'],
    'event-stream.md': [new Date().getFullYear().toString()],
    'conventions.md': ['Naming Conventions']
  };
  
  let hasIssues = false;
  
  Object.entries(requiredSections).forEach(([file, sections]) => {
    const filePath = path.join(process.cwd(), 'working_files', file);
    
    if (!fs.existsSync(filePath)) {
      console.error(`${colors.red}✗ Missing file: ${file}${colors.reset}`);
      hasIssues = true;
      return;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const missingSections = [];
    
    sections.forEach(section => {
      if (!content.includes(section)) {
        missingSections.push(section);
      }
    });
    
    if (missingSections.length > 0) {
      hasIssues = true;
      console.log(`${colors.yellow}⚠️  ${file} missing sections:${colors.reset}`);
      missingSections.forEach(section => {
        console.log(`   - "${section}"`);
      });
    } else {
      console.log(`${colors.green}✓ ${file} complete${colors.reset}`);
    }
  });
  
  return hasIssues ? 1 : 0;
}

// Run checks
console.log('ABPM-RPM Documentation Status Check\n');
console.log('=' .repeat(50));

const currencyResult = checkDocumentationCurrency();
const completenessResult = checkWorkingFileCompleteness();

console.log('\n' + '='.repeat(50));

if (currencyResult === 0 && completenessResult === 0) {
  console.log(`${colors.green}\n✅ All checks passed!${colors.reset}`);
  process.exit(0);
} else {
  console.log(`${colors.red}\n❌ Some checks failed. Please address the issues above.${colors.reset}`);
  process.exit(1);
}