import { createPortal } from 'react-dom';
import DetailItem from './DetailItem';
import { useState, useEffect } from 'react';
type IWrapperPortal = {
  id: number;
};

const WrapperPortal: React.FC<IWrapperPortal> = ({ id }) => {
  const [div, setDiv] = useState<HTMLDivElement>();

  function copyStyles(sourceDoc: Document, targetDoc: Document) {
    Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
      if (styleSheet.cssRules) {
        // for <style> elements
        const newStyleEl = sourceDoc.createElement('style');

        Array.from(styleSheet.cssRules).forEach(cssRule => {
          // write the text of each rule into the body of the style element
          newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
        });

        targetDoc.head.appendChild(newStyleEl);
      } else if (styleSheet.href) {
        // for <link> elements loading CSS from a URL
        const newLinkEl = sourceDoc.createElement('link');
        newLinkEl.rel = 'stylesheet';
        newLinkEl.href = styleSheet.href;
        targetDoc.head.appendChild(newLinkEl);
      }
    });
  }
  useEffect(() => {
    const newPage = window.open(``, '_blank', 'width=300px,height=300px');

    if (newPage) {
      const detailContainer = newPage.document.createElement('div');
      newPage.document.body.append(detailContainer);
      copyStyles(document, newPage.document);
      setDiv(detailContainer);
    }
    window.addEventListener('beforeunload', () => newPage?.close());
    return window.removeEventListener('beforeunload', () => newPage?.close());
  }, []);

  return div ? createPortal(<DetailItem id={id} />, div) : null;
};
export default WrapperPortal;
