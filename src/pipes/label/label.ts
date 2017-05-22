import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the LabelPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'label',
})
export class LabelPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {

    if(value && typeof value === 'string' && value.trim() !== '' && Object.keys(labelSrt).indexOf(value) !== -1){
      return labelSrt[value]
    }else {
      return value;
    }
  }
}

export let labelSrt = {
  "basics":"基本资料",
  "basics-name":"姓名",
  "basics-label":"职位",
  "basics-picture":"头像",
  "basics-email":"email",
  "basics-phone":"电话",
  "basics-website":"个人网站",
  "basics-summary":"自我描述",

  "location":"位置",
  "location-address":"居住地",
  "location-postalCode":"邮政编码",
  "location-city":"城市",
  "location-countryCode":"国家编码",
  "location-region":"省份",

  "profiles":"账号",

  "work":"工作经验",
  "work-company":"公司名",
  "work-position":"职务",
  "work-website":"网址",
  "work-summary":"描述",

  "volunteer":"公共事业",
  "volunteer-organization":"组织",
  "volunteer-position":"职务",
  "volunteer-summary":"描述",

  "education":"教育",
  "education-institution":"学校",
  "education-area":"专业",
  "education-gpa":"GPA",
  "education-courses":"培训经历",

  "awards":"证书",
  "awards-title":"名称",
  "awards-date":"颁发日期",
  "awards-awarder":"授奖人",
  "awards-summary":"描述",

  "publications":"作品",
  "publications-name":"名称",
  "publications-publisher":"作者",
  "publications-releaseDate":"发布日期",
  "publications-website":"网址",
  "publications-summary":"描述",

  "skills":"技能",
  "skills-name":"名称",
  "skills-level":"熟练度",
  "skills-keywords":"关键字",

  "languages":"语言",
  "languages-fluency":"熟练度",

  "interests":"兴趣",

  "references":"推荐",
  "references-name":"推荐人"
};
