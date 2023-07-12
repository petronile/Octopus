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
        description: "قم بتحديد موقعك المناسب  على الخريطة ."
      },
      {
        title: "حدد الباقة",
        description: "قم بتحديد الباقة المناسبة لك من الخيارات ."
      },

      {
        title: "قم بتأكيد موعد و طريقة الدفع",
        description: "راجع الخدمة والتاريخ والوقت الذي اخترته وحدد طريقة الدفع المناسبة إليك بمجرد أن تكون راضيا، قم بتأكيد موعدك لتأمين حجزك."
      },
      {
        title: "قابل الفني الخاص بك",
        description:"سيصل فني أخطبوط في الوقت المحدد إلى موقعك وسيكون جاهز بجميع الأدوات اللازمة لخدمة سيارتك بأعلى معايير الجودة ."
      },
    ];
  }
}

