export class FormatUtils {
    
    public static parsePhoneNumber(phoneNumber: string): string {
        if (phoneNumber && phoneNumber.trim().length === 10) {
            phoneNumber = phoneNumber.trim();
            return '(' + phoneNumber.substr(0, 3) + ') ' + phoneNumber.substr(3, 3) + '-' + phoneNumber.substr(6);
        }
    }
}