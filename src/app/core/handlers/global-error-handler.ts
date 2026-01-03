import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '@core/services';
import { NotificationService } from '@core/services';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor(
        private injector: Injector,
        private zone: NgZone
    ) { }

    handleError(error: any): void {
        const errorService = this.injector.get(ErrorService);
        const notificationService = this.injector.get(NotificationService);

        // Check if it's an error from an HTTP request
        // These are already handled by ErrorService via catchError in services/interceptors if set up correctly
        // But unhandled ones will fall through here

        // Get user friendly message
        const message = errorService.getErrorMessage(error);

        // Always log the full error to console
        console.error('GlobalErrorHandler:', error);

        // Show notification to user
        // Run in NgZone to ensure UI updates happen (Angular change detection)
        this.zone.run(() => {
            // Don't show notification for 'ChunkLoadError' usually caused by deployment updates
            if (error.message && error.message.includes('Loading chunk')) {
                // Can reload page automatically if desired
                return;
            }

            notificationService.showError(message);
        });
    }
}
