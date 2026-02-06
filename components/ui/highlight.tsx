export default function HighlightedDescription({ text }: { text: string }) {
  const parts = text.split('<br />');
  
  const highlightTerms = (line: string) => {
    if (!line.includes('SEO/SEM') && !line.includes('GOOGLE ADS')) {
      return <>{line}</>;
    }
    
    const segments = [];
    let remaining = line;
    
    ['SEO/SEM', 'GOOGLE ADS'].forEach(term => {
      if (remaining.includes(term)) {
        const [before, after] = remaining.split(term);
        segments.push(before);
        segments.push(
          <span key={term} className="relative inline-block px-2 py-0.5 mx-1">
            <span className="relative z-10">{term}</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#A21F8A]"></span>
            <span className="absolute inset-0 bg-[#A21F8A]/100 rounded-sm"></span>
          </span>
        );
        remaining = after;
      }
    });
    
    segments.push(remaining);
    return <>{segments}</>;
  };
  
  return (
    <>
      {parts.map((part, idx) => (
        <span key={idx}>
          {highlightTerms(part)}
          {idx < parts.length - 1 && <><br /><br /></>}
        </span>
      ))}
    </>
  );
}