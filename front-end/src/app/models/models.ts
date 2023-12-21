
export class InfoModel{
  [index: string]: string | number
  website_title = ''
  job_title =''
  name =''
  bio =''
  aim =''
  education_sum =''
  specialization =''
  experience_years =''
  cert_numbers =''
  last_name =''
  about =''
  mail =''
  phone =''
  location =''
  linkedin =''
  facebook =''
  insta =''
  whatsapp_link =''
  img =''
}


export class EducationModel{
  id =''
  date =''
  title =''
  description =''
}


export class CourseModel{
  id =''
  date =''
  name =''
}


export class LanguageModel{
  id =''
  name =''
  description =''
}

export class ExpDesModel{
  id =''
  title =''
  job_id =''
  description = ''
}

export class ExperienceModel{
  id =''
  date =''
  job =''
  des:ExpDesModel[] = []
}



