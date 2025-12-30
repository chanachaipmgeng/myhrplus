import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import Swal from 'sweetalert2'; // Note: sweetalert2 package needs to be installed: npm install sweetalert2
import { GlassCardComponent } from '@shared/components/glass-card/glass-card.component';
import { CodeViewerComponent } from '@features/demo/shared/code-viewer/code-viewer.component';

// Dynamic import for sweetalert2 (will be loaded when needed)
let SwalInstance: any;

@Component({
  selector: 'app-sweetalert2-demo',
  standalone: true,
  imports: [CommonModule, GlassCardComponent, CodeViewerComponent],
  templateUrl: './sweetalert2-demo.component.html',
  styleUrls: ['./sweetalert2-demo.component.scss']
})
export class SweetAlert2DemoComponent {
  basicExample = `import Swal from 'sweetalert2';

Swal.fire('สำเร็จ!', 'บันทึกข้อมูลเรียบร้อยแล้ว', 'success');`;

  confirmExample = `Swal.fire({
  title: 'ยืนยันการลบ',
  text: 'คุณแน่ใจหรือไม่?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'ลบ',
  cancelButtonText: 'ยกเลิก'
}).then((result) => {
  if (result.isConfirmed) {
    // Handle delete
  }
});`;

  async loadSweetAlert2(): Promise<any> {
    if (!SwalInstance) {
      try {
        // Dynamic import - use Function constructor to avoid compilation error
        const importDynamic = new Function('specifier', 'return import(specifier)');
        const sweetalert2Module = await importDynamic('sweetalert2');
        SwalInstance = sweetalert2Module.default || sweetalert2Module;
        return SwalInstance;
      } catch (error) {
        console.error('SweetAlert2 is not installed. Please run: npm install sweetalert2');
        alert('SweetAlert2 is not installed. Please install it first: npm install sweetalert2');
        return null;
      }
    }
    return SwalInstance;
  }

  async showSuccess(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'สำเร็จ!',
        text: 'บันทึกข้อมูลเรียบร้อยแล้ว',
        icon: 'success',
        confirmButtonText: 'ตกลง'
      });
    }
  }

  async showError(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'เกิดข้อผิดพลาด!',
        text: 'ไม่สามารถบันทึกข้อมูลได้',
        icon: 'error',
        confirmButtonText: 'ตกลง'
      });
    }
  }

  async showWarning(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'คำเตือน!',
        text: 'กรุณาตรวจสอบข้อมูลอีกครั้ง',
        icon: 'warning',
        confirmButtonText: 'ตกลง'
      });
    }
  }

  async showInfo(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'ข้อมูล',
        text: 'นี่คือข้อความแจ้งเตือน',
        icon: 'info',
        confirmButtonText: 'ตกลง'
      });
    }
  }

  async showQuestion(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'คำถาม',
        text: 'คุณต้องการดำเนินการต่อหรือไม่?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'ใช่',
        cancelButtonText: 'ไม่'
      });
    }
  }

  async showConfirm(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'ยืนยันการลบ',
        text: 'คุณแน่ใจหรือไม่ว่าต้องการลบข้อมูลนี้?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'ลบ',
        cancelButtonText: 'ยกเลิก'
      }).then((result: any) => {
        if (result.isConfirmed && Swal) {
          Swal.fire('ลบสำเร็จ!', 'ข้อมูลถูกลบแล้ว', 'success');
        }
      });
    }
  }

  async showCustom(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'Custom Alert',
        html: '<p>นี่คือ <strong>HTML</strong> content</p>',
        icon: 'info',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="ri-check-line"></i> ตกลง',
        cancelButtonText: '<i class="ri-close-line"></i> ยกเลิก',
        confirmButtonAriaLabel: 'ตกลง',
        cancelButtonAriaLabel: 'ยกเลิก'
      });
    }
  }

  async showTimer(): Promise<void> {
    const Swal = await this.loadSweetAlert2();
    if (Swal) {
      Swal.fire({
        title: 'Auto close alert',
        text: 'Alert นี้จะปิดอัตโนมัติใน 3 วินาที',
        icon: 'info',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  }
}










