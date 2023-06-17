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
          description: "نحن نقدر رضاك قبل كل شيء آخر. فريق دعم العملاء المتفاني لدينا مستعد دائما لمساعدتك في أي أسئلة أو مخاوف قد تكون لديك. تجربتك مع QuickLube هي على رأس أولوياتنا."
        },
        {
          img:"ic-yello-3",
          title: "زيت وفلاتر عالية الجودة",
          description: "نحن نؤمن باستخدام المنتجات عالية الجودة لسيارتك فقط. تتعاون QuickLube مع الموردين الرائدين لتوفير زيوت اصطناعية متميزة ومرشحات عالية الجودة، مما يضمن الأداء الأمثل وطول عمر المحرك."
        },
        {
          img:"ic-yello-2",
          title: "الفنيون المحترفون",
          description: "لقد اخترنا فريقا من الفنيين المعتمدين المتحمسين للسيارات. لديهم الخبرة للتعامل مع أي ماركة أو طراز، مما يضمن حصول سيارتك على الرعاية التي تستحقها. اجلس واسترخ ودع محترفينا يقومون بالباقي."
        },
        {
          img:"ic-yello-1",
          title: "الحجز الفوري",
          description: "مع بضع نقرات فقط على هاتفك، حدد موعدا لتغيير الزيت في الوقت والموقع المفضلين لديك. تجعل واجهتنا سهلة الاستخدام الحجز سريعا وسهلا، مما يسمح لك بالتركيز على أكثر ما يهم."
        },
      ];
    }
  }


