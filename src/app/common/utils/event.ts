/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormArray, FormControl } from '@angular/forms';

// const charsets = {
//   latin: { halfRE: /[!-~]/g, fullRE: /[！-～]/g, delta: 0xfee0 },
//   hangul1: { halfRE: /[ﾡ-ﾾ]/g, fullRE: /[ᆨ-ᇂ]/g, delta: -0xedf9 },
//   hangul2: { halfRE: /[ￂ-ￜ]/g, fullRE: /[ᅡ-ᅵ]/g, delta: -0xee61 },
//   kana: {
//     delta: 0,
//     half: '｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ',
//     full:　'。「」、・ヲァィゥェォャュョッーアイウエオカキクケコサシ' +
//       'スセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン゛゜'
//   },
//   extras: { delta: 0, half: '¢£¬¯¦¥₩\u0020|←↑→↓■°', full: '￠￡￢￣￤￥￦\u3000￨￩￪￫￬￭￮' }
// };
// const sets = Object.keys(charsets).map((i:any) => charsets[i]);
const toFull = (set:any) => (c:any) =>
  set.delta
    ? String.fromCharCode(c.charCodeAt(0) + set.delta)
    : [...set.full][[...set.half].indexOf(c)];
const toHalf = (set:any) => (c:any) =>
  set.delta
    ? String.fromCharCode(c.charCodeAt(0) - set.delta)
    : [...set.half][[...set.full].indexOf(c)];
const re = (set:any, way:any) => set[way + 'RE'] || new RegExp('[' + set[way] + ']', 'g');

// export function onCheckboxChange(event: Event, checkboxes: FormArray): void {
//   const target = event.target as HTMLInputElement;

//   if (target.checked) {
//     checkboxes.push(new FormControl(target.value));
//   } else {
//     let i = 0;

//     checkboxes.controls.forEach((item: FormControl) => {
//       if (item.value === target.value) {
//         checkboxes.removeAt(i);

//         return;
//       }

//       i++;
//     });
//   }
// }

// export const convertHalfToFull1 = (str0:any) =>
//   sets.reduce((str, set) => str.replace(re(set, 'half'), toFull(set)), str0);

// export const convertFullToHalf = (str0:any) =>
//   sets.reduce((str, set) => str.replace(re(set, 'full'), toHalf(set)), str0);


const half_1:String[] = ['ｳﾞ', 'ｶﾞ', 'ｷﾞ', 'ｸﾞ', 'ｹﾞ', 'ｺﾞ', 'ｻﾞ', 'ｼﾞ', 'ｽﾞ', 'ｾﾞ', 'ｿﾞ', 'ﾀﾞ', 'ﾁﾞ', 'ﾂﾞ', 'ﾃﾞ', 'ﾄﾞ',
 'ﾊﾞ', 'ﾋﾞ', 'ﾌﾞ', 'ﾍﾞ', 'ﾎﾞ', 'ﾊﾟ', 'ﾋﾟ', 'ﾌﾟ', 'ﾍﾟ', 'ﾎﾟ'];
const full_1 = ['ヴ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド',
'バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ'];
const half_2 = ['ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ',
'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ',
'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ',
'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ',
'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ',
'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ',
'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ',
'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ',
'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ｦ',
'ﾝ', 'ｧ', 'ｨ', 'ｩ', 'ｪ',
'ｫ', 'ヵ', 'ヶ', 'ｬ', 'ｭ',
'ｮ', 'ｯ', '､', '｡', 'ｰ',
'｢', '｣', 'ﾞ', 'ﾟ', '0', '1',
'2', '3', '4', '5', '6', '7', '8', '9',
'~', '!', '@', '#', '$', '%', '^', '&', '*',
'(', ')', '-', '=', '+', '_',
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
'<', '>', '?', ':', ';', '|', '/'];
const full_2 = ['ア', 'イ', 'ウ', 'エ', 'オ',
'カ', 'キ', 'ク', 'ケ', 'コ',
'サ', 'シ', 'ス', 'セ', 'ソ',
'タ', 'チ', 'ツ', 'テ', 'ト',
'ナ', 'ニ', 'ヌ', 'ネ', 'ノ',
'ハ', 'ヒ', 'フ', 'ヘ', 'ホ',
'マ', 'ミ', 'ム', 'メ', 'モ',
'ヤ', 'ユ', 'ヨ', 'ラ', 'リ',
'ル', 'レ', 'ロ', 'ワ', 'ヲ',
'ン', 'ァ', 'ィ', 'ゥ', 'ェ',
'ォ', 'ヶ', 'ヶ', 'ャ', 'ュ',
'ョ', 'ッ', '、', '。', 'ー',
'「', '」', '”', '', '０', '１',
'２', '３', '４', '５', '６', '７', '８', '９',
'～', '！', '＠', '＃', '＄', '％', '＾', '＆','＊',
'（', '）', 'ー', '＝', '＋', '＿',
'ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ',
'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ', 'ｎ', 'ｏ', 'ｐ',
'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'W', 'ｘ','ｙ', 'ｚ',
'＜', '＞', '？', '：', '；', '｜', '／'];
const shiftCharCode = (Δ:any) => (c:any) => String.fromCharCode(c.charCodeAt(0) + Δ);

export const convertHalfToFull = (str0:any) => {
  for (let i = 0; i < half_1.length; i++) {
    str0 = str0.replaceAll(half_1[i], full_1[i]);
  }
  for (let i = 0; i < half_2.length; i++) {
    str0 = str0.replaceAll(half_2[i], full_2[i]);
  }
  return str0.replace(/[!-~]/g, shiftCharCode(0xFEE0));
};

export const convertFullToHalf = (str0:any) => {
  for (let i = 0; i < full_1.length; i++) {
    str0 = str0.replaceAll(full_1[i], half_1[i]);
    str0 = str0.replaceAll('ﾟ','');
  }
  for (let i = 0; i < full_2.length; i++) {
    str0 = str0.replaceAll(full_2[i], half_2[i]);
    str0 = str0.replaceAll('ﾟ','');
  }
  return str0;
};
