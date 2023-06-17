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
          img:"ic-yello-4",
          title: "دعم العملاء المتميز",
          description: "خدمة عملاء 24/7 نحن نهتم ونقدر رضاك قبل كل شي ، فريق دعم العملاء لدى أخطبوط مستعد دائماً لمساعدتك في أي اسئلة أو مخاوف قد تكون لديك وذلك طيله ايام الأسبوع ولمدة 24 ساعة."
        },
        {
          img:"ic-yello-3",
          title: "زيت وفلاتر عالية الجودة",
          description: "ضمان معتمد في أخطبوط حرصنا على أختيار أعلى الزيوت والفلاتر جودة مما يضمن الاداء الأمثل لمحرك سيارتك، مع اصدار فواتير معتمدة تضمن لك استمرارية ضمان الوكالة لسيارتك."
        },
        {
          img:"ic-yello-2",
          title: "فنيين محترفين",
          description: "لقد اخترنا فريقا من الفنيين المعتمدين المتحمسين للسيارات. لديهم الخبرة للتعامل مع أي ماركة أو طراز، مما يضمن حصول سيارتك على الرعاية التي تستحقها. اجلس واسترخ ودع محترفينا يقومون بالباقي."
        },
        {
          img:"ic-yello-1",
          title: "الحجز الفوري",
          description: "حجز بكل سهولة ويسر فقط أدخل بيانات سيارتك ثم أختر الباقة المناسبة ثم حدد موقعك"
        },
      ];
    }
  }


