import ChackBoard from "@/components/Svgs/ChackBoard/ChackBoard";


interface Slide {
    title: string;
    description1: string;
    description2?: string
    buttonText: string;
    icon?: React.ReactNode
    backgroundImage: string; // Background image for each slide
}
export const slides: Slide[] = [
    {
        title: "تعمل الأكاديمية العربية للبرمجة كجسر يربط العقول التكنولوجية العربية في المهجر بالطلبة العرب أينما كانوا",
        description1: "تقدم الأكاديمية العربية للبرمجة تجربة تعلم متميزة من خلال مجموعة من الدروس والمناهج الاحترافية بجودة عالية",
        description2: "وأسلوب تدريسي ممتع يتناسب مع مختلف الطرق التعليمية للمبتدئين والمحترفين بإشراف مدربين ومبرمجين ذوي خبرة عالمية في المجال التقني",
        buttonText: "المسارات التعليمية",
        icon: <ChackBoard/>,
      backgroundImage: "/images/header-image.jpg", // Replace with your image paths
    },
    {
        title: "تسعى أكاديمية البرمجة العربية إلى تقديم أفضل البرامج التعليمية المتخصصة في مجالات البرمجة والتكنولوجيا الحديثة",
        description1: "تقدم الأكاديمية مناهج تعليمية متكاملة، تعتمد على أساليب تعلم مبتكرة ودورات تدريبية تفاعلية تلبي احتياجات الطلاب من مختلف المستويات",
        description2: "نحن نوفر بيئة تعليمية مرنة، بإشراف خبراء متميزين في مجالات البرمجة والتطوير، لتمكين المتعلمين من تحقيق أهدافهم المهنية في مجال التكنولوجيا",
        buttonText: "البرامج التدريبية",
        icon: <ChackBoard/>,
      backgroundImage: "/images/human2.jpeg", // Replace with your image paths
    },
];