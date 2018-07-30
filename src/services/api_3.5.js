import request from "../utils/request";
const baseUrl = url => 
  `http://v3.wufazhuce.com:8000${url}&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=web`;

export async function getDate() {
  return await request(baseUrl("/api/onelist/idlist/?channel=wdj"));
}

export function getOneList(date) {
  return request(baseUrl(`/api/onelist/${date}/0?channel=wdj`));
}
// content_list[0].category: 
// 0:摄影, 1:one story ,2: 连载 3: 广告 4:问答 ,5:音乐,6:影视

// export function