import { StaticImageData } from 'next/image';

export interface FormData {
    name: string;
    studentId: string;
    subject: string;
    courseEnrolled: string;
    query: string;
  }

 export interface student_FormData {
  topicCategory:string;
  subject:string;
  supportMessage:string;
 }

  export interface InputFieldParams {
    params: {
      name: string;    
      label?: string;     
      type: string;       
      placeholder?: string; 
    };
    onChange: (name: string, value: string) => void;
    widthClass?:string
  }


  export interface timeline {
    img: StaticImageData;
    stu_name?: string;
    stu_level?: string;
    stu_id?: string;
    mentor_name?:string
    mentor_designation?:string
    des1?: string;
    des2?:string
    date: string;
    time: string;
    cPanelImg?:StaticImageData;
  }


  export interface progressBar {
    progress: number; 
  }


  interface room_link_formField {
    id: string;
    type: string;
    placeholder: string;
    value?: string;
    onChange?: React.Dispatch<React.SetStateAction<string>>;
  }
  
  export interface room_link_formProps {
    title: string;
    fields: room_link_formField[];
    onSubmit: () => void;
    onEnd: (parameter: string) => void; // Update to accept a parameter
    onRecommendation?: (recommendation: string) => void;
    bool?:boolean
  }