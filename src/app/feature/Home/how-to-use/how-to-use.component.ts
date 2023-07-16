import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-use',
  templateUrl: './how-to-use.component.html',
  styleUrls: ['./how-to-use.component.scss']
})
export class HowToUseComponent {
  itemsDetails: any[];

  constructor() {
    this.itemsDetails = [
      {
        title: "قم بالتسجيل أو تسجيل الدخول",
        description:"افتح التطبيق وقم بإنشاء حسابك من خلال تقديم المعلومات المطلوبة أو تسجيل الدخول إذا كان لديك بالفعل حساب موجود."
      },
      {
        title: "حدد الموقع ",
        description: "قم بتحديد موقعك من الخريطة ."
      },
      {
        title: "أختر الباقة ",
        description: "قم باختيار الباقة المناسبة لك من الخيارات المتوفرة."
      },

      {
        title: "قم بتأكيد الموعد وتحديد طريق الدفع",
        description: "قم بتحديد موعد الخدمة بالتاريخ والوقت المناسب لك ثم قم بتحديد طريقة الدفع وأكد طلبك ."
      },
      {
        title: "قابل الفني الخاص بك",
        description:"سيصل فني أخطبوط في الوقت المحدد إلى موقعك وسيكون جاهز بجميع الأدوات اللازمة لخدمة سيارتك بأعلى معايير الجودة ."
      },
    ];
  }
}

