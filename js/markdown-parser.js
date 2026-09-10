/**
 * Custom Markdown Parser for Souvenir & Merchandise Web App
 * Converts Markdown string to formatted HTML safely and cleanly.
 */

window.MarkdownParser = {
  parse(markdown) {
    if (!markdown) return '';

    let html = markdown;

    // Normalize line breaks
    html = html.replace(/\r\n/g, '\n');

    // Code blocks ```lang ... ```
    html = html.replace(/```([\s\S]*?)```/g, (match, code) => {
      return `<pre class="md-code-block"><code>${this.escapeHtml(code.trim())}</code></pre>`;
    });

    // Tables
    html = html.replace(/^\|(.+)\|$\n^\|([-:| ]+)\|$\n((?:^\|.+\|$\n?)+)/gm, (match, headerLine, alignLine, rowsBlock) => {
      const headers = headerLine.split('|').map(h => h.trim()).filter(h => h.length > 0);
      const rows = rowsBlock.trim().split('\n').map(row => {
        return row.split('|').map(cell => cell.trim()).filter(cell => cell.length > 0);
      });

      let tableHtml = '<div class="md-table-wrapper"><table class="md-table"><thead><tr>';
      headers.forEach(h => {
        tableHtml += `<th>${this.parseInline(h)}</th>`;
      });
      tableHtml += '</tr></thead><tbody>';

      rows.forEach(row => {
        if (row.length > 0) {
          tableHtml += '<tr>';
          row.forEach(cell => {
            tableHtml += `<td>${this.parseInline(cell)}</td>`;
          });
          tableHtml += '</tr>';
        }
      });
      tableHtml += '</tbody></table></div>';
      return tableHtml;
    });

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h3 class="md-h3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="md-h2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="md-h1">$1</h1>');

    // Blockquotes
    html = html.replace(/^\> (.*$)/gim, '<blockquote class="md-blockquote">$1</blockquote>');

    // Unordered Lists
    html = html.replace(/^\s*[\-\*] (.*$)/gim, '<li class="md-list-item">$1</li>');
    html = html.replace(/(<li class="md-list-item">.*<\/li>\n?)+/g, '<ul class="md-list">$&</ul>');

    // Ordered Lists
    html = html.replace(/^\s*\d+\. (.*$)/gim, '<li class="md-ol-item">$1</li>');
    html = html.replace(/(<li class="md-ol-item">.*<\/li>\n?)+/g, '<ol class="md-ol">$&</ol>');

    // Horizontal Rule
    html = html.replace(/^---$/gim, '<hr class="md-hr">');

    // Process inline formatting (bold, italic, inline code, links)
    const lines = html.split('\n');
    const processedLines = lines.map(line => {
      // Don't wrap tags that are already HTML blocks
      if (line.trim().startsWith('<h') || 
          line.trim().startsWith('<ul') || 
          line.trim().startsWith('<ol') || 
          line.trim().startsWith('<li') || 
          line.trim().startsWith('<blockquote') || 
          line.trim().startsWith('<div') || 
          line.trim().startsWith('<table') || 
          line.trim().startsWith('<pre') || 
          line.trim().startsWith('<hr') || 
          line.trim() === '') {
        return this.parseInline(line);
      }
      return `<p class="md-p">${this.parseInline(line)}</p>`;
    });

    return processedLines.join('\n');
  },

  parseInline(text) {
    if (!text) return '';
    let result = text;

    // Bold & Italic ***text***
    result = result.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');

    // Bold **text**
    result = result.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Italic *text* or _text_
    result = result.replace(/\*(.*?)\*/g, '<em>$1</em>');
    result = result.replace(/_(.*?)_/g, '<em>$1</em>');

    // Inline Code `text`
    result = result.replace(/`(.*?)`/g, '<code class="md-inline-code">$1</code>');

    // Links [label](url)
    result = result.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="md-link">$1</a>');

    // Badges/Highlights ==text==
    result = result.replace(/==(.*?)==/g, '<mark class="md-badge">$1</mark>');

    return result;
  },

  escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
};
