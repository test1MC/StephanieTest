var xmlSynonymsData = "";
xmlSynonymsData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSynonymsData += '<MadCapSynonyms xml:lang=\"en-us\">';
xmlSynonymsData += '    <Groups>';
xmlSynonymsData += '        <SynonymGroup>';
xmlSynonymsData += '            <Word>Flow</Word>';
xmlSynonymsData += '            <Word>FLO</Word>';
xmlSynonymsData += '        </SynonymGroup>';
xmlSynonymsData += '    </Groups>';
xmlSynonymsData += '    <Directional />';
xmlSynonymsData += '</MadCapSynonyms>';
MadCap.Utilities.Xhr._FilePathToXmlStringMap.Add('Synonyms', xmlSynonymsData);