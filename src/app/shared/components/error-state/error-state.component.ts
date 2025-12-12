import { Component, ChangeDetectionStrategy, input, output, computed } from '@angular/core';

export type ErrorType = 'network' | 'server' | 'validation' | 'permission' | 'notfound' | 'generic';

@Component({
  selector: 'app-error-state',
  templateUrl: './error-state.component.html',
  styleUrls: ['./error-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorStateComponent {
  type = input<ErrorType>('generic');
  title = input<string>('');
  message = input<string>('');
  errorCode = input<string | number>('');
  showRetry = input<boolean>(false);
  retryText = input<string>('ลองอีกครั้ง');
  showDetails = input<boolean>(false);
  details = input<string>('');

  retry = output<void>();

  errorIcon = computed(() => {
    const iconMap: Record<ErrorType, string> = {
      network: 'wifi_off',
      server: 'dns',
      validation: 'error_outline',
      permission: 'lock',
      notfound: 'search_off',
      generic: 'error_outline'
    };
    return iconMap[this.type()] || 'error_outline';
  });

  defaultTitle = computed(() => {
    const titleMap: Record<ErrorType, string> = {
      network: 'ไม่สามารถเชื่อมต่อได้',
      server: 'เกิดข้อผิดพลาดจากเซิร์ฟเวอร์',
      validation: 'ข้อมูลไม่ถูกต้อง',
      permission: 'ไม่มีสิทธิ์เข้าถึง',
      notfound: 'ไม่พบข้อมูล',
      generic: 'เกิดข้อผิดพลาด'
    };
    return titleMap[this.type()] || 'เกิดข้อผิดพลาด';
  });

  defaultMessage = computed(() => {
    const messageMap: Record<ErrorType, string> = {
      network: 'กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ตและลองอีกครั้ง',
      server: 'เกิดข้อผิดพลาดจากเซิร์ฟเวอร์ กรุณาลองอีกครั้งในภายหลัง',
      validation: 'กรุณาตรวจสอบข้อมูลที่กรอกและลองอีกครั้ง',
      permission: 'คุณไม่มีสิทธิ์เข้าถึงข้อมูลนี้ กรุณาติดต่อผู้ดูแลระบบ',
      notfound: 'ไม่พบข้อมูลที่คุณกำลังค้นหา',
      generic: 'เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ กรุณาลองอีกครั้ง'
    };
    return messageMap[this.type()] || 'เกิดข้อผิดพลาด';
  });

  onRetry(): void {
    this.retry.emit();
  }
}


