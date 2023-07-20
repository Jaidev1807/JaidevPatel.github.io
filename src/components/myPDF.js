import { Document, Page } from "react-pdf";
import pdfFile from "../assets/Resume.pdf";

export default function MyPDF() {
  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
