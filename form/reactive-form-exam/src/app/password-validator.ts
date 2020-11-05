// 리액티브 폼은 템플릿의 컴포넌트 클래스 내부에서 생성한 FormControl에 검증기를 추가함
import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static match(form: AbstractControl) {
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;

    if (password !== confirmPassword) {
      return { match: { password, confirmPassword } };
    } else {
      return null;
    }
  }
}
