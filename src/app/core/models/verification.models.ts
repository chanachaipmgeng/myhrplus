/**
 * Verification Models
 * Models for verification, biometric, QR code, and RFID
 */

import { VerificationType, VerificationStatus, RFIDCardType, RFIDCardStatus } from './common.models';

export interface Verification {
  verification_id: string;
  company_id: string;
  member_id?: string;
  visitor_id?: string;
  guest_id?: string;
  verification_type: VerificationType;
  verification_method: string;
  status: VerificationStatus;
  confidence_score?: number;
  device_id?: string;
  door_id?: string;
  timestamp: string;
  metadata?: Record<string, any>;
  created_at: string;
}

export interface FaceEnrollment {
  face_id: string;
  member_id: string;
  encoding: number[];
  quality_score: number;
  enrolled_at: string;
}

export interface RFIDCard {
  rfid_card_id: string;
  company_id: string;
  member_id?: string;
  card_number: string;
  card_type: RFIDCardType;
  status: RFIDCardStatus;
  issued_at?: string;
  expires_at?: string;
  created_at: string;
  updated_at: string;
}

export interface QRCode {
  qr_code_id: string;
  code: string;
  qr_image_url: string;
  expires_at?: string;
  created_at: string;
}

export interface QRCodeGenerateRequest {
  member_id?: string;
  visitor_id?: string;
  guest_id?: string;
  expires_in?: number; // minutes
  access_level?: string;
}

