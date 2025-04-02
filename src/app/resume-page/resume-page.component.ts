import { Component, ViewChild } from '@angular/core';
import { NgxCaptureService } from 'ngx-capture';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.css',
})
export class ResumePageComponent {
  exportPDF() {
    const data: any = document.getElementById('resume');
    html2canvas(data).then((canvas) => {
      const imgWidth = 208;
      // const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgHeight = 208;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('resume.pdf'); // Save the generated PDF
    });
  }
}
