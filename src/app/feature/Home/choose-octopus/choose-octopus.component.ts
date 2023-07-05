import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-octopus',
  templateUrl: './choose-octopus.component.html',
  styleUrls: ['./choose-octopus.component.scss']
})
export class ChooseOctopusComponent {
    jokes: any[];

    constructor() {
      this.jokes = [



        {
          img:"ic-yello-1",
          title: "دعم العملاء المستمر",
          description:"خدمة عملاء علي مدار الساعة نحن نهتم ونقدر رضاك قبل كل شيء , فريق دعم العملاء لدي أخطبوط مستعد دائما لمساعدتك في أي اسئلة او استفسار قد تكون لديك وذلك طيلة ايام الأسبوع ولمدة 24 ساعة"
        },
   
 
        {
          img:"ic-yello-4",
          title: "الحجز الفوري",
          description: "حجز بكل سهولة ويسر فقط أدخل بيانات سيارتك ثم أختر الباقة المناسبة ثم حدد موقعك"
        },
        {
          img:"ic-yello-3",
          title: "فنيين محترفين",
          description: "لقد كونا فريق من الفنيين المعتمدين والمستعدين لسيارتك . لديهم الخبرة للتعامل مع أي ماركة أو طراز مما يضمن حصول سيارتك علي الرعاية التي تستحقها . اجلس واسترخ ودع محترفينا يقمون بالباقي "
        },
        {
          img:"ic-yello-2",
          title: "زيت وفلاتر عالية الجودة",
          description: "ضمان معتمد في أخطبوط حرصنا على أختيار أعلى الزيوت والفلاتر جودة مما يضمن الاداء الأمثل لمحرك سيارتك، مع اصدار فواتير معتمدة تضمن لك استمرارية ضمان الوكالة لسيارتك."
        },
      ];
    }
  }


