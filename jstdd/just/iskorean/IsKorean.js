var App = App || {};

App.IsKorean = () => {
  let url = "http://ipinfo.io";
  let result

  return {
    getCountry() {
      return axios.get(url).then(res => {
        console.log(res)
        return res.data
      })
    },
    test() {
      axios.get(url)
      .then(res=>{
        console.log("안녕")
        console.log(res)
        console.log("반가워")
      })
      .then(() => {
        console.log("다시")
      })
    }
    ,

    async printCountry() {
      getRes = await this.getCountry()
      result = getRes['country']
      console.log(result)
      return result
    },

  };
};

// var isKorean;

// // 국적확인
// if (sessionStorage.getItem("isKorean") === null) {
//   $.get(
//     "http://ipinfo.io",
//     function(response) {
//       if (response.country === "KR") {
//         sessionStorage.setItem("isKorean", true);
//       } else {
//         sessionStorage.setItem("isKorean", false);
//       }
//     },
//     "jsonp"
//   ).done(function() {
//     trueKorean();
//   });
// } else {
//   trueKorean();
// }
// function trueKorean() {
//   if (sessionStorage.getItem("isKorean") === "true") {
//     showKorean("item_money_box");
//     function showKorean(cn) {
//       var korean = document.getElementsByClassName(cn);
//       for (var i = 0; i < korean.length; i++) {
//         korean[i].style.display = "block";
//       }
//     }
//   }
// }
