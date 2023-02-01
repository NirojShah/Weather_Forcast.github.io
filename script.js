
$(document).ready(
    $("#city_name").val("")
)

function name_picker() {
    var city_name = $("#city_name").val()
    return city_name
}

$(document).ready(
    $(".mobile").click(function() {
        $(".na").slideToggle("slow")
    })
)



$(document).ready(
    $(".check_weather").click(function(){
        const settings = {
	"async": true,
    "crossDomain": true,
    "url": "https://aerisweather1.p.rapidapi.com/forecasts/"+name_picker()+",in",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "96d73abc7bmsh757d81e8a0fe32cp1d767djsnf40f1c0672c9",
        "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com"
        }
};

$.ajax(settings).done(function (response) {
    console.log(response);


    // data

    // let city = (response.response[0].loc.long)
    // let average_in_c = (response.response[0].periods[0].avgTempC)
    // let weather_primary = (response.response[0].periods[0].weatherPrimary)

    // let wind_speed = (response.response[0].periods[0].windSpeed80mKPH)
    // let wind_direction = (response.response[0].periods[0].windDirMin)
    // let visibility_km = (response.response[0].periods[0].visibilityKM)
    // let sunrise = (response.response[0].periods[0].sunriseISO)
    // let sunset = (response.response[0].periods[0].sunsetISO)

    // console.log(city,average_in_c,weather_primary,wind_speed,wind_direction,visibility_km,sunrise,sunset)

    // alert("You want to check "+city+" weather.")
    

    $(".show").click(function() {
        let city = name_picker()
        let average_in_c = (response.response[0].periods[0].avgTempC)
        let weather_primary = (response.response[0].periods[0].weatherPrimary)

        let wind_speed = (response.response[0].periods[0].windSpeed80mKPH)
        let wind_direction = (response.response[0].periods[0].windDirMin)
        let visibility_km = (response.response[0].periods[0].visibilityKM)
        let sunrise = (response.response[0].periods[0].sunriseISO)
        let sunset = (response.response[0].periods[0].sunsetISO)

        let date_time_iso = (response.response[0].periods[0].dateTimeISO)


        document.getElementById("city_name_p").innerHTML = city;
        document.getElementById("avg_c").innerHTML = average_in_c;
        document.getElementById("weather_primary").innerHTML = weather_primary;
        document.getElementById("wind_spedd").innerHTML = wind_speed;
        document.getElementById("wind_direction").innerHTML = wind_direction;
        document.getElementById("visibility_km").innerHTML = visibility_km;
        document.getElementById("sun_rise").innerHTML = sunrise;
        document.getElementById("sun_set").innerHTML = sunset;


        document.getElementById("date_time").innerHTML = date_time_iso


        console.log(city,average_in_c,weather_primary,wind_speed,wind_direction,visibility_km,sunrise,sunset)


        // second day

        let average_in_c2 = (response.response[0].periods[1].avgTempC)
        let weather_primary2 = (response.response[0].periods[1].weatherPrimary)

        let wind_speed2 = (response.response[0].periods[1].windSpeed80mKPH)
        let wind_direction2 = (response.response[0].periods[1].windDirMin)
        let visibility_km2 = (response.response[0].periods[1].visibilityKM)
        let sunrise2 = (response.response[0].periods[1].sunriseISO)
        let sunset2 = (response.response[0].periods[1].sunsetISO)

        let date_time_iso2 = (response.response[0].periods[1].dateTimeISO)




        document.getElementById("city_avg2").innerHTML = average_in_c2;
        document.getElementById("city_weather2").innerHTML = weather_primary2;
        document.getElementById("city_wind2").innerHTML = wind_speed2;
        document.getElementById("city_direc2").innerHTML = wind_direction2;
        document.getElementById("city_visib2").innerHTML = visibility_km2;
        document.getElementById("city_sunr2").innerHTML = sunrise2;
        document.getElementById("city_suns2").innerHTML = sunset2;


        document.getElementById("date_time2").innerHTML = date_time_iso2;

        console.log(date_time_iso2)







        // Third DAY

        let average_in_c3 = (response.response[0].periods[2].avgTempC)
        let weather_primary3 = (response.response[0].periods[2].weatherPrimary)

        let wind_speed3 = (response.response[0].periods[2].windSpeed80mKPH)
        let wind_direction3 = (response.response[0].periods[2].windDirMin)
        let visibility_km3 = (response.response[0].periods[2].visibilityKM)
        let sunrise3 = (response.response[0].periods[2].sunriseISO)
        let sunset3 = (response.response[0].periods[2].sunsetISO)

        let date_time_iso3 = (response.response[0].periods[2].dateTimeISO)



        document.getElementById("city_avg3").innerHTML = average_in_c3;
        document.getElementById("city_weather3").innerHTML = weather_primary3;
        document.getElementById("city_wind3").innerHTML = wind_speed3;
        document.getElementById("city_direc3").innerHTML = wind_direction3;
        document.getElementById("city_visib3").innerHTML = visibility_km3;
        document.getElementById("city_sunr3").innerHTML = sunrise3;
        document.getElementById("city_suns3").innerHTML = sunset3;


        document.getElementById("date_time3").innerHTML = date_time_iso3

        console.log(date_time_iso3)




        // Fourth DAY


        let average_in_c4 = (response.response[0].periods[3].avgTempC)
        let weather_primary4 = (response.response[0].periods[3].weatherPrimary)

        let wind_speed4 = (response.response[0].periods[3].windSpeed80mKPH)
        let wind_direction4 = (response.response[0].periods[3].windDirMin)
        let visibility_km4 = (response.response[0].periods[3].visibilityKM)
        let sunrise4 = (response.response[0].periods[3].sunriseISO)
        let sunset4 = (response.response[0].periods[3].sunsetISO)

        let date_time_iso4 = (response.response[0].periods[3].dateTimeISO)



        document.getElementById("city_avg4").innerHTML = average_in_c4;
        document.getElementById("city_weather4").innerHTML = weather_primary4;
        document.getElementById("city_wind4").innerHTML = wind_speed4;
        document.getElementById("city_direc4").innerHTML = wind_direction4;
        document.getElementById("city_visib4").innerHTML = visibility_km4;
        document.getElementById("city_sunr4").innerHTML = sunrise4;
        document.getElementById("city_suns4").innerHTML = sunset4;


        document.getElementById("date_time4").innerHTML = date_time_iso4

        console.log(date_time_iso4)


        
        // Fifth DAY



        let average_in_c5 = (response.response[0].periods[4].avgTempC)
        let weather_primary5 = (response.response[0].periods[4].weatherPrimary)

        let wind_speed5 = (response.response[0].periods[4].windSpeed80mKPH)
        let wind_direction5 = (response.response[0].periods[4].windDirMin)
        let visibility_km5 = (response.response[0].periods[4].visibilityKM)
        let sunrise5 = (response.response[0].periods[4].sunriseISO)
        let sunset5 = (response.response[0].periods[4].sunsetISO)

        let date_time_iso5 = (response.response[0].periods[4].dateTimeISO)



        document.getElementById("city_avg5").innerHTML = average_in_c5;
        document.getElementById("city_weather5").innerHTML = weather_primary5;
        document.getElementById("city_wind5").innerHTML = wind_speed5;
        document.getElementById("city_direc5").innerHTML = wind_direction5;
        document.getElementById("city_visib5").innerHTML = visibility_km5;
        document.getElementById("city_sunr5").innerHTML = sunrise5;
        document.getElementById("city_suns5").innerHTML = sunset5;


        document.getElementById("date_time5").innerHTML = date_time_iso5;

        console.log(date_time_iso5)




        // Sixth DAY




        let average_in_c6 = (response.response[0].periods[5].avgTempC)
        let weather_primary6 = (response.response[0].periods[5].weatherPrimary)

        let wind_speed6 = (response.response[0].periods[5].windSpeed80mKPH)
        let wind_direction6 = (response.response[0].periods[5].windDirMin)
        let visibility_km6 = (response.response[0].periods[5].visibilityKM)
        let sunrise6 = (response.response[0].periods[5].sunriseISO)
        let sunset6 = (response.response[0].periods[5].sunsetISO)

        let date_time_iso6 = (response.response[0].periods[5].dateTimeISO)



        document.getElementById("city_avg6").innerHTML = average_in_c6;
        document.getElementById("city_weather6").innerHTML = weather_primary6;
        document.getElementById("city_wind6").innerHTML = wind_speed6;
        document.getElementById("city_direc6").innerHTML = wind_direction6;
        document.getElementById("city_visib6").innerHTML = visibility_km6;
        document.getElementById("city_sunr6").innerHTML = sunrise6;
        document.getElementById("city_suns6").innerHTML = sunset6;


        document.getElementById("date_time6").innerHTML = date_time_iso6;

        console.log(date_time_iso6)





        // Seventh DAY


        let average_in_c7 = (response.response[0].periods[6].avgTempC)
        let weather_primary7 = (response.response[0].periods[6].weatherPrimary)

        let wind_speed7 = (response.response[0].periods[6].windSpeed80mKPH)
        let wind_direction7 = (response.response[0].periods[6].windDirMin)
        let visibility_km7 = (response.response[0].periods[6].visibilityKM)
        let sunrise7 = (response.response[0].periods[6].sunriseISO)
        let sunset7 = (response.response[0].periods[6].sunsetISO)

        let date_time_iso7 = (response.response[0].periods[6].dateTimeISO)



        document.getElementById("city_avg7").innerHTML = average_in_c7;
        document.getElementById("city_weather7").innerHTML = weather_primary7;
        document.getElementById("city_wind7").innerHTML = wind_speed4;
        document.getElementById("city_direc7").innerHTML = wind_direction7;
        document.getElementById("city_visib7").innerHTML = visibility_km7;
        document.getElementById("city_sunr7").innerHTML = sunrise7;
        document.getElementById("city_suns7").innerHTML = sunset7;


        document.getElementById("date_time7").innerHTML = date_time_iso7;

        console.log(date_time_iso7)

       

        
        
    })

    $(".check_forcast").click(function() {
        $(".other_days").fadeToggle("slow");

    })


});
})

)