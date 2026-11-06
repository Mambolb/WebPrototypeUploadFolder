# V6.1 QA receipt

Source files: user's current public repository Mambolb/WebPrototypeUploadFolder and V6 zip; Archive(2).zip with CodeExport_ProtV6.rtf + WebSiteTable.numbers; Figma screenshot supplied in chat.

Checks passed:
- Home rows: 8
- Home headers: INDEX, CATEGORY, MEDIUM, CONTEXT, YEAR, all with sort arrows
- Category-sort ascending arrow and reordering: observed
- Instagram external href: exactly https://www.instagram.com/sasha.bichuk/, target=_blank
- Enzyklopaedie home preview selection: class and image loaded
- Home canvas width: 2048px on 2048px browser
- Design hero art: 1440×1024 at reference desktop; 1620×1152 centered at x214 in 2048×1152 viewport, preserving whole artwork with no crop
- Project description external YouTube URL: valid anchor with _blank
- JavaScript runtime: no exceptions in tested states

Sources confirm The Time category Documentary, medium Film, context ZHdK Zurich, year 2022.

Pending: owner must supply an email address before Mail becomes a functional link. Image centering is visually reviewed but exact match to Figma image fill cannot be independently verified through direct Figma API due permission limitations; use the screenshots and owner validation before final mobile design.
