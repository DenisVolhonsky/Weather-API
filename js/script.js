// var a=[[8,1,3],1,[5,4]];
// console.log(a[1]); //1
// console.log(a[0][2]); //3
// console.log(a[2][1]); //4
//
// var b=[[0,[0,0,7]],[0,6,2]];
// console.log(b[0][1][2]);//7
// console.log(b[0][1]);//6
// console.log(b[1][2]);//2
//
// var c=[[[[[[0,1,2,3]]]]]];
// console.log(c[0][0][0][0][0][3]);//3
//



$(document).ready(function (){
    $('#rez').on('click', f1);
});

function f1() {
    $.get( "http://api.openweathermap.org/data/2.5/weather",
        {
            "id": $('#inp').val(),
            "appid": "ee60a56d516461352f04a28877459c45"
        },
        function (data) {
            console.log(data);
            console.log(data.id);
            console.log(data.name);
            console.log(data.sys.country);
            console.log(data.main.temp-273);
            console.log(data.main.humidity);
            console.log(data.main.pressure*0.75);
            console.log(data.visibility/1000);
            console.log(data.wind.speed);
            console.log(data.weather[0].description);

            var out='';

            out+=`  
                        <p>Страна: <b>${data.sys.country}</b></p>
                        <p>Название города: <b>${data.name}</b></p>
                        <p>Температура: <b>${(Math.round(data.main.temp-273))}&deg;С</b></p>
                        <p>Влажность: <b>${data.main.humidity}%</b></p>
                        <p>Давление: <b>${data.main.pressure*0.75} кПа</b></p>
                        <p>Видимость: <b>${data.visibility/1000}км</b></p>
                        <p>Скорость ветра: <b>${data.wind.speed} м/с</b></p>
                        <p>Облачность: <b>${data.weather[0].description}</b></p>     
            `;


            $('.out').html(out);

        }
    );
}


