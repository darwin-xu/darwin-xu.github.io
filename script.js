function generateMarkdown() {
    const title = document.getElementById('title').value;
    const affectedComponent = document.getElementById('affectedComponent').value;
    const symptoms = document.getElementById('symptoms').value;
    const steps = document.getElementById('steps').value;

    // Build the markdown text
    let markdownText = `
# *Summary*
** Title: ${title}
** Affected Component/Product: ${affectedComponent}
** Symptoms: ${symptoms.replace(/\n/g, '\n** ')}
# *Investigation*
** Steps to Reproduce: ${steps.replace(/\n/g, '\n** ')}
** Data Analysis: ${analysis.replace(/\n/g, '\n** ')}
** Root Cause: ${rootcause.replace(/\n/g, '\n** ')}
** Contributing Factors: ${factors.replace(/\n/g, '\n** ')}
# *Resolution*
** Workaround: ${workaround.replace(/\n/g, '\n** ')}
** Solution Implemented: ${solution.replace(/\n/g, '\n** ')}
# *Preventive Measures*
** Lessons Learned: ${lesson.replace(/\n/g, '\n** ')}
** Future Action Items: ${future.replace(/\n/g, '\n** ')}
** Prevention: ${prevention.replace(/\n/g, '\n** ')}
    `;

    // Set output
    document.getElementById('output').value = markdownText;
}

function copyToClipboard() {
    const copyText = document.getElementById('output');
    copyText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}
