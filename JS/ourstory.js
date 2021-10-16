let space = document.getElementsByClassName("space")
let bgi = document.getElementById("bgi")
let space_text = document.getElementsByClassName("space-text")[0]
let space_text_phone = document.getElementsByClassName("space-text_phone")[0]


let list1 = `
<h2>室內空間</h2>
<p>
  北歐風(Scandi Style)是泛指北歐國家(如：瑞典、芬蘭、丹麥、挪威、冰島等)由於其地理、氣候、文化相近，在空間設計強調極簡主義，運用光線、木質、鐵件等搭配方式，將居家環境營造出簡單清新的感受。
</p>
`
let list2 = `
<h2>展覽空間</h2>
<p>
  主建物為圓頂造形，古色古香，其左右及後側並設有多個小型展室。目前作為全國學生美展、全國學生圖畫書創作獎優秀作品展及本館主辦展之主要場地，亦開放給國內公私立機構、團體、學校與各級政府機關申請租借使用。
</p>
`
let list3 = `
<h2>閱讀空間</h2>
<p>
  其實書房也可以有自己的個性，除了提供工作、閱讀的基本機能外，也能營造出一個靜心的區域，讓人有放空、休憩、徜徉書海、遨遊網路的舒適空間，無論是開放式的自在空間抑或是隱密寧靜的個人小天地，都能盡情表現自我生活風格喔！
</p>
`
let list4 = `
<h2>廁所</h2>
<p>
  每年的11月19日是聯合國規定的『世界廁所日』，設定這個日子的初衷是為了提高改善全球公共環境衛生的意識。旅途中不得不去的地方，就是廁所。反正都要去，不如就揀最有特色的一個吧。網站Cheapflights.com選出「全球十大精彩廁所」，讓你這些年來刻板的如廁過程變得充滿娛樂性!
</p>
`
let list5 = `
<h2>遊戲空間</h2>
<p>
  「史前館的溜滑梯要被拆掉了！？」 除了教育，我們還可以為孩子做些什麼？ 對！你可以一起打造，一個屬於孩子的樂園。 如果你記憶裡的公園是溜滑梯、盪鞦韆，那你應該來聽聽另一種遊戲地景。 如果你的記憶裡沒有遊戲的經驗，那你更應該來為我們未來的孩子，創造一個可能。 尤其，在臺東。
</p>
`
let list6 = `
<h2>戶外空間</h2>
<p>
  大塊不規則的石板拼貼出一座有趣的庭園行走空間，搭配小巧多樣的各類植栽，充分表現自由徜徉小天地的樂趣。寬大高聳的粉色石柱搭建成像拱廊也像神殿的庭園空間，配合兩道精心照料的花草樹木，予人高雅大氣的莊重氣質。
</p>
`


for(let i = 0; i < space.length; i++){
  // console.log(space[i])
  space[i].addEventListener("click", function(){
    if(space[i].classList.contains("space-1")){
      space_text.innerHTML = list1;
      space_text_phone.innerHTML = list1;
      bgi.classList.add("bgi1");
      bgi.classList.remove("bgi2", "bgi3", "bgi4", "bgi5", "bgi6");
    }
    if(space[i].classList.contains("space-2")){
      space_text.innerHTML = list2;
      space_text_phone.innerHTML = list2;
      bgi.classList.add("bgi2");
      bgi.classList.remove("bgi1", "bgi3", "bgi4", "bgi5", "bgi6");
    }
    if(space[i].classList.contains("space-3")){
      space_text.innerHTML = list3;
      space_text_phone.innerHTML = list3;
      bgi.classList.add("bgi3");
      bgi.classList.remove("bgi1", "bgi2", "bgi4", "bgi5", "bgi6");
    }
    if(space[i].classList.contains("space-4")){
      space_text.innerHTML = list4;
      space_text_phone.innerHTML = list4;
      bgi.classList.add("bgi4");
      bgi.classList.remove("bgi1", "bgi2", "bgi3", "bgi5", "bgi6");
    }
    if(space[i].classList.contains("space-5")){
      space_text.innerHTML = list5;
      space_text_phone.innerHTML = list5;
      bgi.classList.add("bgi5");
      bgi.classList.remove("bgi1", "bgi2", "bgi3", "bgi4", "bgi6");
    }
    if(space[i].classList.contains("space-6")){
      space_text.innerHTML = list6;
      space_text_phone.innerHTML = list6;
      bgi.classList.add("bgi6");
      bgi.classList.remove("bgi1", "bgi2", "bgi3", "bgi4", "bgi5");
    }
  })
}


