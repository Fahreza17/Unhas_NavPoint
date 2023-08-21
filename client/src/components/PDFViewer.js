// import React, { useState } from 'react'
// import './PDFViewer.css'
// import { Viewer } from '@react-pdf-viewer/core';
// import { Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import pdfFile from './document/SDGs.pdf';

// export default function PDFViewer() {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div className="pdf-container">
//       <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
//         <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />
//       </Worker>
//     </div>
//   );
// }


import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

function PDFViewer() {

    const docs = [
        { uri: require("./document/SDGs.pdf"), 
        fileType : "pdf",
        fileName : "SDGs Policy Brief"},        

      ];

  return (
    <div className="pdf-container">
        <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </div>
  )
}

export default PDFViewer