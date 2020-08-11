function time() {
    let current_time = new Date();
    return [current_time.getHours(), current_time.getMinutes(), current_time.getSeconds()];
}

function am_pm_selector(){
    let t = time();
    if (t[0] >= 12) {
        return 'PM';
    } else {
        return 'AM';
    }
}

function pad_zeros(selection_criterion){
    let t = time();
    if (selection_criterion == 'minutes') {
        if (t[1] < 10) {
            return '0' + t[1];
        } else {
            return t[1];
        }
    } else {
        if (t[2] < 10) {
            return '0' + t[2];
        } else {
            return t[2];
        }
    }

}

function covert_time_to_12hr(){
    let hours = time()[0];
    if (hours == 0) {
        return 12;
    } else if (hours > 12){
        return hours - 12;
    } else {
        return hours;
    }
}

function display_clock_date(){
    let dates = split_date();
    document.getElementById("clock").innerHTML = `${dates[0]}, ${dates[1]} ${dates[2]} ${covert_time_to_12hr()}:${pad_zeros('minutes')}:${pad_zeros('seconds')} ${am_pm_selector()}`;
}

function split_date(){
    let current_date = new Date();
    let weekday = new Intl.DateTimeFormat('en',{weekday: 'long'}).format(current_date);
    let month = new Intl.DateTimeFormat('en', {month: 'long'}).format(current_date);
    let day = new Intl.DateTimeFormat('en', {day: 'numeric'}).format(current_date);
    return [weekday, month, day];

}

setInterval(display_clock_date,1000);
