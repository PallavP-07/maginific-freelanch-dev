export function splitTextByWord(text = "", separator = "") {
    if (typeof text !== "string" || typeof separator !== "string" || !text.trim()) {
      return ["", ""]; 
    }
  
    const index = text.indexOf(separator);
  
    if (index === -1) return [text, ""]; 
  
    return [
      text.substring(0, index).trim(), 
      text.substring(index, index + separator.length),
    ];
  }
  