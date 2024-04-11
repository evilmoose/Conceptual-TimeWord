function timeWord(time) {
    const numbersToWords = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty'
    ];

    let [hour, minute] = time.split(':').map(num => parseInt(num, 10));
    let period = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour === 0 ? 12 : hour;

    let wordHour = numbersToWords[hour];
    let wordMinute = minute < 10 ? 'oh ' + numbersToWords[minute] :
                     minute < 20 ? numbersToWords[minute] :
                     numbersToWords[18 + Math.floor(minute / 10)] + (minute % 10 === 0 ? '' : ' ' + numbersToWords[minute % 10]);

    if (minute === 0) {
        return hour === 12 && period === 'am' ? 'midnight' :
               hour === 12 && period === 'pm' ? 'noon' :
               wordHour + " o'clock " + period;
    }

    return `${wordHour} ${wordMinute} ${period}`;
}

module.exports = timeWord;
